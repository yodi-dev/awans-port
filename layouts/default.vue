<script setup lang="ts">
import Navbar from '~/components/Navbar.vue'
import Footer from '~/components/Footer.vue'
</script>

<template>
  <div class="flex flex-col min-h-screen">
    <!-- Accessible Skip to Main Content Link (WCAG 2.2 AA) -->
    <a
      href="#main-content"
      class="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-navy-900 focus:text-white dark:focus:bg-linen-100 dark:focus:text-navy-950 focus:font-sans focus:font-semibold focus:text-xs focus:rounded-md focus:shadow-xl focus:outline-none focus:ring-2 focus:ring-navy-600 dark:focus:ring-linen-300"
    >
      Lewati ke konten utama
    </a>

    <Navbar />
    <main id="main-content" class="flex-grow focus:outline-none" tabindex="-1">
      <slot />
    </main>
    <Footer />
  </div>
</template>

