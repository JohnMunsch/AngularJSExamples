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
      .when("/formsBootstrapStyled", {
        templateUrl: "views/formsBootstrapStyled.html",
        controller: "FormCtrl"
      })
      .otherwise({
        redirectTo: "/svg"
      });
  });
