<script setup lang="ts">
import HeroSection from '~/components/home/HeroSection.vue'
import SolutionsSection from '~/components/home/SolutionsSection.vue'
import ProjectsSection from '~/components/home/ProjectsSection.vue'
import AboutSection from '~/components/home/AboutSection.vue'
import ContactSection from '~/components/home/ContactSection.vue'

useHead({
  title: 'Yodi Irawan (awanbeo) | Solusi Aplikasi Web Sekolah & Daerah',
  meta: [
    {
      name: 'description',
      content: 'Layanan pembuatan website & sistem informasi terpercaya untuk sekolah, faskes, profil desa, dan UMKM oleh Yodi Irawan (awanbeo).'
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

