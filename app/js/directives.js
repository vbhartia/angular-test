'use strict';

/* Directives */

var appName = "Dinner Table"


angular.module('myApp.directives', []).
  directive('appVersion', ['version', function(version) {
    return function(scope, elm, attrs) {
      elm.text(version);
    };
  }]).
  directive('appName', function() {
    return {
    	template: 'Dinner Table'
    	}
    });