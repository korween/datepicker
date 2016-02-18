var bulk = require('bulk-require');

module.exports = angular.module('datepickerPlugin.datepicker',[]);

bulk(__dirname,['./**/!(*_index).js']);