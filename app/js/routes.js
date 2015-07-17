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

      .state('app.home', {
        url: '/home',
        views: {
          'menuContent': {
            templateUrl: 'templates/home.html'
          }
        }
      })

      .state('app.account', {
        url: '/account',
        views: {
          'menuContent': {
            templateUrl: 'templates/account.html'
          }
        }
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
            templateUrl: "templates/events/event.html",
            controller: 'EventCtrl'
          }
        }
      })

      .state('app.createEvent', {
        url: "/event/new",
        views: {
          'menuContent': {
            templateUrl: "templates/events/create.html",
            controller: 'CreateEventCtrl'
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

      .state('app.departments', {
        url: "/departments",
        views: {
          'menuContent': {
            templateUrl: "templates/departments/list.html"
          }
        }
      })

      .state('app.department', {
        url: "/department",
        views: {
          'menuContent': {
            templateUrl: "templates/departments/department.html"
          }
        }
      })

      .state('app.batches', {
        url: "/batches",
        views: {
          'menuContent': {
            templateUrl: "templates/batches/list.html"
          }
        }
      })

      .state('app.batch', {
        url: "/batch",
        views: {
          'menuContent': {
            templateUrl: "templates/batches/batch.html"
          }
        }
      })
    ;
    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/app/home');
  }])

  ;

}).call(window);