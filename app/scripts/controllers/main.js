'use strict';

/**
 * @ngdoc function
 * @name caseStudiesApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the caseStudiesApp
 */
angular.module('caseStudiesApp')
  .controller('MainCtrl', ['$scope', '$rootScope', '$location',
        function ($scope, $rootScope,  $location) {


    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  }]);






//angular.module('caseStudiesApp')
//    .controller('MainCtrl', ['$scope', '$rootScope', 'syncData', 'firebaseRef', '$firebaseSimpleLogin', '$location',
//        function ($scope, $rootScope, syncData, firebaseRef, $firebaseSimpleLogin, $location) {
//
//
//            $scope.awesomeThings = [
//                'HTML5 Boilerplate',
//                'AngularJS',
//                'Karma'
//            ];
//        }]);



//angular.module('nycdaAngularJsFinalProjApp')
//    .controller('MainCtrl', ['$scope', '$rootScope', 'syncData', 'firebaseRef', '$firebaseSimpleLogin', '$location',
//        function ($scope, $rootScope, syncData, firebaseRef, $firebaseSimpleLogin, $location) {
//
//            $scope.theCaseStudies = syncData('/casestudies').$asObject();
//
//            // assume we are loading asyncronous so we need to wait for it to be loaded
//            // before we try to do something
//            $scope.theCaseStudies.$loaded().then(function (caseStudies) {
//                //console.log(caseStudies.securitylevels);
//                //Do whatever you need to here
//                $scope.securitylevels = caseStudies.securitylevels;
//
//            });
//
//
//            $scope.securitylevel = 0;
//            $rootScope.loggedIn = false;

