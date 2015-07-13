(function () {
  'use strict';

  var host = "http://192.168.1.178:1337";

  function loginFailCB () {
    var form = $('#loginForm');
    form.show();
    form.on('submit', function (e) {
      e.preventDefault();
      var button = form.find('button');
      button.text('Logging in...');
      button.attr('disabled', true);

      var data = form.serialize();

      $.post(host+'/auth', data)
      .done(function (resp) {
        simpleStorage.set('token', resp.token);
        angular.bootstrap(document, ['PNPAA']);
      })
      .fail(function (resp) {
        console.log(JSON.stringify(resp));
        // var err = resp.responseJSON.err || resp.responseText;
        // $('#err p').text(err.toUpperCase());
        button.removeAttr('disabled');
        button.text('Login');
      });
    });
  }

  function loginSuccessCB (token) {
    window.token = token;
    angular.bootstrap(document, ['PNPAA']);
    $('#loginForm').remove();
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