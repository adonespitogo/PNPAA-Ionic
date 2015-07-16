(function () {
  'use strict';

  App.service('Auth', [
    '$http',
    'host',
    '$rootScope',
    '$state',
    '$timeout',
    function ($http, host, $rootScope, $state, $timeout) {

      var self = this;

      self.token = null;
      self.user = null;

      self.login = function (data) {
        var promise = $http.post(host+'/auth', data, {ignoreAuthModule: true});
        promise.then(function (resp) {
          simpleStorage.set('token', resp.data.token);
          self.token = resp.data.token;
          self.user = resp.data.user;
        });
        return promise;
      };

      self.logout = function () {
        simpleStorage.deleteKey('token');
        self.token = null;
        self.user = null;
      };

    }
  ]);

}).call(window);