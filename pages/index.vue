<script setup lang="ts">
import HeroSection from '~/components/home/HeroSection.vue'
import SolutionsSection from '~/components/home/SolutionsSection.vue'
import ProjectsSection from '~/components/home/ProjectsSection.vue'
import AboutSection from '~/components/home/AboutSection.vue'
import ContactSection from '~/components/home/ContactSection.vue'

useSeoMeta({
  title: 'Yodi Irawan (Awan) | Rekayasa Sistem Web Sekolah, Daerah & UMKM',
  description: 'Solo software engineer berlatar belakang Pendidikan TIK. Membangun sistem web fungsional, mandiri, dan ramah pengguna awam untuk institusi pendidikan, daerah, dan bisnis lokal.',
  ogTitle: 'Yodi Irawan (Awan) | Rekayasa Sistem Web Sekolah, Daerah & UMKM',
  ogDescription: 'Solo software engineer berlatar belakang Pendidikan TIK. Membangun sistem web fungsional, mandiri, dan ramah pengguna awam untuk institusi pendidikan, daerah, dan bisnis lokal.',
  ogUrl: 'https://awanbeo.my.id/',
  ogImage: 'https://awanbeo.my.id/og-image.png',
  twitterCard: 'summary_large_image',
  twitterImage: 'https://awanbeo.my.id/og-image.png'
})

useHead({
  link: [
    { rel: 'canonical', href: 'https://awanbeo.my.id/' }
  ],
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        '@context': 'https://schema.org',
        '@graph': [
          {
            '@type': 'WebSite',
            '@id': 'https://awanbeo.my.id/#website',
            'url': 'https://awanbeo.my.id/',
            'name': 'Yodi Irawan (Awan)',
            'description': 'Solo software engineer berlatar belakang Pendidikan TIK. Membangun sistem web fungsional, mandiri, dan ramah pengguna awam.',
            'inLanguage': 'id-ID'
          },
          {
            '@type': 'Person',
            '@id': 'https://awanbeo.my.id/#person',
            'name': 'Yodi Irawan',
            'alternateName': 'Awan',
            'jobTitle': 'Solo Software Engineer',
            'url': 'https://awanbeo.my.id/',
            'image': 'https://awanbeo.my.id/images/profil.png',
            'knowsAbout': [
              'Web Engineering',
              'Laravel',
              'Vue.js',
              'Nuxt 3',
              'CodeIgniter 4',
              'Pendidikan TIK',
              'Sistem Informasi Sekolah',
              'Aplikasi Kasir POS'
            ],
            'sameAs': [
              'https://github.com/yodi-dev',
              'https://www.linkedin.com/in/yodi-irawan/'
            ]
          }
        ]
      })
    }
  ]
})
</script>

<template>
  <div>
    <HeroSection />
    <SolutionsSection />
    <ProjectsSection />
    <AboutSection />
    <ContactSection />
  </div>
</template>

