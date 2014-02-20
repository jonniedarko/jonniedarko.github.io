'use strict';

angular.module('jonniedarkogithubioApp', [
  'ngRoute'
])
  .config(function ($routeProvider){//, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      });
      $routeProvider.when('/404',{
        templateUrl : 'views/404.html'
      });
      $routeProvider.otherwise({
        redirectTo: '/404'
      });

     // $locationProvider.html5Mode(true);
  });
