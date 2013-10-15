'use strict';

/* Controllers */

angular.module('myApp.controllers', []).
  controller('MyCtrl1', [function() {

  }])
  .controller('MyCtrl2', [function() {

  }])

  .controller('MyCtrl3', ['$scope', 'Friends', function($scope, Friends) {
  		var friends = Friends.get();

  		friends.success(function(data){
  			$scope.friends = data;
  		});
  }]);