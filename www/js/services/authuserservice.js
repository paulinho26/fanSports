angular.module('starter.services')
.services('AuthUserService',function(LocalDataService){
	//Stores user object
	var user = null;
	function unsetUser(){
		user = null;
		
	}

});