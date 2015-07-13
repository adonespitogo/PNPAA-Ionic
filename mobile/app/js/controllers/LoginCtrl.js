(function () {
  'use strict';

  App.controller('LoginCtrl', [
    '$scope',
    'Auth',
    '$state',
    '$ionicPopup',
    function ($scope, Auth, $state, $ionicPopup) {

      $scope.loginData = {};

      $scope.login = function () {
        Auth.login($scope.loginData)
        .success(function () {
          $state.go('app.discussions');
        })
        .error(function (resp) {

          var err = resp.err || resp;
          err = err.charAt(0).toUpperCase() + err.slice(1) + '.'; // capitalize 1st letter
          $ionicPopup.alert({
            title: 'Login Failed',
            template: err
          });

        });
      };

    }
  ]);

}).call(window);