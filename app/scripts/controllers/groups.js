'use strict';

/**
 * @ngdoc function
 * @name ngCkanApp.controller:GroupsCtrl
 * @description
 * # GroupsCtrl
 * Controller of the ngCkanApp
 */
angular.module('ngCkanApp')
  .controller('GroupsCtrl', function ($scope, ckanService) {

    $scope.searchGroups = function(search_query) {
      ckanService.listGroups()
        .then(function(result) {
          $scope.groups = result;
        });
    };

  });

