(function () {
  'use strict';

  App.controller('CreateEventCtrl', [
    '$scope',
    '$filter',
    'Discussion',
    function ($scope, $filter, Discussion) {

      $scope.event = {};

      this.createEvent = function (data) {
        var createPromise = Discussion.create(data);
        createPromise.then(function (resp) {
          console.log(resp);
        });
      };

    }
  ]);

}).call(window);