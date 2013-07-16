"use strict";

angular.module("examplesApp")
    .service("sampleServiceWithCaching", function sampleService($http, $log, $q, $rootScope, sampleService) {
      var cache = { };

      return {
        putOpenkeyval: function (key, value) {
          cache[key] = value;

          return sampleService.putOpenkeyval(key, value);
        },

        getOpenkeyval: function (key) {
          if (cache[key]) {
            $log.log("Satisfied request out of cache:", cache[key]);

            var deferred = $q.defer();
            deferred.resolve(cache[key]);

            return deferred.promise;
          } else {
            var getPromise = sampleService.getOpenkeyval(key);

            getPromise.then(function (response) {
              cache[key] = response;
            });

            return getPromise;
          }
        }
      };
    });
