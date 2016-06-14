angular.module('app')
    /**
     * @ngdoc controller
     * @name app.controller:cdContactListCtrl
     *
     * @description
     * Controller which handles the listing of contacts for a user.
     */
    .controller('cdContactListCtrl', function($scope, $location, cdNotifierSvc, cdContactSvc) {
    	/**
    	 * @ngdoc property
    	 * @name app.controller:cdContactListCtrl#$scope.contacts
    	 * @propertyOf app.controller:cdContactListCtrl
    	 * @description
    	 * Variable containing all contacts returned from {@link app.service:cdContactSvc cdContactSvc}.query() method.
    	 */
        $scope.contacts = cdContactSvc.query();
        
  
        
    	/**
    	 * @ngdoc property
    	 * @name app.controller:cdContactListCtrl#$scope.contact
    	 * @propertyOf app.controller:cdContactListCtrl
    	 * @description
    	 * <p>Variable containing contact object initialized from {@link app.service:cdContactSvc cdContactSvc}.</p>
    	 * 
    	 */     
        $scope.contact = new cdContactSvc;
        
    	/**
    	 * @ngdoc property
    	 * @name app.controller:cdContactListCtrl#$scope.fields
    	 * @propertyOf app.controller:cdContactListCtrl
    	 * @description
    	 * Variable containing all contacts field information defined in contact object {@link app.service:cdContactSvc cdContactSvc}
    	 */
    	$scope.fields = $scope.contact.getFieldMetadata();
        
		/**
		 * @ngdoc method
		 * @name showEdit
		 * @methodOf app.controller:cdContactListCtrl
		 * @description
		 * This method will redirect page to /contact/:id based on what id is passed in.
		 *
		 * @param {String} shouldLog Boolean flag to indicate whethere
		*/        
        $scope.showEdit = function (id) {
            $location.url('/contact/' + id);
        };

		/**
		 * @ngdoc method
		 * @name addContact
		 * @methodOf app.controller:cdContactListCtrl
		 * @description
		 * This method will redirect page to the /contact/add page.
		 *
		*/ 
    	$scope.addContact = function() {
            $location.url('/contact/add');
        }

		/**
		 * @ngdoc method
		 * @name deleteContact
		 * @methodOf app.controller:cdContactListCtrl
		 * @description
		 * This method will redirect page to the /contact/add page.
    	 * <ol>
    	 * 		<li>Call {@link app.service:cdContactSvc cdContactSvc}.createUser() passing in contact._id.
    	 * 			<ul>
    	 * 				<li>If success:
    	 * 					<ol>
    	 * 						<li>Remove deleted contact object from contact object with splice() using index as the identifier.</li>
    	 * 						<li>Notify user the contact was deleted successfully via cdNotifierSvc (toastr notification).</li>
    	 * 					</ol>
    	 * 				</li>
    	 * 				<li>If faulire:
    	 * 					<ol>
    	 * 						<li>Notify user of failure by displaying reason(error) via cdNotifierSvc (toastr notification).</li>
    	 * 					</ol>
    	 * 				</li>
    	 * 			</ul>
    	 * 		</li>
    	 * </ol>
		 *
		*/     	
        $scope.deleteContact = function(contact, index) {
            cdContactSvc.delete({id: contact._id}).$promise.then(
                function(value) {
                	$scope.contacts.splice(index, 1);
                	cdNotifierSvc.warning('Contact deleted.');
                },
                function(reason) {
                	cdNotifierSvc.error(reason);
                }
            )
        }
    });