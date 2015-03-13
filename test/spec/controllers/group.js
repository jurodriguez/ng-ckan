'use strict';

describe('Controller: GroupCtrl', function () {

  // load the controller's module
  beforeEach(module('ngCkanApp'));

  var GroupCtrl,
    ckanService,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($q, $controller, $rootScope) {
    scope = $rootScope.$new();
    ckanService = {
      showGroup: function(id) {
        var deferred = $q.defer();
        deferred.resolve({});
        return deferred.promise;
      }
    };
    GroupCtrl = $controller('GroupCtrl', {
      ckanService: ckanService,
      $scope: scope
    });
    spyOn(ckanService, 'showGroup').and.callThrough();
  }));

  it('should attach a group to the scope', function () {
    scope.$root.$digest();
    expect(scope.group).toBeDefined();
  });
});
