angular.module('app')
    /**
     * @ngdoc directive
     * @name app.directive:validatePasswordCharacters
     * @element ANY
     * @requires ngModel
     *
     * @description
     * <h3>This directive:</h3>
     * <ol>
     * 		<li>Once standard validator (e.g. required in this case) are met, each keystroke, the value of the ng-model is tested agains each required pattern in the REQUIRED_PATTERS array.</li>
     * 		<li>Validity of input is initialized as true and remains that way unless a false test occurs.</li>
     * 		<li>The false status will remain even after successive truths being that the false is mated to the next truth.</li>
     * </ol>
     * 
     * @returns {Boolean} status True/False indicating inputs validity.
     */
    .directive('validatePasswordCharacters', function() {
    
        var REQUIRED_PATTERNS = [
          /\d+/,    //numeric values
          /[a-z]+/, //lowercase values
          /[A-Z]+/, //uppercase values
          /^\S+/   //no whitespace allowed
        ];    
        return {
            require : 'ngModel',
            link : function($scope, element, attrs, ngModel) {
                ngModel.$validators.passwordCharacters = function(value) {
                	var status = true;
                	angular.forEach(REQUIRED_PATTERNS, function(pattern) {
                		status = status && pattern.test(value);
                	});
                	return status;
                }; 
            }
        }
    });