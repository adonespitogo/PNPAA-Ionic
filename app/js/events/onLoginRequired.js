(function () {
  'use strict';

  App.run([
    '$rootScope',
    '$state',
    '$ionicPopup',
    'Auth',
    function ($rootScope, $state, $ionicPopup, Auth) {
      $rootScope.$on('event:auth-loginRequired', function () {

        var alertPopup = $ionicPopup.alert({
         title: 'Session has expired or invalid!',
         template: 'Please log in again.'
        });

        alertPopup.then(function() {
          Auth.logout();
          $state.go('login');
        });

      });
    }
  ]);

}).call(window);