var map;
var infotxt = [];
var infoimg = [];

function initMap() {
	var location = {lat: -34.6, lng: -58.405};
    map = new google.maps.Map(document.getElementById('map'), {
        center: location,
        zoom: 13
    });

    var script = document.createElement('script');
	script.src = 'parks.json';
	document.getElementsByTagName('head')[0].appendChild(script);
	
	window.json_callback = function(results) {
		for (var i = 0; i < results.features.length; i++) {
			var coordinates = results.features[i].geometry.coordinates;
			var latLng = new google.maps.LatLng(coordinates[1],coordinates[0]);
			var name = results.features[i].properties.name;
			var addr = results.features[i].properties.address_full;
			var descr = results.features[i].properties.comments;
			var rate = results.features[i].properties.rating;

			infoimg.push(results.features[i].properties.image);

			var txt = "<h3>"+name+"</h3><p>" + addr +"<br><br>"+ descr +"<br><br><br> Rating: "+ rate +" out of 10";
			infotxt.push(txt);
			add_marker(i, latLng, name);
		}
	};

	function add_marker(id, point, name) {
		var marker = new google.maps.Marker({map: map, position: point, clickable: true, title: name, icon: "https://upload.wikimedia.org/wikipedia/commons/f/f1/Map_marker_icon_%E2%80%93_Nicolas_Mollet_%E2%80%93_Birds_%E2%80%93_Nature_%E2%80%93_iphone.png"});
		marker.addListener('click', function() {
			document.querySelector('#infotxt').innerHTML = infotxt[id];
			document.querySelector('#infoimg').src = infoimg[id];
		});
		return marker;
	};


} 