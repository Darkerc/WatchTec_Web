module.exports = {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    titleTemplate: "WatchTec" + ' - %s' ,
    title: 'WatchTec',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: '~/components/loading-page.vue',
  /*
  ** Global CSS
  */
  css: [
  ],
  styleResources: {
      scss: [
          '~/assets/scss/index.scss'
      ]
  },
  webfontloader: {
    custom: {
      families: [
          'Raleway',
          'Courier Prime',
          'Fira Sans'
      ],
      urls: [
          'https://fonts.googleapis.com/css?family=Raleway&display=swap',
          'https://fonts.googleapis.com/css?family=Courier+Prime&display=swap',
          'https://fonts.googleapis.com/css?family=Fira+Sans&display=swap'
      ]
  }
  },
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    { src:'~/plugins/FormValidator.js',  ssr:false , mode:'client'}
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    '@nuxtjs/vuetify'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxtjs/style-resources',
    'nuxt-webfontloader',
    '@nuxtjs/toast'
  ],

  toast: {
    position: 'top-right',
    register: [ // Register custom toasts
      {
        name: 'successMessage',
        message: 'Operacion realizada con exito!',
        options: {
          type: 'success',
          theme:'outline',
          duration: 5000,
          iconPack:'mdi',
          Icon:'mdi-check-circle-outline'
        }
      },
      {
        name: 'errorMessage',
        message: 'A ocurrido un problema',
        options: {
          type: 'error',
          theme:'outline',
          duration: 5000,
          iconPack:'mdi',
          Icon:'mdi-check-circle-outline'
        }
      }
    ]
  },

  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
  },
  /*
  ** Build configuration
  */
  build: {
    transpile: [
      "vee-validate/dist/rules"
    ],
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
