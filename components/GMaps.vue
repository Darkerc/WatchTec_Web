<template>
<div>
    <div id="mapa" class="fill-height w-100" style="min-width: 250px; min-height: 250px;"></div>
    <v-btn class="floating_button" color="brown darken-1" dark fab>
        <v-icon @click="initConfig">mdi-autorenew</v-icon>
    </v-btn>
</div>
</template>

<script>
import GoogleMapsManager from "~/plugins/GoogleMapsManager.js";

export default {
    head() {
        return {
            script: [{
                    src: "https://maps.googleapis.com/maps/api/js?key=AIzaSyCHZRT3mHUTTJfm8GowuJzFZP5kKFDoLgI"
                    // async: true,
                    // defer: true
                },
                {
                    src: "https://www.gstatic.com/firebasejs/5.10.1/firebase-app.js",
                },
                {
                    src: "https://www.gstatic.com/firebasejs/5.10.1/firebase-database.js",
                }
            ]
        };
    },
    data() {
        return {
            usuario: null,
            gmm: null,
            coords: null,
            markers: [],
            routes: [],
            cleanRoutes: false,
            paradaITVH: {
                lat: 18.02465,
                lng: -92.903413
            }
        };
    },
    beforeMount() {
        this.firebaseConfig();
    },
    mounted() {
        this.initConfig();
    },
    methods: {
        async initConfig() {
            try {
                let {
                    coords
                } = await this.getPosition();
                this.coords = coords;

                this.gmm = new GoogleMapsManager("mapa", {
                    zoom: 17,
                    center: new google.maps.LatLng(
                        this.coords.latitude,
                        this.coords.longitude
                    )
                });

                this.gmm.drawMark(
                    this.coords.latitude,
                    this.coords.longitude,
                    "Tu ubicacion",
                    "/user.png"
                );

                this.gmm.drawMark(
                    this.paradaITVH.lat,
                    this.paradaITVH.lng,
                    "Parada ITVH",
                    "/parada.png"
                );

                this.usuariosChage();
            } catch (error) {
                console.log("Error al iniciar la carga", error.message);

                if (error.message === "User denied Geolocation") {
                    this.$toast.show("Permite la localizacion", {
                        type: "info",
                        position: "top-right",
                        theme: "outline"
                    });
                } else if (error.message === "google is not defined") {
                    //window.location.reload(true)
                    this.$toast.show("Google maps API no cargo correctamente", {
                        type: "error",
                        position: "top-right",
                        theme: "outline",
                        action: {
                            text: "Reiniciar",
                            onClick: (e, toastObject) => {
                                window.location.reload(true)
                                toastObject.remove();
                            }
                        }
                    });
                } else {
                    this.$toast.show("A ocurrido un error", {
                        type: "error",
                        position: "top-right",
                        theme: "outline",
                        action: {
                            text: "Reiniciar",
                            onClick: (e, toastObject) => {
                                window.location.reload(true)
                                toastObject.remove();
                            }
                        }
                    });
                }
            }
        },
        usuariosChage() {
            this.usuario.on("value", snap => {
                this.deleteMarkers();

                snap.forEach(item => {
                    //Creando las marcas que aparecen en el mapa
                    let mark = GoogleMapsManager.makeMark(
                        item.val().Latitud,
                        item.val().Longitud,
                        item.key,
                        "/combi.png"
                    );

                    //Añadiendolos al array
                    this.markers.push(mark);

                    let DataRoutes = this.gmm.drawRoute({
                            lat: this.paradaITVH.lat,
                            lng: this.paradaITVH.lng
                        }, {
                            lat: item.val().Latitud,
                            lng: item.val().Longitud
                        },
                        (directionsDisplay, data) => {
                            this.routes.push(directionsDisplay);
                        }
                    );
                });

                this.drawMarkers();
            });
        },
        getPosition: options => {
            return new Promise(function (resolve, reject) {
                navigator.geolocation.getCurrentPosition(resolve, reject, options);
            });
        },
        firebaseConfig() {
            var firebaseConfig = {
                apiKey: "AIzaSyAqQB3GR0EUvTirIlx-oMZ06WMk5ZCRFlk",
                authDomain: "watchtec-eebba.firebaseapp.com",
                databaseURL: "https://watchtec-eebba.firebaseio.com",
                projectId: "watchtec-eebba",
                storageBucket: "watchtec-eebba.appspot.com",
                messagingSenderId: "11776039392",
                appId: "1:11776039392:web:998302c871775d63ff3385"
            };
            firebase.initializeApp(firebaseConfig);
            this.usuario = firebase.database().ref("Usuarios");
        },
        drawMarkers() {
            this.markers.forEach(mark => {
                mark.setMap(this.gmm.containerMap);
            });
            this.routes.forEach(route => {
                route.setMap(this.gmm.containerMap);
            });
        },
        deleteMarkers() {
            this.markers.forEach(mark => {
                mark.setMap(null);
            });
            this.markers = [];

            this.routes.forEach(route => {
                route.setMap(null);
            });
            this.routes = [];
        }
    }
};
</script>

<style lang="scss">
.floating_button {
    position: fixed !important;
    margin: auto 10px auto auto !important;
    z-index: 6 !important;
    top: 0 !important;
    bottom: 0 !important;
    right: 0 !important;
    border-radius: 50%;

    &:hover {
        animation: 2s linear infinite girar;
        transform: scale(1.2);
    }
}

@keyframes girar {
    to {
        transform: rotate(0deg);
    }

    from {
        transform: rotate(-360deg);
    }
}
</style>
