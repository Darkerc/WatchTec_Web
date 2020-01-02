const express = require('express')
const consola = require('consola')
const MongoDbConfig = require(__dirname + '/MongoDbConfig.js')
const morgan = require('morgan')
const cors = require('cors');
const { routes , InitialDir } = require(__dirname + '/Api/index.js');
const { Nuxt, Builder } = require('nuxt')
const app = express()

// Import and Set Nuxt.js options
const config = require('../nuxt.config.js')
config.dev = process.env.NODE_ENV !== 'production'
const nuxt = new Nuxt(config)

function loadRoutes(){
  routes.forEach( route =>{
    app.use(InitialDir,route)
  })
} 
   
app.use(morgan('tiny'))
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

async function start () {
  // Init Nuxt.js
  
  // const { host, port } = nuxt.options.server
  const host="192.168.49.195";
  const port="80";

  // Build only in dev mode
  if (config.dev) {
    const builder = new Builder(nuxt)
    await builder.build()
  } else {
    await nuxt.ready()
  }

  //Loading routes from Routes folder
  loadRoutes()

  //Connecting with mongoDb server
  MongoDbConfig()

  // Give nuxt middleware to express
  app.use(nuxt.render)

  // Listen the server
  app.listen(port, host)
  consola.ready({
    message: `Server listening on http://${host}:${port}`,
    badge: true
  })
}
start()

