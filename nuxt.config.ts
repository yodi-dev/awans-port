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
      title: "Yodi Irawan (Awan) | Rekayasa Web & Solusi Digital Mandiri",
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content: 'Solo software engineer berlatar belakang Pendidikan TIK. Membangun sistem web terpadu, mandiri, dan ramah pengguna awam untuk institusi pendidikan, daerah, dan bisnis lokal.'
        },
        { name: 'robots', content: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' },
        { property: 'og:site_name', content: 'Yodi Irawan (Awan)' },
        { property: 'og:locale', content: 'id_ID' },
        { property: 'og:title', content: "Yodi Irawan (Awan) | Rekayasa Web & Solusi Digital Mandiri" },
        { property: 'og:description', content: 'Membangun sistem web terpadu, mandiri, dan ramah pengguna awam untuk institusi pendidikan, daerah, dan bisnis lokal.' },
        { property: 'og:type', content: 'website' },
        { property: 'og:image', content: 'https://awanbeo.my.id/og-image.png' },
        { property: 'og:image:width', content: '1200' },
        { property: 'og:image:height', content: '630' },
        { property: 'og:image:type', content: 'image/png' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:creator', content: '@awanbeo' },
        { name: 'twitter:title', content: "Yodi Irawan (Awan) | Rekayasa Web & Solusi Digital Mandiri" },
        { name: 'twitter:description', content: 'Solo software engineer berlatar belakang Pendidikan TIK. Membangun sistem web terpadu, mandiri, dan ramah pengguna awam.' },
        { name: 'twitter:image', content: 'https://awanbeo.my.id/og-image.png' }
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/logo-light.svg' },
        { rel: 'apple-touch-icon', href: '/logo-light.svg' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Newsreader:ital,opsz,wght@0,6..72,400;0,6..72,500;0,6..72,600;1,6..72,400;1,6..72,500&family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500&display=swap' }
      ]
    }
  }
})
