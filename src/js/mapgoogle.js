/*
 Этот код нужен для инициализации гугл карты с индивидуальным дизайном.
 Используется на страницах search.html и result.html
 */

// When the window has finished loading create our google map below
//google.maps.event.addDomListener(window, 'load', init);

function init() {
    // Basic options for a simple Google Map
    // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
    var mapOptions = {
        // How zoomed in you want the map to start at (always required)
        zoom: 11,

        scrollwheel: false,

        // The latitude and longitude to center the map (always required)
        center: new google.maps.LatLng(40.6700, -73.9400), // New York

        // How you would like to style the map.
        // This is where you would paste any style found on Snazzy Maps.
        styles: [
            {
                "featureType": "administrative.country",
                "elementType": "geometry.stroke",
                "stylers": [
                    {
                        "visibility": "on"
                    }
                ]
            },
            {
                "featureType": "administrative.province",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "on"
                    }
                ]
            },
            {
                "featureType": "administrative.locality",
                "elementType": "all",
                "stylers": [
                    {
                        "saturation": 7
                    },
                    {
                        "lightness": 19
                    }
                ]
            },
            {
                "featureType": "administrative.locality",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#363636"
                    }
                ]
            },
            {
                "featureType": "administrative.locality",
                "elementType": "labels.text.stroke",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "administrative.neighborhood",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#4e4e4e"
                    }
                ]
            },
            {
                "featureType": "administrative.neighborhood",
                "elementType": "labels.text.stroke",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "landscape.man_made",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "saturation": "-100"
                    },
                    {
                        "gamma": "1.67"
                    },
                    {
                        "lightness": "39"
                    }
                ]
            },
            {
                "featureType": "landscape.man_made",
                "elementType": "geometry.stroke",
                "stylers": [
                    {
                        "visibility": "on"
                    },
                    {
                        "color": "#c7c7c7"
                    }
                ]
            },
            {
                "featureType": "landscape.man_made",
                "elementType": "labels.text.stroke",
                "stylers": [
                    {
                        "visibility": "on"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "all",
                "stylers": [
                    {
                        "saturation": -100
                    },
                    {
                        "lightness": 100
                    },
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "geometry",
                "stylers": [
                    {
                        "hue": "#008eff"
                    },
                    {
                        "saturation": -93
                    },
                    {
                        "lightness": 31
                    },
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "labels",
                "stylers": [
                    {
                        "hue": "#bbc0c4"
                    },
                    {
                        "saturation": -93
                    },
                    {
                        "lightness": 31
                    },
                    {
                        "visibility": "on"
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "on"
                    },
                    {
                        "lightness": "53"
                    }
                ]
            },
            {
                "featureType": "road.arterial",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "on"
                    }
                ]
            },
            {
                "featureType": "road.arterial",
                "elementType": "labels",
                "stylers": [
                    {
                        "hue": "#008eff"
                    },
                    {
                        "saturation": -93
                    },
                    {
                        "lightness": -2
                    }
                ]
            },
            {
                "featureType": "road.local",
                "elementType": "geometry",
                "stylers": [
                    {
                        "hue": "#007fff"
                    },
                    {
                        "saturation": -90
                    },
                    {
                        "lightness": -8
                    },
                    {
                        "visibility": "on"
                    }
                ]
            },
            {
                "featureType": "transit",
                "elementType": "all",
                "stylers": [
                    {
                        "hue": "#007fff"
                    },
                    {
                        "saturation": 10
                    },
                    {
                        "lightness": 69
                    },
                    {
                        "visibility": "on"
                    }
                ]
            },
            {
                "featureType": "transit",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#474ca6"
                    }
                ]
            },
            {
                "featureType": "transit",
                "elementType": "labels.text.stroke",
                "stylers": [
                    {
                        "visibility": "on"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "simplified"
                    },
                    {
                        "color": "#00ffff"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#474ca6"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "labels.text",
                "stylers": [
                    {
                        "saturation": "-100"
                    },
                    {
                        "color": "#ffffff"
                    },
                    {
                        "lightness": "63"
                    },
                    {
                        "gamma": "1.00"
                    }
                ]
            }
        ]
    };

    var azurePin = {
        path: 'M184.85,0A154.82,154.82,0,0,0,30,154.82c0,85.51,154.81,214.9,154.81,214.9s154.83-129.39,154.83-214.9A154.82,154.82,0,0,0,184.85,0Zm0,206.86a68.29,68.29,0,1,1,68.31-68.3A68.29,68.29,0,0,1,184.85,206.86Z',
        fillColor: '#474CA6',
        fillOpacity: 1,
        scale: 0.1,
        strokeColor: 'transparent',
        strokeWeight: 1
    };

    // Get the HTML DOM element that will contain your map
    // We are using a div with id="map" seen below in the <body>
    var mapElement = document.getElementById('map-canvas');

    // Create the Google Map using our element and options defined above
    var map = new google.maps.Map(mapElement, mapOptions);

    // Let's also add a marker while we're at it
    var marker = new google.maps.Marker({
        position: new google.maps.LatLng(40.6700, -73.9400),
        icon: azurePin,
        map: map,
        title: 'Snazzy!'
    });
}
