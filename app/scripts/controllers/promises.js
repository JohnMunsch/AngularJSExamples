angular.module("examplesApp")
    .controller("PromisesCtrl", function ($scope, $http, $log) {
      var putURL = "http://api.openkeyval.org/";
      var getURL = "http://api.openkeyval.org/";

      var sampleKey = "rumplestilskinTestKey";
      var sampleValue = {
        "string": "sample string",
        "date": Date.now(),
        "number": 8675309.9,
        "boolean": true
      };

      // For the first promises example, it's a straightforward call to put a value into the OpenKeyval
      // (http://openkeyval.org/).
      $http.post(putURL + sampleKey, sampleValue).then(function () {}, function () {});

      // And another to retrieve the same value. Note that we can assign the promise which comes back from $http.get()
      // directly to a variable in the $scope and AngularJS will both notice when the service call completes and
      // dereference the promise to its resolved value automatically.
      //
      // Notice that we're getting a single promise back but we're hooking up multiple different things to it (via a
      // call to .then() and assigning it to a $scope value. Try that with a regular callback...
      var firstPromise = $http.get(getURL + sampleKey);

      firstPromise.then(function (response) {
        $log.log("Success", response);
      }, function (response) {
        $log.log("Error", response);
      });
      $scope.firstResult = firstPromise;

      // For the second example we make multiple calls to different services aggregating the results of all the calls
      // and merging the results into a single returned value.

      // For the third example we demonstrate a common pattern for services. We have a local cache which we can use to
      // satisfy some requests and promises can allow us to update the service to perform the local caching without
      // any external difference to the service.
    });