var map;
var cvs;
var userTime = moment.tz.guess();
var washTime = moment().tz("America/New_York").format("dddd, HH:mm");
// var conv = userTime.clone().tz("America/New_York").format("dddd, HH:mm");


// var d = washTime.day();
// var h = washTime.hour();
// var m = washTime.minute();
// var se = washTime.second();

function preload() {
	// cvs = loadJSON("karen/map.geojson");
	// var cvsLocation = cvs.features[0].geometry.coordinates;
}

function setup() {
	createCanvas(1000, 600);
	noLoop();
	// moment.tz.setDefault("America/New_York").format("dddd, HH:mm");
}

function initMap() {
	var washington = {lat: 38.9044233,lng: -77.0365511};


	var locations1 = [
		{lat: 38.909451,lng: -77.044539}, //dupontCircle
		{lat: 38.908171,lng: -77.043221}, //nineteenthSt (not on google)
		{lat: 38.902292,lng: -77.044553}, //kSt
		{lat: 38.903122,lng: -77.039290}, //connAv
		{lat: 38.903975,lng: -77.039500}, //lSt(not on google)
		{lat: 38.904495,lng: -77.032230}, //vermAv
		{lat: 38.904643,lng: -77.025805}, //tenthSt
		{lat: 38.895841,lng: -77.029099}, //pennsAv
	];
	
	var locations2 = [
		{lat: 38.905462,lng: -77.045114}, //mSt				//not 24hrs
		{lat: 38.898920,lng: -77.031651}, //fourteenthSt		//not 24hrs
	];
	
	
	map = new google.maps.Map(document.getElementById('map'), {
		center: washington,
		zoom: 15
	});
	
	for (var i = 0; i < locations1.length; i++) {
		//do user time comparison to store hours

		//8am-10pm weekdays; 10am-5pm weekends
		//19th & 10th & PennsAv: 9am-6pm Sats; 10am-6pm Suns

		var markerIcon1;

		//array test w/ days and for loop
		var mon = moment().get("Monday");
		var tues = moment().get("Tuesday");
		var wed = moment().get("Wednesday");
		var thurs = moment().get("Thursday");
		var fri = moment().get("Friday");
		
		var weekday = [mon, tues, wed, thurs, fri];
		
			for(var j = 0; j < weekday.length; j++){

/* // with working hours
	if( ( ( moment().format("dddd") ) === ( weekday[0].format("dddd") ) ) && ( ( moment().format("HH:mm") ) > ( moment().get("08:00") ) ) && ( ( moment().format("HH:mm") ) < ( moment().get("23:00") ) ) ){
		markerIcon1 = "images/openRx.png";
		console.log("Open");
	} else if( ( ( moment().format("dddd") ) === ( weekday[1].format("dddd") ) ) && ( ( moment().format("HH:mm") ) > ( moment().get("08:00") ) ) && ( ( moment().format("HH:mm") ) < ( moment().get("23:00") ) ) ){
		markerIcon1 = "images/openRx.png";
		console.log("Open");
	} else if( ( ( moment().format("dddd") ) === ( weekday[2].format("dddd") ) ) && ( ( moment().format("HH:mm") ) > ( moment().get("08:00") ) ) && ( ( moment().format("HH:mm") ) < ( moment().get("23:00") ) ) ){
		markerIcon1 = "images/openRx.png";
		console.log("Open");
	} else if( ( ( moment().format("dddd") ) === ( weekday[3].format("dddd") ) ) && ( ( moment().format("HH:mm") ) > ( moment().get("08:00") ) ) && ( ( moment().format("HH:mm") ) < ( moment().get("23:00") ) ) ){
		markerIcon1 = "images/openRx.png";
		console.log("Open");
	} else if( ( ( moment().format("dddd") ) === ( weekday[4].format("dddd") ) ) && ( ( moment().format("HH:mm") ) > ( moment().get("08:00") ) ) && ( ( moment().format("HH:mm") ) < ( moment().get("23:00") ) ) ){
		markerIcon1 = "images/openRx.png";
		console.log("Open");
	} else {
		markerIcon1 = "images/closedRx.png";
		console.log("Closed");
	}
	*/
	
	// just M-F
				if( ( moment().format("dddd") ) === ( weekday[0].format("dddd") ) ){
					markerIcon1 = "images/openRx.png";
					console.log("Open");
				} else if( ( moment().format("dddd") ) === ( weekday[1].format("dddd") ) ){
					markerIcon1 = "images/openRx.png";
					console.log("Open");
				} else if( ( moment().format("dddd") ) === ( weekday[2].format("dddd") ) ){
					markerIcon1 = "images/openRx.png";
					console.log("Open");
				} else if( ( moment().format("dddd") ) === ( weekday[3].format("dddd") ) ){
					markerIcon1 = "images/openRx.png";
					console.log("Open");
				} else if( ( moment().format("dddd") ) === ( weekday[4].format("dddd") ) ){
					markerIcon1 = "images/openRx.png";
					console.log("Open");
				} else {
					markerIcon1 = "images/closedRx.png";
					console.log("Closed");
				}
			}
			
		var marker = new google.maps.Marker({
			position: locations1[i],
			icon: markerIcon1,
			map: map
		});
		
	}

	
for (var f = 0; f < locations2.length; f++) {
	
	var markerIcon2;
	
	var sat = moment().get("Saturday");
	var sun = moment().get("Sunday");
	
	var weekend = [sat, sun];
	
		for (var k = 0; k < weekend.length; k++){
		// just Sat-Sun
			if( ( moment().format("dddd") ) === ( weekend[0].format("dddd") ) ){
				markerIcon2 = "images/openRx.png";
				console.log("Open");
			} else if( ( moment().format("dddd") ) === ( weekend[1].format("dddd") ) ){
				markerIcon2 = "images/openRx.png";
				console.log("Open");
			} else {
				markerIcon2 = "images/closedRx.png";
				console.log("Closed");
			}
		}

		var marker2 = new google.maps.Marker({
			position: locations2[i],
			icon: markerIcon2,
			map: map
		});
	
}

			
	console.log(moment().tz("America/New_York").format("dddd, HH:mm"));

}
