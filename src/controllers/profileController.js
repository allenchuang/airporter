export default function($scope, $http) {
	$http.get("/rest/user")
	.success(function(users){
		$scope.users = users;
	});
}
