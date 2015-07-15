(function () {
  'use strict';

  App.controller('LoginCtrl', [
    '$scope',
    'Auth',
    '$state',
    '$ionicPopup',
    '$ionicLoading',
    'homeState',
    function ($scope, Auth, $state, $ionicPopup, $ionicLoading, homeState) {

      $scope.loginData = {};

      $scope.login = function () {

        $ionicLoading.show({
          template: 'Logging in...'
        });

        simpleStorage.set('token', 'fasodf9');
        $state.go(homeState);
        return $ionicLoading.hide();

        // Auth.login($scope.loginData)
        // .success(function () {
        //   $state.go(homeState);
        //   $ionicLoading.hide();
        // })
        // .error(function (resp) {

          // resp = resp || 'Unable to login.';

          // $ionicLoading.hide();

          // var err = resp.err || resp;
          // err = err.charAt(0).toUpperCase() + err.slice(1) + '.'; // capitalize 1st letter
          // $ionicPopup.alert({
          //   title: 'Login Failed',
          //   template: err
          // });

        // });

      };

    }
  ]);

}).call(window);