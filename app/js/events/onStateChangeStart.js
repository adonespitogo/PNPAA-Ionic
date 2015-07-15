// restrict to login if not authenticated

(function () {
  'use strict';

  App.run([
    '$rootScope',
    '$state',
    'Auth',
    function ($rootScope, $state, Auth) {
      $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams) {
        if (toState.name !== 'login' && !simpleStorage.get('token')) {
          event.preventDefault();
          $state.go('login');
        }
        // dont show login page when user is login
        if (toState.name === 'login' && simpleStorage.get('token')) {
          event.preventDefault();
          $state.go(fromState.name);
        }
      });
    }
  ]);

}).call(window);