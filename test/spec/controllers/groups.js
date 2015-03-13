'use strict';

describe('Controller: GroupsCtrl', function () {

  // load the controller's module
  beforeEach(module('ngCkanApp'));

  var GroupsCtrl,
    ckanService,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($q, $controller, $rootScope) {
    scope = $rootScope.$new();
    ckanService = {
      listGroups: function() {
        var deferred = $q.defer();
        deferred.resolve({});
        return deferred.promise;
      }
    };
    GroupsCtrl = $controller('GroupsCtrl', {
      ckanService: ckanService,
      $scope: scope
    });
    spyOn(ckanService, 'listGroups').and.callThrough();
  }));

  it('should attach a list of groups to the scope', function () {
    scope.searchGroups();
    scope.$root.$digest();
    expect(scope.groups).toBeDefined();
  });
});
