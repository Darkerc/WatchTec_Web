<template>
<div class="layout_index full_size">
  <navigator class="nav_navigator">
    <template>
      <aside-nav/>
    </template>
  </navigator>
  <aside-nav class="aside_navigation"/>
  <perfect-scrollbar  class="content_page" :options="{ swipeEasing: true , suppressScrollX: true}">
    <nuxt />
  </perfect-scrollbar>
</div>
</template>

<script>
import AsideNav from '~/components/AsideNav.vue'
import Navigator from '~/components/Navigator.vue'
import Vue from 'vue'
import PerfectScrollbar from 'vue2-perfect-scrollbar'
import 'vue2-perfect-scrollbar/dist/vue2-perfect-scrollbar.css'
Vue.use(PerfectScrollbar)

export default {
  middleware:'checkAuth',
  components:{
    AsideNav,
    Navigator
  }
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

.layout_index{
  display: flex;

  @media (max-width: 960px){
      flex-direction: column;
    }

  .aside_navigation{
    width: 40%;  
    height: 100vh;

    @media (max-width: 960px){
        display: none;
    }

  }
  
  .content_page{
    width: 60%;
    height: 100vh;  
    box-sizing: border-box;
    padding: 20px !important;  

    @media (max-width: 960px){
        width: 100%;
    }
  }

  .nav_navigator{
    display: none;

    @media (max-width: 960px){
        display: flex;
    }
  }
}
</style>
