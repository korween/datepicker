var gulp = require('gulp');
var browserify = require('browserify');
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var clean = require('gulp-clean');
var minifyCSS = require('gulp-minify-css');
var bulkify = require('bulkify');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var ngAnnotate = require('gulp-ng-annotate');
var uglify = require('gulp-uglify');

/* Vendor JS files are compiled and resolved by browserify */

var vendorJS = [
    './node_modules/angular/angular.js',
    './vendor/*.js'
];

/* Vendor CSS files are minified into vendor.css and placed into dist/assets/css/vendor.css */

var vendorCSS = [
    './node_modules/bootstrap/dist/css/bootstrap.css',
];

/* This part looks hackish but it's actually pretty clean for what it does */

gulp.task('scripts', function() {
    var opts= {entries: './src/index.js',transform: ['bulkify']}
    var b = browserify(opts);
    b.transform('bulkify',{});

    var stream = b.bundle().on('error',function(err) {
        throw new Error('Could not create bundle');
        this.emit('end');
    }).pipe(source('datepicker.min.js'));

    stream
        .pipe(buffer())     // We need to put our stream into a buffer
        .pipe(ngAnnotate()) // Then include angular dependencies
        .pipe(uglify())     // Then minify JS
        .pipe(gulp.dest('dist'))
})

gulp.task('vendorJS', function() {
    gulp.src(vendorJS)
        .pipe(concat('vendor.js'))
        .pipe(gulp.dest('./dist/'));
});

gulp.task('styles', function() {
    gulp.src(['src/styles/datepicker.scss'])
        .pipe(sass())
        .pipe(minifyCSS())
        .pipe(concat('datepicker.min.css'))
        .pipe(gulp.dest('./dist/'))
})

gulp.task('html', function() {
    gulp.src("src/index.html")
        .pipe(gulp.dest('dist/'))
    gulp.src("src/views/**/*.html")
        .pipe(gulp.dest('dist/views/'))
})

gulp.task('default', function() {
    gulp.run('vendorJS', 'scripts', 'styles', 'html');

    gulp.watch('src/**', ['scripts'])
    gulp.watch('src/styles/**', ['styles'])
    gulp.watch('**/*.html', ['html'])
})