angular.module('app')
    /**
     * @ngdoc directive
     * @name app.directive:usernameUniqueValidator
     * @element ANY
     * @requires ngModel
     *
     * @description
     * <h3>This directive:</h3>
     * <ol>
     * 		<li>Once standard validator (e.g. required in this case) are met, each keystroke, an API call is made to see if the particular username already exists.</li>
     * 		<li>The $http promise received from the API call is returned as boolean indicating whether the input is valid or invalid.</li>
     * </ol>
     */
	.directive('usernameUniqueValidator', ['$http', function($http) {
		return {
			require : 'ngModel',
			link : function($scope, element, attrs, ngModel) {
				ngModel.$asyncValidators.usernameUnique = function(username) {
					return $http.get('/api/user/username-unique/'+username);
				}; 
			}
        }
	}])