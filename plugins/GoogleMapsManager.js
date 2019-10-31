

export default class GoogleMapsManager {
  constructor(
    idMap,
    mapOptions = { zoom: 14, center: new google.maps.LatLng(10, 10) }
  ) {
    this.containerMap = new google.maps.Map(
      document.getElementById(idMap),
      mapOptions
    );
  }

  drawMark(options) {
    let marker = new google.maps.Marker(options);
    marker.setMap(this.containerMap);
  }

  drawMark(lat, lng, title, icon = null) {
    let marker = new google.maps.Marker({
      position: { lat, lng },
      title,
      map: this.containerMap,
      icon
    });
    marker.setMap(this.containerMap);
  }

  makeMark(options) {
    let marker = new google.maps.Marker(options);
    return marker;
  }

  makeMark(lat, lng, title, icon = null) {
    let marker = new google.maps.Marker({
      position: { lat, lng },
      title,
      icon
    });
    return marker;
  }

  static makeMark(options) {
    let marker = new google.maps.Marker(options);
    return marker;
  }

  static makeMark(lat, lng, title, icon = null) {
    let marker = new google.maps.Marker({
      position: { lat, lng },
      title,
      icon
    });
    return marker;
  }

  drawRoute(markerOrigin, markerDestination,travelMode = "DRIVING"){
    let gmDirection = new google.maps.DirectionsService();
    let directionsDisplay = new google.maps.DirectionsRenderer();
    let request = {
      origin: new google.maps.LatLng(markerOrigin.lat, markerOrigin.lng),
      destination: new google.maps.LatLng(
        markerDestination.lat,
        markerDestination.lng
      ),
      travelMode
    };
    gmDirection.route(request, (data, status) => {
      if (status === "OK") {
        let options = {
          preserveViewport: true,
          polylineOptions: {
            strokeColor: "rgba(0,0,0,.75)"
          },
          markerOptions: {
            visible: false
          }
        };
        directionsDisplay.setOptions(options);
        directionsDisplay.setMap(this.containerMap);
        directionsDisplay.setDirections(data);
        console.log(data)
        } else {
          return status
        }
    });

  }

  static getUserPosition(options) {
    return new Promise(function(resolve, reject) {
      navigator.geolocation.getCurrentPosition(resolve, reject, options);
    });
  }

  addPolylineLine(flightPlanCoordinates = []) {
    let flightPath = new google.maps.Polyline({
      path: flightPlanCoordinates,
      geodesic: true,
      strokeColor: "#424242",
      strokeOpacity: 1.0,
      strokeWeight: 2
    });

    return flightPath;
  }
}
