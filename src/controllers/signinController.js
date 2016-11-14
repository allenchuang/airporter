export default function($location, $scope, $http, $rootScope) {
	$scope.signin = function(user)
	{
		console.log(user);
		$http.post('/signin', user)
		.success(function(response){
			console.log(response);
			$rootScope.currentUser = response;
			$location.url('/profile');
		});
	};
}
