angular.module('app')
/**
 * @ngdoc service
 * @name app.service:cdContactSvc
 *
 * @description
 * Angular ngResource used to make API calls for contact CRUD functionality
 *
 **/
    .factory('cdContactSvc', function($resource, stateAbbreviationsSvc) {

    	var ContactResource = $resource('/api/contact/:id', {id: "@id"},{
    		'update': { method:'PUT' }
    	});  	
    	
        angular.extend(ContactResource.prototype, {

        	getFullName: function () {
        		return this.firstName+' '+this.lastName;
            },

            getFieldMetadata: function () {
                var fieldMetadata = [
                    {type: 'text',name: 'firstName',required: true},
                    {type: 'text',name: 'lastName',required: true},
                    {type: 'email',name: 'email'},
                    {type: 'tel',name: 'homePhone'},
                    {type: 'tel',name: 'mobilePhone'}
                ];
                return fieldMetadata;
            },

            getAddressFieldMetadata: function () {
                var addressFields = [
                     {type: 'text',name: 'street'},
                     {type: 'text',name: 'street2'},
                     {type: 'text',name: 'city'},
                     {type: 'select',
                         name: 'state',
                         options: stateAbbreviationsSvc
                     },
                     {type: 'text',name: 'zip'}   
                 ];
                return addressFields;
            }       	
        });
    	
    	
    	return ContactResource;    	
    	
    })