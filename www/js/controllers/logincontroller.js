angular.module('starter.controllers', ['firebase'])
	.controller('LoginCtrl', function($scope, $state, Firebase, Auth) {
		//		$scope.now = new Date();


		// filter('plainText', function() {
		// 	return function(text) {
		// 		return text ? String(text).replace(/<[^>]+>/gm, '') : '';
		// 	};
		// });
		// 
		//console.log(firebase);
		$scope.error = null;
		$scope.isIncorrectValue = function(val) {
			return angular.isUndefined(val) || val === null || val == "";
		}

		Auth.$onAuthStateChanged(function(authData) {
			if (authData) {
				//console.log("Sign in as:", authData.email);
				$scope.loggedInUser = authData;


			} else {
				//console.log("Signed out");
				$scope.loggedInUser = null;
			}
		})

		$scope.createUser = function(data) {
			Auth.$createUserWithEmailAndPassword(data.email, data.password)
				.then(function() {
					//user created successfully, then log them in
					return Auth.$signInWithEmailAndPassword(data.email, data.password)
				})
				.then(function(authData) {
					

					console.log("User created with data: ", authData);
				
				}).catch(function(error) {
					console.log("Error has occured: ", error);
				})
		};

		$scope.loginUser = function(data) {
			if ($scope.isIncorrectValue(data.email) || $scope.isIncorrectValue(data.password)) {
				$scope.error = "Enter email and passwords";
			} else {
				Auth.$signInWithEmailAndPassword(data.email, data.password).then(function(authData) {
					$scope.loggedInUser = authData;
					$state.go('profile');
				}).catch(function(error) {
					$scope.error = "" + error;
				});

			}

		};
		$scope.logout = function() {
			Auth.$signOut();
		}

		$scope.signup = function() {
			$state.go('register');
		};
		$scope.forgotpassword = function() {
			$state.go('forgotpassword');
		};

	});

// $scope.data = { email: "", password: ""};


// document.addEventListener('deviceready', function() {
// 	checkLogin();
// });

// $scope.$on('$ionicView.enter', function(e) {
// 	$scope.data.email = '';
// 	$scope.data.password = '';
// });

// function checkLogin() {

// };

// $scope.login = function() {

// 	if (!angular.isDefined($scope.data.email) ||
// 		!angular.isDefined($scope.data.pass) || 
// 		$scope.data.email.trim() == '' || 
// 		$scope.data.password.trim() == '') {
// 		$ionicPopup.alert({
// 			title: 'Email and password are required'
// 		});
// 		return;
// 	}
// };