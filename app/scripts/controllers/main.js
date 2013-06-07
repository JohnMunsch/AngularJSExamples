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

  });