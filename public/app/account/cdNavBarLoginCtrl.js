/**
 * @ngdoc controller
 * @name app.controller:cdNavBarLoginCtrl
 * @description
 * 
 * Controller which handles navbar login form function.
 */

angular.module('app').controller('cdNavBarLoginCtrl', function($scope, cdNotifierSvc, cdIdentitySvc, cdAuthSvc, $location, $route) {
	$scope.identity = cdIdentitySvc;
		
	/**
	 * @ngdoc method
	 * @name signIn
	 * @methodOf app.controller:cdNavBarLoginCtrl
	 * @description
	 * <h3>This method:</h3>
	 * <ol>
	 * 		<li>Call cdAuthSvc.authenticateUser() passing in username and password parameters.</li> 
	 * 		<li>Notifies user of success or failure via cdNotifierSvc (toaster notification).</li>
	 * </ol>
	 *
	 * @param {string} username: form text element; set in view via ng-model
	 * @param {string} password: form password element; set in view via ng-model
	 * 
	*/	
	$scope.signIn = function(username, password) {
		cdAuthSvc.authenticateUser(username, password).then(function(success) {
			if(success) {
				cdNotifierSvc.success('You have successfully signed in!');
			} else {
				cdNotifierSvc.error('Incorrect credentials.');				
			}
		})
	}
	
	
	/**
	 * @ngdoc method
	 * @name signOut
	 * @methodOf app.controller:cdNavBarLoginCtrl
	 * @description
	 * <h3>This method:</h3>
	 * <ol>
	 * 		<li>Call cdAuthSvc.logoutUser().
	 * 			<ol>
	 * 			<li>Set username and password scope variables to empty string so that form is empty for next login.</li>
	 * 			<li>Notify user of logout via cdNotifierSvc (toaster notification). </li>
	 * 			<li>Redirect location to document root.</li>
	 * 			<li>Reload the page to ensure bootstrappedUserObject script object is removed.</li>
	 * 			</ol>
	 * 		</li>
	 * </ol>
	 *
	 * @param {string} username: form text element; set in view via ng-model
	 * @param {string} password: form password element; set in view via ng-model
	 * 
	*/		
	$scope.signOut = function() {
		cdAuthSvc.logoutUser().then(function() {
			$scope.username = "";
			$scope.password = "";
			cdNotifierSvc.warning('You have been logged out.');
			$location.path('/');
			$route.reload();
		})
	}
});