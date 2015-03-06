'use strict';

/**
 * @ngdoc service
 * @name ngCkanApp.ckanService
 * @description
 * # ckanService
 * Service in the ngCkanApp.
 */
angular.module('ngCkanApp')
  .service('ckanService', function ($http) {
    // AngularJS will instantiate a singleton by calling "new" on this function
    var baseUrl = 'http://catalogo.datos.gob.mx/api/3/action/',
        datasets, dataset, organizations, organization, groups, group, resultsCount;

    function cacheDatasets(response) {
      resultsCount = response.data.result.count;
      datasets = response.data.result.results;
      return { 'datasets': datasets, 'resultsCount': resultsCount };
    }

    function cacheDataset(response) {
      dataset = response.data.result;
      return dataset;
    }

    function cacheOrganizations(response) {
      organizations = response.data.result;
      return organizations;
    }

    function cacheOrganization(response) {
      organization = response.data.result;
      return organization;
    }

    function cacheGroups(response) {
      groups = response.data.result;
      return groups;
    }

    function cacheGroup(response) {
      group = response.data.result;
      return group;
    }

    this.listDatasets = function(search_query, filters, start) {
      return $http.get(baseUrl + 'package_search?q='+ search_query + filters +'&rows=10&start=' + start).then(cacheDatasets);
    };

    this.showDataset = function(datasetId) {
      return $http.get(baseUrl + 'package_show?id=' + datasetId).then(cacheDataset);
    };

    this.listOrganizations = function() {
      return $http.get(baseUrl + 'organization_list?all_fields=true').then(cacheOrganizations);
    };

    this.showOrganization = function(organizationId) {
      return $http.get(baseUrl + 'organization_show?id=' + organizationId).then(cacheOrganization);
    };

    this.listGroups = function() {
      return $http.get(baseUrl + 'group_list?all_fields=true').then(cacheGroups);
    };

    this.showGroup = function(groupId) {
      return $http.get(baseUrl + 'group_show?id=' + groupId).then(cacheGroup);
    };

  });

