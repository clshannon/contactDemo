angular.module('app')
    /**
     * @ngdoc service
     * @name app.service:cdAuthSvc
     * @description
     * Service providing methods to authenticate, create, and log out user. Also used to authorize route access per role.
     */
    .factory('cdAuthSvc', function ($http, cdIdentitySvc, $q, cdUserSvc) {
        return {        	
        	/**
        	 * @ngdoc method
        	 * @name authenticateUser
        	 * @methodOf app.service:cdAuthSvc
        	 * @description
        	 * <ol>
        	 * 		<li>Creates promise via $q.defer()</li>
        	 * 		<li>Uses $http to post to /login route, passing in username and password variables</li>
        	 * 		<li>If response success:<br />
        	 * 			<ul>
        	 * 				<li>Create user object from {@link app.service:cdUserSvc cdUserSvc} model</li>
        	 * 				<li>Extend $http response data to the new user object</li>
        	 * 				<li>Set {@link app.service:cdIdentitySvc cdIdentitySvc}.currentUser equal to new user object </li>
        	 * 				<li>Resolve promise as true</li>
        	 * 			</ul>
        	 * 		</li>
        	 * 		<li>If response failure<br />
        	 * 			<ul>
        	 * 				<li>Resolve promise as false</li>
        	 * 			</ul>
        	 * 		</li>
        	 * 		<li>Return Promise</li>
        	 * </ol>
        	 * 			
        	 *
        	 * @param {String} username: passed from call
        	 * @param {String} password: passed from call
        	 * @returns {Promise} Returns a promise
        	 */        	
        	authenticateUser: function(username, password) {
        		var dfd = $q.defer();
        		$http.post('/login', {username:username, password:password}).then(function(response) {
        			if(response.data.success) {
        				var user = new cdUserSvc();
        				angular.extend(user, response.data.user);
        				cdIdentitySvc.currentUser = user;
        				dfd.resolve(true);
        			} else {
        				dfd.resolve(false);
        			}
        		});
        		return dfd.promise;
        	},
        	
        	/**
        	 * @ngdoc method
        	 * @name createUser
        	 * @methodOf app.service:cdAuthSvc
        	 * @description
        	 * <ol>
        	 * 		<li>Create newUser object from cdUserSvc model</li>
        	 * 		<li>Creates promise via $q.defer()</li>
        	 * 		<li>Call newUser.$save method.</li>
        	 * 			<ul>
        	 * 				<li>If response success:<br />
        	 * 					<ul>
        	 * 						<li>Resolve promise as true</li>
        	 * 					</ul>
        	 * 				</li>
        	 * 				<li>If response failure<br />
        	 * 					<ul>
        	 * 						<li>Reject promise and include response failure reason</li>
        	 * 					</ul>
        	 * 				</li>
        	 * 		</li>
        	 * 		<li>Return Promise</li>
        	 * </ol>
        	 * 			
        	 *
        	 * @param {Array} newUserData: passed from call
        	 * @returns {Promise} Returns a promise
        	 */         	
        	createUser: function(newUserData) {
        		var newUser = new cdUserSvc(newUserData);
        		var dfd = $q.defer();
        		
        		newUser.$save().then(function() {
        			dfd.resolve();
        		}, function (response) {
        			dfd.reject(response.data.reason);
        		});
        		return dfd.promise;
        	},
        	
        	/**
        	 * @ngdoc method
        	 * @name logoutUser
        	 * @methodOf app.service:cdAuthSvc
        	 * @description
        	 * <ol>
        	 * 		<li>Creates promise via $q.defer()</li>
        	 * 		<li>Uses $http to post to /logout route, passing object setting logout: true.
        	 * 			<ul>
        	 * 				<li>If response success:<br />
        	 * 					<ul>
        	 * 						<li>Resolve promise</li>
        	 * 					</ul>
        	 * 				</li>
        	 * 			</ul>
        	 * 		</li>
        	 * 		<li>Return Promise</li>
        	 * </ol>
        	 * 			
        	 *
        	 * @returns {Promise} Returns a promise
        	 */        	
            logoutUser: function() {
            	var dfd = $q.defer();
            	$http.post('/logout', {logout:true}).then(function() {
            		cdIdentitySvc.currentUser = undefined;
            		dfd.resolve();
            	});
            	return dfd.promise;
            },
        	
        	/**
        	 * @ngdoc method
        	 * @name authorizeCurrentUserForRoute
        	 * @methodOf app.service:cdAuthSvc
        	 * @description
        	 * <ol>
        	 * 		<li>Call cdIdentitySvc.isAuthorized passing in role variable
        	 * 			<ul>
        	 * 				<li>If response success:<br />
        	 * 					<ul>
        	 * 						<li>Return True</li>
        	 * 					</ul>
        	 * 				</li>
        	 * 				<li>If response failure:<br />
        	 * 					<ul>
        	 * 						<li>Reject promise with a message of 'not authorized'.</li>
        	 * 					</ul>
        	 * 				</li>
        	 * 			</ul>
        	 * 		</li>
        	 * 		<li>Return Promise</li>
        	 * </ol>
        	 * 			
        	 *
        	 * @param {String} role passed from call
        	 * @returns {Promise} Returns a promise
        	 */  
            authorizeCurrentUserForRoute: function(role) {
    			if(cdIdentitySvc.isAuthorized(role)) {
    				return true;
    			} else {
    				return $q.reject('not authorized');
    			}
            }
        }
    });