

var coords = {
  lat: 40.714,
  lng: -74.005,
  radius: 8405837
},
map;

function initMap() {
  // Create the map.
    map = new google.maps.Map(document.getElementById('map'), {
    zoom: 6,
    center: {lat: 40.714, lng: -74.005},
    mapTypeId: google.maps.MapTypeId.TERRAIN
  });

  var cityCircle,
      marker;

    function makecityCircle() {
        cityCircle = new google.maps.Circle({
        strokeColor: '#5bc0de',
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: '#fff',
        fillOpacity: 0.35,
        map: map,
        center: {lat: coords.lat, lng: coords.lng},
        radius: Math.sqrt(coords.radius) * 100
      });
    };

    function removecityCircle() {

      cityCircle.setMap(null);

    };

    function makeMarker() {
      marker = new google.maps.Marker({
      position: {lat: coords.lat, lng: coords.lng},
      map: map,
      icon: 'img/icons/targ-ico.png'
      });
    };

    function removeMarker() {

      marker.setMap(null);

    };

    function setCenterMap() {

      map.setCenter({lat: coords.lat, lng: coords.lng});

    }

    makecityCircle();
    makeMarker();

  $(window).on('load', function () {
      var $inputLat = $('#lat'),
          $inputLng = $('#lng'),
          $inputRadius = $('#radius');

      $inputLat.val(coords.lat);
      $inputLng.val(coords.lng);
      $inputRadius.val(coords.radius);

      $('.coordsInput').each(function() {
        
        $(this).on('change', function () {

            removecityCircle();
            removeMarker();

            var $self = $(this),
                $selfVal = $self.val(),
                $selfid = $self.attr('id');

                switch ($selfid) {

                  case 'lat':
                    coords.lat = parseFloat($selfVal);
                    break;

                  case 'lng':
                    coords.lng = parseFloat($selfVal);
                    break;

                  case 'radius':
                    coords.radius = parseFloat($selfVal);
                    break;
                }

            setCenterMap();

            makecityCircle();
            makeMarker();

            console.log(coords);
        })

      })

  })
}