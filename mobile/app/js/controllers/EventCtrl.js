(function () {
  'use strict';

  App.controller('EventCtrl', [
    '$scope', '$ionicPopover',
    function ($scope, $ionicPopover) {

      var popover;

      $ionicPopover.fromTemplateUrl('templates/events/event-popover.html', {
        scope: $scope
      })
      .then(function (po) {
        popover = po;
      });

      $scope.showActions = function ($event) {
        popover.show($event);
      };
    }

  ]);

}).call(window);