export default function($scope, $http, $rootScope) {
	$scope.signup = function(user)
	{
		console.log(user);
		// TODO: verify passwords are the same and notify user
		if(user.password == user.password2) {
			$http.post('/signup', user)
			.success(function(user){
				$rootScope.currentUser = user;
				console.log(user);
			});				
		} else {
			console.log('Password not same');
		}
	};
}