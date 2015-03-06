'use strict';

/**
 * @ngdoc function
 * @name ngCkanApp.controller:DatasetsCtrl
 * @description
 * # DatasetsCtrl
 * Controller of the ngCkanApp
 */
angular.module('ngCkanApp')
  .controller('DatasetsCtrl', function ($scope, ckanService) {

    $scope.start = 0;
    $scope.search_query = '';
    $scope.filters = '';

    $scope.searchDatasets = function(search_query) {
      $scope.search_query = search_query;
      listDatasets();
    };

    $scope.$on('filterDatasets', function(event, govType) {
      $scope.filters = '+vocab_gov_types:'+govType;
      listDatasets();
    });

    function listDatasets(){
      ckanService.listDatasets($scope.search_query, $scope.filters, $scope.start)
        .then(function(result) {
          $scope.datasets = result.datasets;
          $scope.resultsCount = result.resultsCount;
        });
    }

  });
