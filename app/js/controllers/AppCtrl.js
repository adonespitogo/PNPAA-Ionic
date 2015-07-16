(function () {

  'use strict';

  App.controller('AppCtrl', [
    '$scope', 'Auth', '$ionicLoading', '$timeout', '$state',
    function($scope, Auth, $ionicLoading, $timeout, $state) {

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