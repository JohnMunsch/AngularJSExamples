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
      // form1
      $scope.checkbox = true;
      $scope.radioGroup1 = 1;
      $scope.text = "sample text";
      $scope.textarea = "sample text for textarea";
      $scope.select = 1;
      $scope.selectOptions = [
        { name: "first", value: 1 },
        { name: "second", value: 2 }
      ];

      // form2 - In this example, we use intermediate values in the form so we can only commit our changes when we
      // choose to.
      $scope.obj = {
        "checkbox": true,
        "radioGroup1": 1,
        "text": "sample text",
        "textarea": "sample text for textarea",
        "select": 1,
        "selectOptions": [
          { name: "first", value: 1 },
          { name: "second", value: 2 }
        ]
      };
      $scope.form2 = { };

      // You could copy all the model variables to intermediate values the form would use one at a time, but if the
      // data is in an object we can do the same thing in one line. Let's use angular.copy to do it for us.
      angular.copy($scope.obj, $scope.form2);

      $scope.form2Reset = function () {
        angular.copy($scope.obj, $scope.form2);
      };

      $scope.form2OK = function () {
        angular.copy($scope.form2, $scope.obj);
      };

      // form3
      $scope.userInfo = {
        "firstName": "",
        "lastName": "",
        "addressLine1": "",
        "addressLine2": "",
        "city": "",
        "state": "",
        "zip": "",
        "preferredLanguage": "",
        "rails": false,
        "stateList": [
          { name: 'ALABAMA', abbreviation: 'AL'},
          { name: 'ALASKA', abbreviation: 'AK'},
          { name: 'AMERICAN SAMOA', abbreviation: 'AS'},
          { name: 'ARIZONA', abbreviation: 'AZ'},
          { name: 'ARKANSAS', abbreviation: 'AR'},
          { name: 'CALIFORNIA', abbreviation: 'CA'},
          { name: 'COLORADO', abbreviation: 'CO'},
          { name: 'CONNECTICUT', abbreviation: 'CT'},
          { name: 'DELAWARE', abbreviation: 'DE'},
          { name: 'DISTRICT OF COLUMBIA', abbreviation: 'DC'},
          { name: 'FEDERATED STATES OF MICRONESIA', abbreviation: 'FM'},
          { name: 'FLORIDA', abbreviation: 'FL'},
          { name: 'GEORGIA', abbreviation: 'GA'},
          { name: 'GUAM', abbreviation: 'GU'},
          { name: 'HAWAII', abbreviation: 'HI'},
          { name: 'IDAHO', abbreviation: 'ID'},
          { name: 'ILLINOIS', abbreviation: 'IL'},
          { name: 'INDIANA', abbreviation: 'IN'},
          { name: 'IOWA', abbreviation: 'IA'},
          { name: 'KANSAS', abbreviation: 'KS'},
          { name: 'KENTUCKY', abbreviation: 'KY'},
          { name: 'LOUISIANA', abbreviation: 'LA'},
          { name: 'MAINE', abbreviation: 'ME'},
          { name: 'MARSHALL ISLANDS', abbreviation: 'MH'},
          { name: 'MARYLAND', abbreviation: 'MD'},
          { name: 'MASSACHUSETTS', abbreviation: 'MA'},
          { name: 'MICHIGAN', abbreviation: 'MI'},
          { name: 'MINNESOTA', abbreviation: 'MN'},
          { name: 'MISSISSIPPI', abbreviation: 'MS'},
          { name: 'MISSOURI', abbreviation: 'MO'},
          { name: 'MONTANA', abbreviation: 'MT'},
          { name: 'NEBRASKA', abbreviation: 'NE'},
          { name: 'NEVADA', abbreviation: 'NV'},
          { name: 'NEW HAMPSHIRE', abbreviation: 'NH'},
          { name: 'NEW JERSEY', abbreviation: 'NJ'},
          { name: 'NEW MEXICO', abbreviation: 'NM'},
          { name: 'NEW YORK', abbreviation: 'NY'},
          { name: 'NORTH CAROLINA', abbreviation: 'NC'},
          { name: 'NORTH DAKOTA', abbreviation: 'ND'},
          { name: 'NORTHERN MARIANA ISLANDS', abbreviation: 'MP'},
          { name: 'OHIO', abbreviation: 'OH'},
          { name: 'OKLAHOMA', abbreviation: 'OK'},
          { name: 'OREGON', abbreviation: 'OR'},
          { name: 'PALAU', abbreviation: 'PW'},
          { name: 'PENNSYLVANIA', abbreviation: 'PA'},
          { name: 'PUERTO RICO', abbreviation: 'PR'},
          { name: 'RHODE ISLAND', abbreviation: 'RI'},
          { name: 'SOUTH CAROLINA', abbreviation: 'SC'},
          { name: 'SOUTH DAKOTA', abbreviation: 'SD'},
          { name: 'TENNESSEE', abbreviation: 'TN'},
          { name: 'TEXAS', abbreviation: 'TX'},
          { name: 'UTAH', abbreviation: 'UT'},
          { name: 'VERMONT', abbreviation: 'VT'},
          { name: 'VIRGIN ISLANDS', abbreviation: 'VI'},
          { name: 'VIRGINIA', abbreviation: 'VA'},
          { name: 'WASHINGTON', abbreviation: 'WA'},
          { name: 'WEST VIRGINIA', abbreviation: 'WV'},
          { name: 'WISCONSIN', abbreviation: 'WI'},
          { name: 'WYOMING', abbreviation: 'WY' }
        ]
      };
      $scope.form3 = { };

      angular.copy($scope.userInfo, $scope.form3);

      $scope.form3Reset = function () {
        angular.copy($scope.userInfo, $scope.form3);
      };

      $scope.form3OK = function () {
        angular.copy($scope.form3, $scope.userInfo);
      };
    });