const webpack = require('webpack');
export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: '杨怼怼&胡小胖-两个人博客',
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
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    '~assets/css/style.css',
    '~assets/font-awesome-4.7.0/css/font-awesome.min.css'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://bootstrap-vue.js.org/docs/
    'bootstrap-vue/nuxt',
  ],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    vender:['axios', 'jquery', 'bootstrap'],
    plugins:[
      new webpack.ProvidePlugin({
        $:'jquery',
        jQuery:'jquery',
        'window.jQuery':'jquery'
      })
    ],
    extend (config, ctx) {
    }
  }
}
