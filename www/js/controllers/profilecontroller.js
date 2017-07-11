angular.module('starter.controllers',['Firebase'])
.controller('ProfileCtrl', function($scope,Firebase,Auth){

	
	Auth.$onAuthStateChanged(function(authData){
		if(!authData){
			console.log("Logged out");
			$scope.loggedInUser = null;
			$locale.path('home');
		}

		$scope.data = 


	})
	$scope.logout = function(){
		Auth.$signOut();
	}

	
})