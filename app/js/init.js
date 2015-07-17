(function () {
  'use strict';

  window.host = "http://localhost:1337";

  function loginFailCB () {
    simpleStorage.deleteKey('token');
    window.history.pushState({}, 'login', '#/login');
    angular.bootstrap(document, ['PNPAA']);
  }

  function loginSuccessCB (token) {
    window.token = token;
    angular.bootstrap(document, ['PNPAA']);
  }

  function init () {

    return loginFailCB();

    // var oldToken = simpleStorage.get('token');

    // if (oldToken) {
    //   $.get(host+'/users?token='+oldToken)
    //   .success(function () {
    //     loginSuccessCB(oldToken);
    //   })
    //   .fail(loginFailCB);
    // }
    // else {
    //   loginFailCB();
    // }

  }

  $(document).ready(function () {
    if (window.cordova) {
      document.addEventListener('deviceReady', function () {
        init();
      }, false);
    }
    else {
      init();
    }
  });

}).call(window);