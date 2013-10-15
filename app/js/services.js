'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('myApp.services', []).
  value('version', '0.1')

  .service("Friends", ['$http', function($http){

  		this.get = function(){
  			
  			var request = $http.get('/data/friends.json');

  			return request;

  		}

  }]);
