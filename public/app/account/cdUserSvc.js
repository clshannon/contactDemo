angular.module('app')

    /**
     * @ngdoc service
     * @name app.service:cdUserSvc
     * @description
     * Service providing UserResource via ng-Resource API calls
     */
    .factory('cdUserSvc', function($resource) {
    	var UserResource = $resource('/api/user/:id', {id: "@id"});
    	
    	UserResource.prototype.isAdmin = function() {
    		return this.roles && this.roles.indexOf('admin') > -1;
    	}
    	
    	return UserResource;
    });