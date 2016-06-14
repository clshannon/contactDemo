angular.module('app')

.factory('cdGoogleMapsCoordinatesSvc', function($http, $q){

    var getCoordinatesFromAddress = function(address, callbackFn) {
        if(address.street !== "" && address.city !== "" && address.state !== "" && address.zip !== null) {
            var addressString = 
                address.street+' '+
                address.city+' '+
                address.state+' ';
                address.zip;
            $http.get('https://maps.googleapis.com/maps/api/geocode/json?address='+addressString)
                .then(function successCallback(response) {
                    if (response.data.status === "OK" && response.data.results.length === 1) {
                        callbackFn(response.data.results[0].geometry.location);
                    } else {
                        callbackFn({error: "Address is incorrect or nonspecific."});
                    }
                });
        } else {
            callbackFn({error: "Address is missing or incomplete."});
        }
    };

    return {
        getCoordinatesFromAddress: getCoordinatesFromAddress
    };

})

.factory('cdGoogleMapsSvc', function(cdNotifierSvc){

    // Initialize Variables
    // -------------------------------------------------------------
    // Service our factory will return
    var googleMapService = {};
    var geocoder;
    var loc=[];

    // Functions
    // --------------------------------------------------------------

    //Initializes the map
    googleMapService.initialize = function(coordinates) {

    var initialLatlng = new google.maps.LatLng(37.09024, -95.712891);
    var imagePath = 'http://m.schuepfen.ch/icons/helveticons/black/60/Pin-location.png'
    var mapOptions = {
        zoom: 4,
        center: initialLatlng,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        scrollwheel: false,
        zoomControl: true,
        fullscreenControl: true,
        mapTypeControl: true
    }

      var map = new google.maps.Map(document.getElementById('map'), mapOptions);

      if (typeof coordinates !== "undefined") {
          //Add Marker
          var marker = new google.maps.Marker({
            position: coordinates,
            map: map,
            icon: imagePath,
            title: 'image title'
          });

        var newLatLng = new google.maps.LatLng(coordinates.lat,coordinates.lng);
        //map.setCenter = coordinates;
        //map.setZoom(new google.maps.setZoom(8));

        var bounds = new google.maps.LatLngBounds();
        bounds.extend(newLatLng) // your marker position, must be a LatLng instance

        map.fitBounds(bounds);        

      }      

      //Resize Function
      google.maps.event.addDomListener(window, "resize", function() {
        var center = map.getCenter();
        google.maps.event.trigger(map, "resize");
        map.setCenter(center);
      });

    };   

    return googleMapService;
});
