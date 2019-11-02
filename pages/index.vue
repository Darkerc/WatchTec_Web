<template>
    <div class="w-100 fill-height">
        <GMaps class="w-100 fill-height"/>
    </div>
</template>

<script>
import socket from '~/plugins/socket.io.js'
import GMaps from '~/components/GMaps.vue'


export default {
    head() {
        return {
            title:"Inicio"
        }
    },
    components: {
      GMaps    
    },
}
</script>
