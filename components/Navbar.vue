<script setup lang="ts">
import { ref } from 'vue'
import { useDark, useToggle } from '@vueuse/core'
import {
  Sun,
  Moon,
  Menu,
  X,
  MessageSquare,
  Sparkles,
  Layers,
  FolderGit2,
  User,
  BookOpen
} from '@lucide/vue'

const isDark = useDark()
const toggleDark = useToggle(isDark)

const isMobileMenuOpen = ref(false)

const navLinks = [
  { label: 'Solusi', href: '/#solusi', icon: Layers },
  { label: 'Karya & Proyek', href: '/#proyek', icon: FolderGit2 },
  { label: 'Tentang', href: '/#tentang', icon: User },
  { label: 'Blog', href: '/blog', icon: BookOpen },
]
</script>

<template>
  <header class="sticky top-0 z-40 w-full border-b border-slate-200/80 dark:border-slate-800/80 bg-white/85 dark:bg-slate-950/85 backdrop-blur-md transition-colors duration-200">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
      
      <!-- Logo & Availability Badge -->
      <NuxtLink to="/" class="flex items-center gap-3 group">
        <div class="w-9 h-9 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-500 flex items-center justify-center text-white font-bold text-lg shadow-sm group-hover:scale-105 transition-transform">
          A
        </div>
        <div class="flex flex-col">
          <span class="font-bold text-slate-900 dark:text-white tracking-tight leading-none group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
            awanbeo
          </span>
          <span class="text-[11px] text-slate-500 dark:text-slate-400 flex items-center gap-1.5 mt-0.5">
            <span class="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
            Siap untuk Proyek Baru
          </span>
        </div>
      </NuxtLink>

      <!-- Desktop Nav Links -->
      <nav class="hidden md:flex items-center gap-1">
        <NuxtLink
          v-for="link in navLinks"
          :key="link.label"
          :to="link.href"
          class="px-3.5 py-1.5 rounded-lg text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800/60 transition-colors"
        >
          {{ link.label }}
        </NuxtLink>
      </nav>

      <!-- Desktop Action & Theme Switcher -->
      <div class="hidden md:flex items-center gap-3">
        <!-- Theme Toggle -->
        <button
          @click="toggleDark()"
          type="button"
          aria-label="Toggle Theme"
          class="p-2 rounded-lg text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-100 hover:bg-slate-100 dark:hover:bg-slate-800/70 transition-colors"
        >
          <Sun v-if="isDark" class="w-5 h-5" />
          <Moon v-else class="w-5 h-5" />
        </button>

        <!-- CTA WhatsApp Button -->
        <a
          href="https://wa.me/6285183310065?text=Halo%20Awan,%20saya%20tertarik%20konsultasi%20mengenai%20proyek%20website/aplikasi."
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 shadow-sm shadow-blue-500/20 active:scale-95 transition-all"
        >
          <MessageSquare class="w-4 h-4" />
          <span>Konsultasi Proyek</span>
        </a>
      </div>

      <!-- Mobile Menu Toggle Button -->
      <div class="flex items-center gap-2 md:hidden">
        <button
          @click="toggleDark()"
          type="button"
          aria-label="Toggle Theme"
          class="p-2 rounded-lg text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800"
        >
          <Sun v-if="isDark" class="w-5 h-5" />
          <Moon v-else class="w-5 h-5" />
        </button>

        <button
          @click="isMobileMenuOpen = !isMobileMenuOpen"
          type="button"
          aria-label="Toggle Menu"
          class="p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
        >
          <X v-if="isMobileMenuOpen" class="w-6 h-6" />
          <Menu v-else class="w-6 h-6" />
        </button>
      </div>

    </div>

    <!-- Mobile Drawer -->
    <div
      v-if="isMobileMenuOpen"
      class="md:hidden border-t border-slate-200 dark:border-slate-800 bg-white/95 dark:bg-slate-950/95 backdrop-blur-md px-4 py-4 space-y-2"
    >
      <NuxtLink
        v-for="link in navLinks"
        :key="link.label"
        :to="link.href"
        @click="isMobileMenuOpen = false"
        class="flex items-center gap-3 px-3 py-2 rounded-lg text-base font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800"
      >
        <component :is="link.icon" class="w-5 h-5 text-slate-400" />
        <span>{{ link.label }}</span>
      </NuxtLink>

      <div class="pt-3 border-t border-slate-100 dark:border-slate-800/80">
        <a
          href="https://wa.me/6285183310065?text=Halo%20Awan,%20saya%20tertarik%20konsultasi%20mengenai%20proyek%20website/aplikasi."
          target="_blank"
          rel="noopener noreferrer"
          class="flex items-center justify-center gap-2 w-full px-4 py-2.5 rounded-xl text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700"
        >
          <MessageSquare class="w-4 h-4" />
          <span>Konsultasi via WhatsApp</span>
        </a>
      </div>
    </div>
  </header>
</template>
