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
  ogDescription: 'Solo software engineer berlatar belakang Pendidikan TIK. Membangun sistem web fungsional, mandiri, dan ramah pengguna awam untuk institusi pendidikan, daerah, dan bisnis lokal.'
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

