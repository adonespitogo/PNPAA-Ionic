(function () {
  'use strict';

  App.controller('EventCtrl', [
    '$scope', '$ionicPopover',
    function ($scope, $ionicPopover) {

      var eventPopover;

      $ionicPopover.fromTemplateUrl('templates/events/event-popover.html', {
        scope: $scope
      })
      .then(function (po) {
        eventPopover = po;
      });

      var commentPopover;

      $ionicPopover.fromTemplateUrl('templates/events/comment-popover.html', {
        scope: $scope
      })
      .then(function (po) {
        commentPopover = po;
      });

      $scope.showEventActions = function ($event) {
        eventPopover.show($event);
      };

      $scope.showCommentActions = function ($event) {
        commentPopover.show($event);
      };
    }

  ]);

}).call(window);