angular.module('app')
    /**
     * @ngdoc directive
     * @name app.directive:validateEmailTld
     * @element ANY
     * @requires ngModel
     *
     * @description
     * <h3>This directive:</h3>
     * <ol>
     * 		<li>Once standard validator (e.g. required in this case) are met, each keystroke, the value of the ng-model is tested against the RegEx pattern defined in var pattern</li>
     * 		<li>Validity of input is initialized as true and remains that way unless a false test occurs.</li>
     * </ol>
     * 
     * @returns {Boolean} status True/False indicating inputs validity.
     */
	.directive('validateEmailTld', function() {
		var pattern = /^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/i

		return {
			require : 'ngModel',
			link : function($scope, element, attrs, ngModel) {
				ngModel.$validators.emailTld = function(value) {
					var status = true;
					status = pattern.test(value);
					return status;
				}; 
			}
		}
	});