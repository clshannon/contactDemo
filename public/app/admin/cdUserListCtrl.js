angular.module('app')
    /**
     * @ngdoc controller
     * @name app.controller:cdUserListCtrl
     * @description
     * 
     * <p>Controller which controls the display of the User List view.</p>
     * 
     * <p>Sets$scope.users variable equal to {@link app.service:cdUserSvc cdUserSvc}.query() results.
     * 
     * <h3>Scope Variables Created</h3>
     * <ul>
     * 		<li>object: <i>$scope.users</i></li>
     * </ul>
     */
    .controller('cdUserListCtrl', function($scope, cdUserSvc) {
    	$scope.users = cdUserSvc.query();
    });