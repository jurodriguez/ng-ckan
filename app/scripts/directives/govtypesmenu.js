'use strict';

/**
 * @ngdoc directive
 * @name ngCkanApp.directive:govTypesMenu
 * @description
 * # govTypesMenu
 */
angular.module('ngCkanApp')
  .directive('govTypesMenu', function () {
    return {
      restrict: 'E',
      controller: 'GovtypesCtrl',
      templateUrl: 'views/gov-types-menu.html',
    };
  });
