/**
 * @ngdoc controller
 * @name app.controller:cdSignupCtrl
 * @description
 * 
 * Controller which displays signup page/form. Handles creation of new user success and failures. 
 * 
 * <h3>Scope Variables Created</h3>
 * 		<ul>
 * 			<li>object: <i>$scope.newUser</i></li>
 * 				<ul>
 * 					<li>$scope.newUser.email</li>
 * 					<li>$scope.newUser.password</li>
 * 					<li>$scope.newUser.firstName</li>
 * 					<li>$scope.newUser.lastName</li>
 * 				</ul>
 * 			<li>funtion: <i>$scope.signup</i></li>
 * 		</ul>
 */

angular.module('app').controller('cdSignupCtrl', function($scope, cdUserSvc, cdNotifierSvc, $location, cdAuthSvc) {

	$scope.newUser = {};

	
	/**
	 * @ngdoc method
	 * @name signup
	 * @methodOf app.controller:cdSignupCtrl
	 * @description
	 * This method:
	 * <ol>
	 * 		<li>Create newUserData variable
	 * 			<ul>
	 * 				<li>Set newUserData params equal to $scope ng-model variables set on form inputs</li>
	 * 			</ul>
	 * 		</li>
	 * 		<li>Call cdAuthSvc.createUser() passing in newUserData object.
	 * 			<ul>
	 * 				<li>If success:
	 * 					<ol>
	 * 						<li>Notify user they were created successfully via cdNotifierSvc (toastr notification).</li>
	 * 						<li>Change location to document root.</li>
	 * 					</ol>
	 * 				</li>
	 * 				<li>If faulire:
	 * 					<ol>
	 * 						<li>For each reason in reqponse, create notivication via cdNotifierSvc (toastr notification).</li>
	 * 					</ol>
	 * 				</li>
	 * 			</ul>
	 * 		</li>
	 * </ol>
	 *
	*/	
	$scope.signup = function() {
		var newUserData = {
			username: $scope.newUser.email,
			password: $scope.newUser.password,
			firstName: $scope.newUser.firstName,
			lastName: $scope.newUser.lastName
		};
		cdAuthSvc.createUser(newUserData).then(function () {
			cdNotifierSvc.success('New user created successfully.');
			$location.path('/');
		}, function (reason) {
				angular.forEach(reason, function(value, key){
				    if(typeof value.field !== "undefined") {
				    	cdNotifierSvc.error(value.message);
				    }					
				});
		})
	}
});