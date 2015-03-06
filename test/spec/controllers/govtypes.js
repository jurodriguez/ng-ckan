'use strict';

describe('Controller: GovtypesCtrl', function () {

  // load the controller's module
  beforeEach(module('ngCkanApp'));

  var GovtypesCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    GovtypesCtrl = $controller('GovtypesCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of goverment types to the scope', function () {
    expect(scope.govTypes.length).toBe(3);
  });
});
