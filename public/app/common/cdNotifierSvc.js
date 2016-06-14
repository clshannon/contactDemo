
angular.module('app')
    /**
     * @ngdoc service
     * @name app.service:cdToastr
     * @description
     * Service providing toastr as accessible swervice to pass into {@link app.service:cdNotifierSvc cdNotifierSvc}.
     */
	.value('cdToastr', toastr);

angular.module('app')
    /**
     * @ngdoc service
     * @name app.service:cdNotifierSvc
     * @description
     * Service providing methods to return toastr message types
     */
    .factory('cdNotifierSvc', function (cdToastr) {
        return {
        	/**
        	 * @ngdoc method
        	 * @name success
        	 * @methodOf app.service:cdNotifierSvc
        	 * @description
        	 * Message styled in "success" color pattern (green).
        	 *
        	 * @param {String} msg Message presentd in notification.
        	 */          	
            success: function(msg) {
            	cdToastr.success('<strong>Success:</strong><br />'+msg);
            },
        	/**
        	 * @ngdoc method
        	 * @name info
        	 * @methodOf app.service:cdNotifierSvc
        	 * @description
        	 * Message styled in "info" color pattern (blue).
        	 *
        	 * @param {String} msg Message presentd in notification.
        	 */   
            info: function(msg) {
            	cdToastr.info(msg);
            },
        	/**
        	 * @ngdoc method
        	 * @name warning
        	 * @methodOf app.service:cdNotifierSvc
        	 * @description
        	 * Message styled in "warning" color pattern (orange).
        	 *
        	 * @param {String} msg Message presentd in notification.
        	 */               
            warning: function(msg) {
            	cdToastr.warning(msg);
            },
        	/**
        	 * @ngdoc method
        	 * @name error
        	 * @methodOf app.service:cdNotifierSvc
        	 * @description
        	 * Message styled in "error" color pattern (red).
        	 *
        	 * @param {String} msg Message presentd in notification.
        	 */   
            error: function(msg) {
            	cdToastr.error('<strong>Error:</strong><br />'+msg);
            }
        }
    });