angular.module('app')

    /**
     * @ngdoc controller
     * @name app.controller:cdContactAddCtrl
     *
     * @description
     * Controller which handles adding a contact to the database.
     * 
     * @requires $scope
     * @requires $location
     * @requires {@link app.service:cdContactSvc cdContactSvc}
     * @requires {@link app.service:cdNotifierSvc cdNotifierSvc}
     */
    .controller('cdContactAddCtrl', function($scope, $location, cdContactSvc, cdNotifierSvc) {
  
        
    	/**
    	 * @ngdoc property
    	 * @name app.controller:cdContactAddCtrl#$scope.contact
    	 * @propertyOf app.controller:cdContactAddCtrl
    	 * @description
    	 * <p>Variable containing contact object initialized from {@link app.service:cdContactSvc cdContactSvc}.</p>
    	 * 
    	 */     
        $scope.contact = new cdContactSvc;
        
    	/**
    	 * @ngdoc property
    	 * @name app.controller:cdContactAddCtrl#$scope.fields
    	 * @propertyOf app.controller:cdContactAddCtrl
    	 * @description
    	 * Variable containing all contacts field information defined in contact object {@link app.service:cdContactSvc cdContactSvc}
    	 */
    	$scope.fields = $scope.contact.getFieldMetadata();
        
    	/**
    	 * @ngdoc property
    	 * @name app.controller:cdContactAddCtrl#$scope.addressFields
    	 * @propertyOf app.controller:cdContactAddCtrl
    	 * @description
    	 * Variable containing all contact's address field information defined contact object {@link app.service:cdContactSvc cdContactSvc}.
    	 */    	
        $scope.addressFields = $scope.contact.getAddressFieldMetadata();        
        
        
		/**
		 * @ngdoc method
		 * @name addContact
		 * @methodOf app.controller:cdContactAddCtrl
		 * @description
		 * This method will redirect page to the /contact/add page.
    	 * <ol>
    	 * 		<li>Call {@link app.service:cdContactSvc cdContactSvc}.$update() method to add contact to database
    	 * 			<ul>
    	 * 				<li>If successful:
    	 * 					<ol>
    	 * 						<li>Notify user of success via cdNotifierSvc (toastr notification).</li>
    	 * 						<li>Redirect page to /contact/:id based on new user's returned _id</li>
    	 * 					</ol>
    	 * 				</li>
    	 * 			</ul>
    	 * 		</li>
    	 * </ol>
		 *
		*/      
        $scope.addContact = function() {
            $scope.contact.$save().then(
            	function(contact) {
            		cdNotifierSvc.success('Contact successfully saved.');
            		$location.path('/contact/'+contact._id);
            	}, function(response) {
            		cdNotifierSvc.error(response);            		
            	});
        }
        
    });