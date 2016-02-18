require('fs');
require('./datepicker/_index');

angular.element(document).ready(activate);

function activate() {
    var requirements = [
        'datepickerPlugin.datepicker'
    ];
    window.datepickerPlugin = angular.module('datepickerPlugin',requirements);
    angular.bootstrap(document,['datepickerPlugin']);
}