'use strict';

angular.module('jonniedarkogithubioApp')
    .controller('NavbarCtrl', function($scope, $location) {
        $scope.menu = [{
            'title': 'Home',
            'link': '/'
        }];

        $scope.isActive = function(route) {
            return route === $location.path();
        };
         $scope.getLocation=function(){
      	return window.location.hostname;//'jonnie.io';
      }
    });