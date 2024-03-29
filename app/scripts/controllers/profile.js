'use strict';

/**
 * @ngdoc function
 * @name modelFinderApp.controller:ProfileCtrl
 * @description});
 * # ProfileCtrl
 * Controller of the modelFinderApp
 */

modelFinderApp.controller('ProfileCtrl', function ($scope, $cookies) {

  $scope.isUserAuthenticated = ($cookies.getObject('authenticatedUser') != null);

  if ($scope.isUserAuthenticated) {
    $scope.userToShow = $cookies.getObject('authenticatedUser');
  }
});
