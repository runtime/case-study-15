'use strict';

/**
 * @ngdoc service
 * @name caseStudiesApp.case
 * @description
 * # case
 * Factory in the caseStudiesApp.
 */
angular.module('caseStudiesApp')
  .factory('case', function () {
    // Service logic
    // ...

    var meaningOfLife = 42;

    // Public API here
    return {
      someMethod: function () {
        return meaningOfLife;
      }
    };
  });



//angular.module('football2AngfireApp')
//    .factory('case', function ( $q, $firebase, FIREBASE_URL) {
//
//        //var meaningOfLife = 42;
//
//        var __data;
//        var __teams = [];
//        var __games = [];
//
//        return {
//            getData: function() {
//                return $firebase(new Firebase('https://footballtest.firebaseio.com'));
//            }
//
//        }
//
//    });
