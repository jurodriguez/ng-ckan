'use strict';

describe('Controller: OrganizationCtrl', function () {

  // load the controller's module
  beforeEach(module('ngCkanApp'));

  var OrganizationCtrl,
    ckanService,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($q, $controller, $rootScope) {
    scope = $rootScope.$new();
    ckanService = {
      showOrganization: function(id) {
        var deferred = $q.defer();
        deferred.resolve({});
        return deferred.promise;
      }
    };
    OrganizationCtrl = $controller('OrganizationCtrl', {
      ckanService: ckanService,
      $scope: scope
    });
    spyOn(ckanService, 'showOrganization').and.callThrough();
  }));

  it('should attach an organization to the scope', function () {
    scope.$root.$digest();
    expect(scope.organization).toBeDefined();
  });
});
