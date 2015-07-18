(function () {
  'use strict';

  window.host = "http://localhost:8080";

  function bootstrap() {
    angular.bootstrap(document, ['PNPAA']);
    setTimeout(function () {
      $('body').removeClass('init');
      var view = $('#app');
      var loading = $('#app-loading');
      loading.addClass('fade');
      view.removeClass('ng-hide');
      setTimeout(function () {
        loading.remove();
        view.addClass('show');
      }, 1500);
    }, 3000);
  }

  function loginFailCB () {
    simpleStorage.deleteKey('token');
    window.history.pushState({}, 'login', '#/login');
    bootstrap();
  }

  function loginSuccessCB (token) {
    window.token = token;
    bootstrap();
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