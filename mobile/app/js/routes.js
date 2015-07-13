(function () {
  'use strict';

  window.App

  .config([
    '$stateProvider',
    '$urlRouterProvider',
    function ($stateProvider, $urlRouterProvider) {

      $stateProvider

      .state('login', {
        url: '/login',
        templateUrl: 'templates/login.html',
        controller: 'LoginCtrl'
      })

      .state('app', {
        url: "/app",
        abstract: true,
        templateUrl: "templates/menu.html",
        controller: 'AppCtrl'
      })

      .state('app.events', {
        url: "/events",
        views: {
          'menuContent': {
            templateUrl: "templates/events/list.html"
          }
        }
      })

      .state('app.event', {
        url: "/event",
        views: {
          'menuContent': {
            templateUrl: "templates/events/event.html"
          }
        }
      })

      .state('app.discussions', {
        url: "/discussions",
        views: {
          'menuContent': {
            templateUrl: "templates/discussions/list.html"
          }
        }
      })

      .state('app.discussion', {
        url: "/discussion",
        views: {
          'menuContent': {
            templateUrl: "templates/discussions/discussion.html",
            controller: "DiscussionCtrl"
          }
        }
      })
    ;
    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/app/discussions');
  }])

  ;

}).call(window);