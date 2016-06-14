angular.module('app')
    /**
     * @ngdoc service
     * @name app.service:cdIdentitySvc
     * @description
     * <h3>Service:</h3>
     * <ul>
     * 		<li>Sets currentUser variable  which indicates to application whether or not a user is logged in.</li>
     * </ul>
     * <h3>Points of call:</h3>
     * <ul>
     * 		<li> {@link app.service:cdAuthSvc cdAuthSvc}
     * 			<ul>
     * 				<li>Upon successful user login, {@link app.service:cdAuthSvc cdAuthSvc}.authenticateUser() method will set currentUser equal to response data from {@link app.service:cdUserSvc cdUserSvc}.</li>
     * 				<li>Upon user logout, {@link app.service:cdAuthSvc cdAuthSvc}.logout() method will set currentUser to "undefined".</li>
     * 			</ul>
     * 		</li>
     * 		<li> {@link app.controller:cdNavBarLoginCtrl cdNavBarLoginCtrl}
     * 			<ul>
     * 				<li>cdNavBarLoginCtrl sets $scope.idenity = to currentUser</li>
     * 				<li>cdNavBarLoginCtrl's view, navbar-login.pug, calls $scope.idenity.isAuthenticated() method as a decision bool which dictates which navbar link and dropdowns are shown.</li>
     * 			</ul>
     * 		</li>
     * </ul>
     * <h3>Login Refresh/Redirect Persistance</h3>
     * <ul>
     * 		<li>The first refresh or page redirect after a successful login, Node will push the bootstrappedUserObject object in a script tag.</li>
     * 		<li>cdIdentitySvc will check for that script tag object, and if it exists, set currentUser equal to the values in that object.</li>
     * </ul>
     */
    .factory('cdIdentitySvc', function ($window, cdUserSvc) {
    	var currentUser;
    	if(!!$window.bootstrappedUserObject) {
    		currentUser = new cdUserSvc();
    		angular.extend(currentUser, $window.bootstrappedUserObject);
    	}
        return {
        	currentUser: currentUser,        	
        	/**
        	 * @ngdoc method
        	 * @name isAuthenticated
        	 * @methodOf app.service:cdIdentitySvc
        	 * @description
        	 * This method returns boolean if currentUser if set.
        	 *
        	 * @returns {Boolean=} true/false Boolean flag to indicate if currentUser exists
        	 * 
        	*/	        	
        	isAuthenticated: function() {
        		return !!this.currentUser;
        	},	
        	/**
        	 * @ngdoc method
        	 * @name isAuthenticated
        	 * @methodOf app.service:cdIdentitySvc
        	 * @description
        	 * This method returns a boolean true/false based on whether currentUser existis and if 'role' param is an index of role[].
        	 *
        	 * @param	{String} role Role which used for check
        	 * @returns {Boolean=} true/false Boolean flag to indicate if currentUser is set and has role
        	 * 
        	*/	
        	isAuthorized: function(role) {
        		return !!this.currentUser && this.currentUser.roles.indexOf(role) > -1;
        	}
        }
    });