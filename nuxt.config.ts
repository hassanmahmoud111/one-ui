// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ['~/assets/css/main.css'],
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'],
  experimental: {
    appManifest: false
  },
  vite: {
    server: {
      hmr: {
        overlay: false
      }
    }
  },
  app: {
    head: {
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Arabic:wght@300;400;500;600;700&family=Readex+Pro:wght@300;400;500;600;700&family=Almarai:wght@400;700;800&family=Cairo:wght@400;600;700;800;900&display=swap'
        }
      ]
    }
  },
  nitro: {
    prerender: {
      failOnError: false
    }
  }
  
})
