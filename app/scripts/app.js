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
  function ($routeProvider) {


    $routeProvider.when('/main', {
      templateUrl: 'views/main.html',
      controller: 'MainCtrl'
    }).when('/student', {
      controller: 'StudentCtrl',
      templateUrl: 'views/student.html',
    }).when('/annonces', {
      controller: 'AnnonceCtrl',
      templateUrl: 'views/list_annonces.html',
    }).when('/login', {
      templateUrl: 'views/login.html',
      controller: 'LoginCtrl'
    }).when('/detailAnnonce/:id_annonce', {
      templateUrl: 'views/detail_annonce.html',
      controller: 'DetailAnnonceCtrl'
    }).when('/updateAnnonce/:idAnnonce', {
      controller: 'ModifyAnnonceCtrl',
      templateUrl: 'views/modify_annonce.html'
    }).when('/createAnnonce', {
      controller: 'AnnonceCtrl',
      templateUrl: 'views/create_annonce.html'
    }).when('/suggestionModel/:carnation_peau/:couleur_cheveux/:couleur_yeux/:longueur_cheveux/:taille_min/:taille_max', {
      controller: 'SuggestionModelCtrl',
      templateUrl: 'views/suggestion_modele.html'
    }).when('/detailModel/:id_model', {
      controller: 'DetailModelCtrl',
      templateUrl: 'views/detail_model.html'
    }).when('/apply/:id_annonce', {
      controller: 'ApplyCtrl',
      templateUrl: 'views/apply.html'
    }).
<<<<<<< HEAD
    when('/followAnnonces', {
      controller:'ReponseCtrl',
      templateUrl:'views/follow_annonces.html'
    }).
    when('/followProposals', {
      controller:'ReponseCtrl',
      templateUrl:'views/follow_proposals.html'
    }).
    otherwise({redirectTo:'/'});
=======
    otherwise({redirectTo: '/'});
>>>>>>> 6e16cf2197f351ffee61398ef4bcee47c5fa0b84

  }
]);
