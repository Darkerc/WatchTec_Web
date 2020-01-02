export default function(contex){
    if(process.client){
        if(navigator.geolocation){
            navigator.geolocation.watchPosition(({coords}) => {
                console.log(coords)
            })
        }
    }
}