'use strict';

describe('Controller: ResourcesCtrl', function () {

  // load the controller's module
  beforeEach(module('ngCkanApp'));

  var ResourcesCtrl,
    ckanService,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($q, $controller, $rootScope) {
    scope = $rootScope.$new();
    ckanService = {
      showDataset: function(id) {
        var deferred = $q.defer();
        deferred.resolve({});
        return deferred.promise;
      }
    };
    ResourcesCtrl = $controller('ResourcesCtrl', {
      ckanService: ckanService,
      $scope: scope
    });
    spyOn(ckanService, 'showDataset').and.callThrough();
  }));

  it('should attach a list of resources to the scope', function () {
    scope.$root.$digest();
    expect(scope.dataset).toBeDefined();
  });
});
