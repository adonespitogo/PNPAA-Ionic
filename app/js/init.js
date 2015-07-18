(function () {
  'use strict';

  window.host = "http://localhost:8080";

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

    var oldToken = simpleStorage.get('token');

    if (oldToken) {
      $.ajax({
        method:"POST",
        beforeSend: function (request)
        {
          request.setRequestHeader("Authorization", "Bearer " + oldToken);
        },
        url: host + "/auth/verify",
        processData: false,
        success: function(msg) {
          loginSuccessCB(oldToken);
        },
        error: function () {
          loginFailCB();
        }
      });
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