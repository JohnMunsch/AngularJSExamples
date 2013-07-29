'use strict';

angular.module('examplesApp')
  .controller('RepeatCtrl', function ($scope) {
      // Generate a large number of records (full of fake data) and assign the records to a $scope variable for
      // visibility to the view.
      $scope.records = generateFakeData(4000);

      function generateFakeData(numRecords) {
        var fakeroo = [];

        // Use Chance.js (http://chancejs.com/#) to generate some basic fake data to use for testing.
        for (var i = 0; i < numRecords; i++) {
          var record = {
            "firstName": chance.first(),
            "lastName": chance.last(),
            "address": chance.address(),
            "city": chance.city(),
            "state": chance.state(),
            "zip": chance.zip()
          };

          fakeroo.push(record);
        }

        return fakeroo;
      }
  });
