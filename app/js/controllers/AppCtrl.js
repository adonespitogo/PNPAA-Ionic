(function () {

App.controller('AppCtrl', [
  '$scope', 'Auth', '$ionicLoading', '$timeout',
  function($scope, Auth, $ionicLoading, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.logout = function () {

    $ionicLoading.show({
     template: 'Logging out...'
    });

    $timeout(function () {
      Auth.logout();
      $ionicLoading.hide();
    }, 1000);
  };

}]);


}).call(window);