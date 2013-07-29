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
      .when("/formsStyled", {
        templateUrl: "views/formsStyled.html",
        controller: "FormCtrl"
      })
      .when("/promises", {
        templateUrl: "views/promises.html",
        controller: "PromisesCtrl"
      })
      .when("/repeat", {
        templateUrl: "views/repeat.html",
        controller: "RepeatCtrl"
      })
      .otherwise({
        redirectTo: "/svg"
      });
  });
