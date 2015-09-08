(function () {
  'use strict';

  App.controller('DiscussionCtrl', [
    '$scope',
    '$ionicPopover',
    'Discussion',
    function ($scope, $ionicPopover, Discussion) {

      var discussionPO;
      var commentPO;

      $ionicPopover.fromTemplateUrl('templates/discussions/discussion-popover.html', {
        scope: $scope
      })
      .then(function (popover) {
        discussionPO = popover;
      });

      $ionicPopover.fromTemplateUrl('templates/discussions/comment-popover.html', {
        scope: $scope
      })
      .then(function (popover) {
        commentPO = popover;
      });

      $scope.showDiscussionActions = function ($event) {
        discussionPO.show($event);
      };

      $scope.showCommentActions = function ($event) {
        commentPO.show($event);
      };

      Discussion.fetch().then(function (resp) {
        console.log(resp);
      });

    }

  ]);

}).call(window);