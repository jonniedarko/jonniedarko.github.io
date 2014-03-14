'use strict';

angular.module('jonniedarkogithubioApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute'
])
    .config(function($routeProvider, $locationProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'partials/main.html',
                controller: 'MainCtrl'
            })
            .when('/kcal', {
              templateUrl: 'partials/Kcal.html',
              controller: 'KCalCtrl'
            })
            .when('/cv', {
              templateUrl: 'partials/cv.html',
              controller: 'CvCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });

        //$locationProvider.html5Mode(true);
    });