'use strict';

/**
 * @ngdoc directive
 * @name ngCkanApp.directive:search
 * @description
 * # search
 */
angular.module('ngCkanApp')
  .directive('search', function () {
    return {
      restrict: 'A',

      link: function postLink(scope, element, attrs) {
        scope.searchDatasets('');

        element.on('keyup', function(event) {
          var code = event.keyCode || event.which;
          if (code === 13) {
            scope.searchDatasets(element.val());
          }
        });
      }
    };
  });
