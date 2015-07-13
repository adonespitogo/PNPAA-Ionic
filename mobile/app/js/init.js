(function () {
  'use strict';

  var host = "http://192.168.1.178:1337";

  function loginFailCB () {
    simpleStorage.deleteKey('token');
    angular.bootstrap(document, ['PNPAA']);
  }

  function loginSuccessCB (token) {
    window.token = token;
    angular.bootstrap(document, ['PNPAA']);
  }

  function init () {

    var oldToken = simpleStorage.get('token');

    if (oldToken) {
      $.get(host+'/users?token='+oldToken)
      .success(function () {
        loginSuccessCB(oldToken);
      })
      .fail(loginFailCB);
    }
    else {
      loginFailCB();
    }

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