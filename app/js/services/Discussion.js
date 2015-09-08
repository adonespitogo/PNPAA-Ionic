(function () {
  'use strict';

  App.service('Discussion', [
    '$http',
    function Discussion ($http) {
      var self = this;

      self.fetch = function () {
        return $http.get('/discussions');
      };

      self.create = function (data) {
        return $http.post('/discussions', data);
      };

      return self;
    }
  ]);

}).call(window);