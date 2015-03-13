'use strict';

describe('Controller: DatasetsCtrl', function () {

  // load the controller's module
  beforeEach(module('ngCkanApp'));

  var DatasetsCtrl,
    ckanService,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($q, $controller, $rootScope) {
    scope = $rootScope.$new();
    ckanService = {
      listDatasets: function(query, filters, start) {
        var deferred = $q.defer();
        deferred.resolve({ 'datasets':{}, 'resultsCount':0 });
        return deferred.promise;
      }
    };
    DatasetsCtrl = $controller('DatasetsCtrl', {
      ckanService: ckanService,
      $scope: scope
    });
    spyOn(ckanService, 'listDatasets').and.callThrough();
  }));

  it('should attach a list of datasets to the scope', function () {
    scope.searchDatasets('');
    scope.$root.$digest();
    expect(scope.datasets).toBeDefined();
  });
});
