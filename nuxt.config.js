module.exports = {
  env: {
    baseUrl: process.env.BASE_URL || 'http://localhost:3000'
  },

  // Build configuration
  build: {},

  // Headers
  // Common headers are already provided by @nuxtjs/pwa preset
  head: {},

  // Customize the progress-bar color
  loading: {
    color: '#3B8070'
  },

  // Customize app manifest
  manifest: {
    theme_color: '#3B8070'
  },
  plugins: [
    '~/plugins/fontawesome.js',
    { src: '~/plugins/drupalRest.js', ssr: false }
  ],

  // Modules
  modules: [
    'nuxt-vuex-router-sync',
    '@nuxtjs/pwa',
    '@nuxtjs/apollo',
    '@nuxtjs/axios',
    '@nuxtjs/dotenv',
    '@nuxtjs/bulma',
    '@nuxtjs/font-awesome',
    'nuxt-fontawesome',
    'nuxt-robots-module'
  ],

  axios: {
    baseURL: process.env.drp_rest_URL,
    proxyHeaders: true,
    credentials: false,
    proxy: true
  },

  build: {
    vendor: ['axios'],
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      // Run ESLint on save
      // if (ctx.isDev && ctx.isClient) {
      //   config.module.rules.push({
      //     enforce: 'pre',
      //     test: /\.(js|vue)$/,
      //     loader: 'eslint-loader',
      //     exclude: /(node_modules)/
      //   })
      // }
    }
  },

  // pwa workbox configs
  workbox: {
    dev: true
  },

  // apollo configs
  apollo: {
    clientConfigs: {
      default: '~/plugins/drupalGraphql.js'
    },
    includeNodeModules: true
  }
}