describe('Controller: RepeatCtrl', function () {
  'use strict';

  // load the controller's module
  beforeEach(module('examplesApp'));

  var RepeatCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    RepeatCtrl = $controller('RepeatCtrl', {
      $scope: scope
    });
  }));
});
