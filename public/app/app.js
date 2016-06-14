/**
 * @ngdoc object
 * @name app
 * @description
 * App for users to store contact information. Contacts CRUD functionality. Requires ngResource, ngRoute, ngMessages, uiGmapgoogle-maps, and ui.mask.
 */

angular.module('app', ['ngResource', 'ngRoute', 'ngMessages', 'uiGmapgoogle-maps', 'ui.mask']);

angular.module('app')

.config(function($routeProvider, $locationProvider, uiGmapGoogleMapApiProvider) {

    uiGmapGoogleMapApiProvider.configure({
        //    key: 'your api key',
        v: '3.20', //defaults to latest 3.X anyhow
        libraries: 'weather,geometry,visualization'
    });
    
	var routeRoleChecks = {
		admin: { auth: function(cdAuthSvc) {
    		return cdAuthSvc.authorizeCurrentUserForRoute('admin');
    		}
    	},
    	user: { auth: function(cdAuthSvc) {
    		var test = cdAuthSvc.authorizeCurrentUserForRoute('user');
    		return cdAuthSvc.authorizeCurrentUserForRoute('user');
    		}
    	}
	}
  $locationProvider.html5Mode(true);
  $routeProvider
  	.when('/contacts', { 
  		templateUrl: '/partials/contacts/contactList', 
  		controller: 'cdContactListCtrl',
    	resolve: routeRoleChecks.user
  	})
    .when('/contact/add', { 
        templateUrl: '/partials/contacts/contactAdd', 
        controller: 'cdContactAddCtrl',
        resolve: routeRoleChecks.user
    })
    .when('/contact/:id', {
        templateUrl: '/partials/contacts/contactEdit',
        controller: 'cdContactEditCtrl',
    	//resolve: routeRoleChecks.user,
        resolve: {
            contact: function ($route, cdContactSvc) {
                return cdContactSvc.get({ id: $route.current.params.id }).$promise;
            }
        }
    })
    .when('/admin/users', { 
    	templateUrl: '/partials/admin/user-list', 
    	controller: 'cdUserListCtrl',
    	resolve: routeRoleChecks.admin
    })
    .when('/signup', { 
    	templateUrl: '/partials/account/signupForm', 
    	controller: 'cdSignupCtrl'
    })
    .when('/', { 
    	templateUrl: '/partials/main/main', 
    	controller: 'cdMainCtrl'
    });
});

angular.module('app').run(function($rootScope, $location) {
	$rootScope.$on('$routeChangeError', function(evt, current, previous, rejection) {
		if(rejection === 'not authorized') {
			$location.path('/');
		}
	})
})