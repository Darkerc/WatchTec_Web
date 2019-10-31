<template>
  <div class="loading-page" v-if="loading">
    <b-spinner class="spinner" variant="light" label="Cargando..."></b-spinner>
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
  z-index: 1000;
  position: absolute;
  background: #277c3b;//linear-gradient(#329632,#32c832,#329632);
  bottom: 2%;
  right: 0%;
  border-radius: 10px 0 0 10px;
  box-sizing: border-box;
  padding: 1.1em;
  display: flex;
  border: #fff solid 3px;
  border-right: none;
  font-family: "Titillium Web",'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-size: 1.25em;

  .spinner{
    margin: 0 1.1em 0 0;
  }

  .feetback{
    color: white;
  }
}
</style>
