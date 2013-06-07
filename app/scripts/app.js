"use strict";

angular.module("examplesApp", [])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: "views/svg.html",
        controller: "SVGCtrl"
      })
      .otherwise({
        redirectTo: "/"
      });
  });
