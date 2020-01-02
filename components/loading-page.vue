<template>
  <div class="loading-page" v-if="loading">
    <p class="feetback">Cargando...</p>
  </div>
</template>

<script>
export default {
  data: () => ({
    loading: false
  }),
  methods: {
    start () {
      this.loading = true
    },
    finish () {
      this.loading = false
    }
  },
  throttle: 1000
}
</script>

<style lang="scss">
.loading-page{
  z-index: -1;
  position: fixed;
  top: 0%;
  right: 0%;
  opacity: .5;
  width: 60%;
  height: 100%;
  box-sizing: border-box;
  padding: 1.1em;
  display: flex;
  font-family: "Titillium Web",'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-size: 1.25em;

  
  @media (max-width: 960px) {
    width: 100%;
    top: 50px; 
  }

  .feetback{
    color: black;
  }
}

</style>
