'use strict';

describe('Controller: RepeatCtrl', function () {

  // load the controller's module
  beforeEach(module('AngularJSExamplesApp'));

  var RepeatCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    RepeatCtrl = $controller('RepeatCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
