'use strict';

angular.module('jonniedarkogithubioApp')
.controller('MainCtrl', function($scope, $location, $rootScope) {
    //$http.get('/api/awesomeThings').success(function(awesomeThings) {
      $scope.getLocation=function(){
      	return window.location.hostname;//'jonnie.io';
      }
   // });
});