<template>
  <perfect-scrollbar class="layout_index full_size" :options="{ swipeEasing: true , suppressScrollX: true}">
    <nuxt />
  </perfect-scrollbar>
</template>

<script>
import Vue from 'vue'
import PerfectScrollbar from 'vue2-perfect-scrollbar'
import 'vue2-perfect-scrollbar/dist/vue2-perfect-scrollbar.css'
Vue.use(PerfectScrollbar)

export default {
}

</script>


<style lang="scss">

body,html,.full_size{
    padding: 0 !important;
    margin: 0 !important;
    min-height: 100vh !important;
    min-width: 100vw !important;
    max-height: 100vh !important;
    max-width: 100vw !important;
    overflow: hidden !important;
} 



.content_page{
  width: 100vw;
  height: 100vh;  
  padding: 0 !important;
  margin: 0 !important;

}

</style>
