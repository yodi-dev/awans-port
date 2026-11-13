<script setup lang="ts">
import { ref } from 'vue'
import { useDark, useToggle } from '@vueuse/core'
import { Sun, Moon, ArrowUpRight, Menu, X } from '@lucide/vue'

const isDark = useDark()
const toggleDark = useToggle(isDark)

const isMobileOpen = ref(false)

const navLinks = [
  { label: 'Solusi', href: '/#solusi' },
  { label: 'Karya', href: '/#proyek' },
  { label: 'Tentang', href: '/#tentang' },
  { label: 'Jurnal / Blog', href: '/blog' },
]
</script>

<template>
  <header class="sticky top-0 z-40 w-full border-b border-hairline-light dark:border-hairline-dark bg-canvas-light/95 dark:bg-canvas-dark/95 backdrop-blur-md transition-colors duration-300">
    <div class="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
      
      <!-- Wordmark -->
      <NuxtLink to="/" class="group flex items-baseline gap-2.5">
        <span class="font-bold text-lg text-navy-900 dark:text-navy-50 tracking-tight group-hover:text-navy-600 dark:group-hover:text-navy-300 transition-colors">
          Yodi Irawan
        </span>
        <span class="font-mono text-xs text-navy-600/60 dark:text-navy-400/60">
          / awanbeo
        </span>
      </NuxtLink>

      <!-- Desktop Navigation -->
      <nav class="hidden md:flex items-center gap-8 text-sm font-medium">
        <NuxtLink
          v-for="link in navLinks"
          :key="link.label"
          :to="link.href"
          class="editorial-link text-navy-700 dark:text-navy-300 hover:text-navy-950 dark:hover:text-white transition-colors py-1"
        >
          {{ link.label }}
        </NuxtLink>
      </nav>

      <!-- Desktop Right Controls -->
      <div class="hidden md:flex items-center gap-6">
        <!-- Theme Switcher with micro-interaction -->
        <button
          @click="toggleDark()"
          type="button"
          aria-label="Ganti Tema"
          class="text-navy-600 dark:text-navy-400 hover:text-navy-950 dark:hover:text-white transition-colors p-1.5 hover:rotate-12 transition-transform duration-300"
        >
          <Sun v-if="isDark" class="w-4 h-4 stroke-[1.5]" />
          <Moon v-else class="w-4 h-4 stroke-[1.5]" />
        </button>

        <span class="w-px h-4 bg-hairline-light dark:bg-hairline-dark"></span>

        <!-- Direct Contact Action -->
        <a
          href="https://wa.me/6285183310065?text=Halo%20Awan,%20saya%20tertarik%20konsultasi%20mengenai%20proyek%20website/aplikasi."
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center gap-1.5 text-xs font-mono font-medium tracking-tight text-navy-900 dark:text-navy-100 hover:text-navy-600 dark:hover:text-navy-300 transition-colors group"
        >
          <span>Mulai Diskusi</span>
          <ArrowUpRight class="w-3.5 h-3.5 stroke-[1.5] group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform duration-200" />
        </a>
      </div>

      <!-- Mobile Hamburger Button -->
      <div class="flex items-center gap-3 md:hidden">
        <button
          @click="toggleDark()"
          type="button"
          aria-label="Ganti Tema"
          class="p-2 text-navy-700 dark:text-navy-300"
        >
          <Sun v-if="isDark" class="w-4 h-4 stroke-[1.5]" />
          <Moon v-else class="w-4 h-4 stroke-[1.5]" />
        </button>
        <button
          @click="isMobileOpen = !isMobileOpen"
          type="button"
          aria-label="Toggle Navigasi"
          class="p-2 text-navy-900 dark:text-navy-100"
        >
          <X v-if="isMobileOpen" class="w-5 h-5 stroke-[1.5]" />
          <Menu v-else class="w-5 h-5 stroke-[1.5]" />
        </button>
      </div>

    </div>

    <!-- Mobile Drawer -->
    <div
      v-if="isMobileOpen"
      class="md:hidden border-b border-hairline-light dark:border-hairline-dark bg-canvas-light dark:bg-canvas-dark px-6 py-6 space-y-4 animate-fade-in"
    >
      <NuxtLink
        v-for="link in navLinks"
        :key="link.label"
        :to="link.href"
        @click="isMobileOpen = false"
        class="block text-base font-medium text-navy-800 dark:text-navy-200 hover:text-navy-950 dark:hover:text-white"
      >
        {{ link.label }}
      </NuxtLink>

      <div class="pt-4 border-t border-hairline-light dark:border-hairline-dark">
        <a
          href="https://wa.me/6285183310065?text=Halo%20Awan,%20saya%20tertarik%20konsultasi%20mengenai%20proyek%20website/aplikasi."
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center gap-1.5 text-sm font-mono font-medium text-navy-900 dark:text-navy-100"
        >
          <span>Mulai Diskusi via WhatsApp</span>
          <ArrowUpRight class="w-4 h-4 stroke-[1.5]" />
        </a>
      </div>
    </div>
  </header>
</template>
