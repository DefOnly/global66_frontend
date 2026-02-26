export default {
  ssr: true,
  target: 'server',

  head: {
    htmlAttrs: {
      lang: 'es'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  css: [
    '@/assets/css/main.css'
  ],

  components: true,

  buildModules: [
    '@nuxtjs/tailwindcss'
  ],

  modules: [
    '@nuxtjs/axios'
  ],

  axios: {
    baseURL: process.env.API_BASE_URL || 'http://localhost:3001'
  },

  tailwindcss: {
    configPath: 'tailwind.config.js',
    cssPath: '@/assets/css/main.css'
  },

  server: {
    port: 3000,
    host: '0.0.0.0'
  },

  publicRuntimeConfig: {
    apiBaseUrl: process.env.API_BASE_URL || 'http://localhost:3001'
  }
}
