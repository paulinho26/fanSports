angular.module('starter.services')
.service("AuthService", function(q){
	
		 function(email, password){
			var deferred = $q.defer();
			var promise = deferred.promise;

			if(name == 'email' && password = 'secret'){
				deferred.resolve('Welcome' );
			}
			else{deferred.reject('Wrong name and password');
		}
			promise.succes = function(fn){
				promise.then(fn);
				return promise;
			}
			promise.error = function(fn){
				promise.then(fn);
				return promise;
			}
			return promise;
		}
	}
});