'use strict';

/**
 * @ngdoc overview
 * @name modelFinderApp
 * @description
 * # modelFinderApp
 *
 * Main module of the application.
 */

var modelFinderApp = angular.module('modelFinderApp', ['ngRoute']);

modelFinderApp.config(['$routeProvider',
  function($routeProvider) {

   
    $routeProvider.
    when('/main', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      }).
    when('/student', {
        controller:'StudentCtrl', 
        templateUrl:'views/student.html', 
    }).
    when('/annonce', {
        controller:'AnnonceCtrl', 
        templateUrl:'views/annonce.html', 
    }).
    otherwise({redirectTo:'/'});  
  }
]);
