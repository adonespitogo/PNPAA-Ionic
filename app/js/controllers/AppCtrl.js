(function () {

  'use strict';

  App.controller('AppCtrl', [
    '$scope', 'Auth', '$ionicLoading', '$timeout',
    function($scope, Auth, $ionicLoading, $timeout) {

    $scope.logout = function () {

      $ionicLoading.show({
       template: 'Logging out...'
      });

      $timeout(function () {
        Auth.logout();
        $state.go('login');
        $ionicLoading.hide();
      }, 1000);
    };

  }]);

}).call(window);