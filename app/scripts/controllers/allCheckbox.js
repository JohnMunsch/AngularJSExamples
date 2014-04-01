angular.module('examplesApp').controller('AllCheckboxCtrl',
  function ($scope) {
    'use strict';

    $scope.needs = [
      {text: 'Meet physiological needs', done: true},
      {text: 'Get safety', done: false},
      {text: 'Get love', done: false},
      {text: 'Get esteem', done: false},
      {text: 'Achieve self-actualization', done: false}
    ];

    $scope.allNeedsClicked = function () {
      var newValue = !$scope.allNeedsMet();

      for (var i = 0; i < $scope.needs.length; i++) {
        $scope.needs[i].done = newValue;
      }
    };

    // Returns true if and only if all needs are done.
    $scope.allNeedsMet = function () {
      var needsMet = 0;

      for (var i = 0; i < $scope.needs.length; i++) {
        if ($scope.needs[i].done) {
          needsMet += 1;
        }
      }

      return (needsMet === $scope.needs.length);
    };
  }
);
