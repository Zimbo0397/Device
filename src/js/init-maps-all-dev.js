	
	var markersArr = [
		{
			lat: -34.297,
			lng: 150.544,
			icon: 'img/icons/pin-red.png',
			content: '<p>2017-01-01 09:30:27 OUT Alert</p><p>Device left  its fence area.</p><p>Yancht: Princess Viking</p>'
		},
		{
			lat: -34.397,
			lng: 150.644,
			icon: 'img/icons/pin-blue.png',
			content: '<p>2017-01-01 09:30:27 OUT Alert</p><p>Device left  its fence area.</p><p>Yancht: Princess Viking</p>'
		},
		{
			lat: -34.197,
			lng: 150.344,
			icon: 'img/icons/pin-red.png',
			content: '<p>2017-01-01 09:30:27 OUT Alert</p><p>Device left  its fence area.</p><p>Yancht: Princess Viking</p>'
		},
		{
			lat: -34.697,
			lng: 150.844,
			icon: 'img/icons/pin-blue.png',
			content: '<p>2017-01-01 09:30:27 OUT Alert</p><p>Device left  its fence area.</p><p>Yancht: Princess Viking</p>'
		},
		{
			lat: -34.997,
			lng: 150.944,
			icon: 'img/icons/pin-red.png',
			content: '<p>2017-01-01 09:30:27 OUT Alert</p><p>Device left  its fence area.</p><p>Yancht: Princess Viking</p>'
		}
	];

	var infoWindows = [],
		markers = [];

	function initMap() {
	    // Create a map object and specify the DOM element for display.
	    var map = new google.maps.Map(document.getElementById('map'), {
	      center: {lat: -34.397, lng: 150.644},
	      scrollwheel: false,
	      zoom: 8
	    });



		for(var i = 0; i < markersArr.length; i++) {

			var content = markersArr[i].content;

			var infowindow = new google.maps.InfoWindow({
				content: content
			});

			infoWindows.push(infowindow);

			var marker = new google.maps.Marker({
			    position: {lat: markersArr[i].lat, lng: markersArr[i].lng},
			    map: map,
			    icon: markersArr[i].icon,
			    title: 'marker'+[i]+''
		  	});

		  	markers.push(marker);

		};

		markers.map(function (marker, i) {

			marker.addListener('click', function() {
				infoWindows[i].open(map, marker);
			});
		});

	  }
	



