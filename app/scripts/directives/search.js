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
      scope: {
        searchBy: '&',
      },

      link: function postLink(scope, element, attrs) {
        scope.searchBy({ q: '' });

        element.on('keyup', function(event) {
          var code = event.keyCode || event.which;
          if (code === 13) {
            scope.searchBy({q: element.val()});
          }
        });
      }
    };
  });
