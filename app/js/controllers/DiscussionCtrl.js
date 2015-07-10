(function () {
  'use strict';

  App.controller('DiscussionCtrl', [
    '$scope',
    '$ionicActionSheet',
    '$ionicPopup',
    function ($scope, $ionicActionSheet, $ionicPopup) {

      $scope.showActions = function () {
       var hideSheet = $ionicActionSheet.show({
        buttons: [
         { text: 'Edit' },
        ],
        destructiveText: 'Delete',
        destructiveButtonClicked: function () {
          $scope.confirmDelete();
          return true;
        }

       });
      };

      $scope.confirmDelete = function () {
       var confirmPopup = $ionicPopup.confirm({
         title: 'Delete post',
         template: 'Are you sure you want to delete this post?'
       });
       confirmPopup.then(function(res) {
         if(res) {
           console.log('You are sure');
         } else {
           console.log('You are not sure');
         }
       });
      };

    }
  ]);

}).call(window);