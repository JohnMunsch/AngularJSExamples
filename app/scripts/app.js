"use strict";

angular.module("examplesApp", [])
  .config(function ($routeProvider) {
    $routeProvider
      .when("/svg", {
        templateUrl: "views/svg.html",
        controller: "SVGCtrl"
      })
      .when("/forms", {
        templateUrl: "views/forms.html",
        controller: "FormCtrl"
      })
      .otherwise({
        redirectTo: "/svg"
      });
  });
