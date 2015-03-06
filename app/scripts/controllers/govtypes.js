'use strict';

/**
 * @ngdoc function
 * @name ngCkanApp.controller:GovtypesCtrl
 * @description
 * # GovtypesCtrl
 * Controller of the ngCkanApp
 */
angular.module('ngCkanApp')
  .controller('GovtypesCtrl', function ($scope) {
    $scope.selected = '';
    $scope.govTypes = [
      'Federal',
      'Estatal',
      'Municipal'
    ];

    $scope.filterByType = function(type) {
      $scope.selected = type;
      $scope.$emit('filterDatasets', type);
    }

  });
