angular.module('app')
    /**
     * @ngdoc controller
     * @name app.controller:cdContactEditCtrl
     *
     * @description
     * Controller which handles the editing of a contact's details.
     * 
     * @requires $scope
     * @requires contact
     * @requires {@link app.service:cdNotifierSvc cdNotifierSvc}
     * @requires {@link app.service:cdGoogleMapsSvc cdGoogleMapsSvc}
     * @requires {@link app.service:cdGoogleMapsCoordinatesSvc cdGoogleMapsCoordinatesSvc}
     */
    .controller('cdContactEditCtrl', function($scope, contact, cdNotifierSvc, cdGoogleMapsSvc, cdGoogleMapsCoordinatesSvc) {

        
    	/**
    	 * @ngdoc property
    	 * @name app.controller:cdContactEditCtrl#$scope.contact
    	 * @propertyOf app.controller:cdContactEditCtrl
    	 * @description
    	 * <p>Variable containing contact object which was created by the $routeProvider in app.js.</p>
    	 * 
    	 */    
        $scope.contact = contact;
       	
    	/**
    	 * @ngdoc property
    	 * @name app.controller:cdContactEditCtrl#$scope.fields
    	 * @propertyOf app.controller:cdContactEditCtrl
    	 * @description
    	 * Variable containing all contacts field information defined in contact object which was created by the $routeProvider in app.js.
    	 */
    	$scope.fields = contact.getFieldMetadata();;
        
    	/**
    	 * @ngdoc property
    	 * @name app.controller:cdContactEditCtrl#$scope.addressFields
    	 * @propertyOf app.controller:cdContactEditCtrl
    	 * @description
    	 * Variable containing all contact's address field information defined in contact object which was created by the $routeProvider in app.js.
    	 */    	
        $scope.addressFields = contact.getAddressFieldMetadata();

		/**
		 * @ngdoc method
		 * @name saveContact
		 * @methodOf app.controller:cdContactEditCtrl
		 * @description
		 * This method will redirect page to the /contact/add page.
    	 * <ol>
    	 * 		<li>Contact Update
    	 * 			<ol>
    	 * 				<li>ng-Model used to bind input values to contact object values.</li>
    	 * 				<li>Call {@link app.service:cdContactSvc cdContactSvc}.$update() method to update the contact's information in the database.</li>
    	 * 				<li>Notify user the contact was updated successfully via cdNotifierSvc (toastr notification).</li>
    	 * 			</ol>
    	 * 		</li>
    	 * 		<li> Google Maps 
    	 * 			<ul>
    	 * 				<li>Check to see if contact's address is defined
    	 * 					<ul>
    	 * 						<li>If not, initialze Google Map with no specific address</li>
    	 * 						<li>If so, pass the address array to 
    	 * 							<ol>
    	 * 								<li>Pass the address array to {@link app.service:cdGoogleMapsCoordinatesSvc cdGoogleMapsCoordinatesSvc} to obtain the addresses coordinates.</li>
    	 * 								<li>Pass returned coordinates to {@link app.service:cdGoogleMapsSvc cdGoogleMapsSvc} to initiaclize the map with a location pin and zoomed to that pin.</li>
    	 * 							</ol>
    	 * 					</ul>
    	 * 				</li>
    	 * 			</ul>
    	 * 		</li>
    	 * </ol>
		 *
		*/         
        $scope.saveContact = function() {

            $scope.contact.$update();
            cdNotifierSvc.success('Contact successfully saved.');
    
            if(typeof $scope.contact.address[0] !== "undefined") {
                cdGoogleMapsCoordinatesSvc.getCoordinatesFromAddress($scope.contact.address[0], function(callback) {
                    if(typeof callback.error !== "undefined") {
                        $scope.mapError = callback.error;
                        cdGoogleMapsSvc.initialize();
                    } else {
                        $scope.mapError = null;
                        cdGoogleMapsSvc.initialize(callback);
                    }
                });
            }
        	
        }
		/**
		 * @ngdoc method
		 * @name $on.$viewContentLoaded
		 * @methodOf app.controller:cdContactEditCtrl
		 * @description
		 * <h3>This method handles intitializing the Google Map.</h3>
    	 * <ul>
    	 * 		<li>Wait until view content is loaded so Google Maps will have access to the #map element.</li>
    	 * 		<li>Check to see if contact's address is defined
    	 * 			<ul>
    	 * 				<li>If not, initialze Google Map with no specific address</li>
    	 * 				<li>If so, pass the address array to 
    	 * 					<ol>
    	 * 						<li>Pass the address array to {@link app.service:cdGoogleMapsCoordinatesSvc cdGoogleMapsCoordinatesSvc} to obtain the addresses coordinates.</li>
    	 * 						<li>Pass returned coordinates to {@link app.service:cdGoogleMapsSvc cdGoogleMapsSvc} to initiaclize the map with a location pin and zoomed to that pin.</li>
    	 * 					</ol>
    	 * 			</ul>
    	 * 		</li>
    	 * </ul>
		 *
		*/     	
        $scope.$on('$viewContentLoaded', function(){
            if(typeof contact.address[0] !== "undefined") {
                cdGoogleMapsCoordinatesSvc.getCoordinatesFromAddress(contact.address[0], function(callback) {
                        if(typeof callback.error !== "undefined") {
                            $scope.mapError = callback.error;
                            cdGoogleMapsSvc.initialize();
                        } else {
                        $scope.mapError = null;
                            cdGoogleMapsSvc.initialize(callback);
                        }
                })
            } else {
                cdGoogleMapsSvc.initialize();
            }
        });
        
    });