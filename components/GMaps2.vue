<template>
  <div id="mapa" class="fill-height w-100" style="min-width: 250px; min-height: 250px;"></div>
</template>

<script>
import GoogleMapsManager from "~/plugins/GoogleMapsManager.js";
// import googleMapsClient from '@google/maps'

const googleMapsClient = require("@google/maps").createClient({
  key: "AIzaSyCHZRT3mHUTTJfm8GowuJzFZP5kKFDoLgI",
  Promise: Promise
});

export default {
  head() {
    return {
      script: [
        {
          src:
            "https://maps.googleapis.com/maps/api/js?key=AIzaSyCHZRT3mHUTTJfm8GowuJzFZP5kKFDoLgI",
          async: true,
          defer: true
        },
        {
          src: "https://www.gstatic.com/firebasejs/5.10.1/firebase-app.js",
          async: true,
          defer: true
        },
        {
          src: "https://www.gstatic.com/firebasejs/5.10.1/firebase-database.js",
          async: true,
          defer: true
        }
      ]
    };
  },
  mounted() {
    this.initConfig();
  },
  methods: {
    getPosition: options => {
      return new Promise(function(resolve, reject) {
        navigator.geolocation.getCurrentPosition(resolve, reject, options);
      });
    },
    async initConfig() {
      let { coords } = await this.getPosition();

      let gmm = new GoogleMapsManager("mapa", {
        zoom: 17,
        center: new google.maps.LatLng(coords.latitude, coords.longitude)
      });

      let data = await googleMapsClient
        .directions({
          origin: new google.maps.LatLng(coords.latitude, coords.longitude),
          destination: new google.maps.LatLng(
            18.02465,
            -92.903413
          ),
          mode:'driving'
        })
        .asPromise();

        console.log(data)
    }
  }
};
</script>