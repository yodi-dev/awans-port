// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },

  nitro: {
    preset: 'cloudflare-pages',
    prerender: {
      crawlLinks: true,
      routes: ['/', '/blog']
    }
  },

  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/content',
    '@vueuse/nuxt'
  ],

  tailwindcss: {
    cssPath: '~/assets/css/main.css',
    configPath: 'tailwind.config.js'
  },

  content: {
    highlight: {
      theme: 'github-dark'
    }
  },

  app: {
    head: {
      htmlAttrs: {
        lang: 'id'
      },
      title: "Yodi Irawan (awanbeo) | Web Solutions & Developer",
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content: 'Layanan pengembangan website & aplikasi web terpercaya untuk sekolah, institusi daerah, dan bisnis oleh Yodi Irawan (awanbeo).'
        },
        { property: 'og:title', content: "Yodi Irawan (awanbeo) | Web Solutions & Developer" },
        { property: 'og:description', content: 'Layanan pengembangan website & aplikasi web terpercaya untuk sekolah, institusi daerah, dan bisnis.' },
        { property: 'og:type', content: 'website' }
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/logo-light.svg' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500&display=swap' }
      ]
    }
  }
})
