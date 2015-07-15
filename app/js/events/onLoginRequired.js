(function () {
  'use strict';

  App.run([
    '$rootScope',
    '$state',
    '$ionicPopup',
    function ($rootScope, $state, $ionicPopup) {
      $rootScope.$on('event:auth-loginRequired', function () {

         var alertPopup = $ionicPopup.alert({
           title: 'Session has expired or invalid!',
           template: 'Please log in again.'
         });

         alertPopup.then(function(res) {
           $state.go('login');
         });

      });
    }
  ]);

}).call(window);