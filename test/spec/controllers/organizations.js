'use strict';

describe('Controller: OrganizationsCtrl', function () {

  // load the controller's module
  beforeEach(module('ngCkanApp'));

  var OrganizationsCtrl,
    ckanService,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($q, $controller, $rootScope) {
    scope = $rootScope.$new();
    ckanService = {
      listOrganizations: function() {
        var deferred = $q.defer();
        deferred.resolve({});
        return deferred.promise;
      }
    };
    OrganizationsCtrl = $controller('OrganizationsCtrl', {
      ckanService: ckanService,
      $scope: scope
    });
    spyOn(ckanService, 'listOrganizations').and.callThrough();
  }));

  it('should attach a list of organizations to the scope', function () {
    scope.searchOrganizations('');
    scope.$root.$digest();
    expect(scope.organizations).toBeDefined();
  });
});
