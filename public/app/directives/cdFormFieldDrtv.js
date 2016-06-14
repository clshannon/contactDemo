angular.module('app')
    /**
     * @ngdoc service
     * @name app.service:FieldTypes
     *
     * @description
     * Defines object containing field types with associated errors. The object is used by itterating through values and creating ng-message entries for form elements so that custom errors are displayed when invalid.
     *
     **/
    .value('FieldTypes', {
        text: ['Text', 'should be text'],
        email: ['Email', 'should be an email address'],
        number: ['Number', 'should be a number'],
        date: ['Date', 'should be a date'],
        datetime: ['Datetime', 'should be a datetime'],
        time: ['Time', 'should be a time'],
        month: ['Month', 'should be a month'],
        week: ['Week', 'should be a week'],
        url: ['URL', 'should be a URL'],
        tel: ['Phone Number', 'should be a phone number'],
        color: ['Color', 'should be a color']
    })
    
    /**
    * @ngdoc directive
    * @name app.directive:formInput
    * @restrict 'EA'
    * @element form-input
    * @scope 
    * 
    * @param {Object} record Two-way binding with $scope.contact oject set in {@link app.controller:cdContactAddCtrl cdContactAddCtrl} and {@link app.controller:cdContactAddCtrl cdContactAddCtrl} respectively.
    * @param {String} field One-way binding. Passed freom view via form-input element.
    * @param {String} live One-way binding. Passed freom view via form-input element.
    * @param {String} required One-way binding. Passed freom view via form-input element.
    * @param {String} type One-way binding. Passed freom view via form-input element.
    * 
    * @description
    * <h3>This directive:</h3>
    * <ol>
    * 		<li>Creates an html template for form inputs using bootstrap markup.</li>
    * 		<li>Passes FieldTypes value to template to create ng-message messages for form input errors.</li>
    * </ol>
    * 
    **/        
    .directive('formInput', function($timeout, FieldTypes, cdNotifierSvc) {
        return {
            // Restrict the way the directive can be used; E=element, A=attribute
            restrict: 'EA',
            //template: 'app/templates/form-inputs',
            //template: '<div><p>form stuff</p></div>',
            templateUrl: 'app/templates/form-input.html',
            // Forces the form-field.html template to replace the form-field HTML in new.html instead of being placed inside of <form-field></form-field> element
            replace: true,
            // Choose what attributes are available to this scope from the <form-field> element
            scope: {
                // two-way binding; changes to record attribute will change the 'contact' object which it references
                record: '=',
                // one-way bindings; no need to change outside of element
                name: '@',
                live: '@',
                required: '@',
                type: '@'
            },
            link: function ($scope, element, attr) {
                //
                $scope.$on('record:invalid', function () {
                    $scope[$scope.name].$setDirty();
                });

                // Make FieldTypes available to template
                $scope.types = FieldTypes;

                $scope.blurUpdate = function () { 
                    // Make sure element allows live updating
                    if ($scope.live !== 'false') {
                        // Update record on server
                        $scope.record.$update(function (updatedRecord) {
                            // Set record = returned contact params
                        	cdNotifierSvc.success(updatedRecord.firstName+' '+updatedRecord.lastName+' has been updated.');
                            $scope.record = updatedRecord;
                        })
                    }
                };   
                /*
                -Method called on every keystroke inside element
                    -Sets/resets a 1 second timeout
                    -Calls blurUpdate() incase the element requires live updating
                -If more than 1 second lapses between keystrokes, the record is saved
                */
                var saveTimeout;
                $scope.update = function () {
                    // Cancel current timeout
                    $timeout.cancel(saveTimeout);
                    // Call
                    saveTimeout = $timeout($scope.blurUpdate, 1000);
                }
            }
        }
    })
