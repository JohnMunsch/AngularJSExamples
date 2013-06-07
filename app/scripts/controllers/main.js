"use strict";

angular.module("examplesApp")
  .controller("SVGCtrl", function ($scope) {
    $scope.temp = 99;

    $scope.current_slide = 0;
    $scope.slides = [ "images/cool_car.jpg", "images/cool_car_interior.jpg" ]
    $scope.slide_image = $scope.slides[$scope.current_slide];

    $scope.switchImage = function () {
      if ($scope.current_slide) {
        $scope.current_slide = 0;
      } else {
        $scope.current_slide = 1;
      }

      $scope.slide_image = $scope.slides[$scope.current_slide];
    }
  });

angular.module("examplesApp")
  .controller("FormCtrl", function ($scope) {
      $scope.checkbox = true;
      $scope.radioGroup1 = 1;
      $scope.text = "sample text";
      $scope.textarea = "sample text for textarea";
      $scope.select = 1;
      $scope.selectOptions = [
        { name: "first", value: 1 },
        { name: "second", value: 2 }
      ];
    });