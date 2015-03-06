'use strict';

/**
 * @ngdoc function
 * @name ngCkanApp.controller:OrganizationsCtrl
 * @description
 * # OrganizationsCtrl
 * Controller of the ngCkanApp
 */
angular.module('ngCkanApp')
  .controller('OrganizationsCtrl', function ($scope, ckanService) {

    $scope.searchOrganizations = function(search_query) {
      ckanService.listOrganizations()
        .then(function(result) {
          $scope.organizations = result;
        });
    };

  });

