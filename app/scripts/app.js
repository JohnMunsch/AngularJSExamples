angular.module('examplesApp', [ 'ngRoute' ]).config(function ($routeProvider) {
    'use strict';

    $routeProvider
      .when('/svg', {
        templateUrl: 'views/svg.html',
        controller: 'SVGCtrl'
      })
      .when('/forms', {
        templateUrl: 'views/forms.html',
        controller: 'FormCtrl'
      })
      .when('/formsStyled', {
        templateUrl: 'views/formsStyled.html',
        controller: 'FormCtrl'
      })
      .when('/promises', {
        templateUrl: 'views/promises.html',
        controller: 'PromisesCtrl'
      })
      .when('/allCheckbox', {
        templateUrl: 'views/allCheckbox.html',
        controller: 'AllCheckboxCtrl'
      })
      .otherwise({
        redirectTo: '/svg'
      });
  });
