<script setup lang="ts">
import { ArrowUpRight } from '@lucide/vue'

const currentYear = new Date().getFullYear()

const socialLinks = [
  { label: 'WhatsApp', href: 'https://wa.me/6285183310065' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/yodi-irawan/' },
  { label: 'GitHub', href: 'https://github.com/yodi-dev' },
  { label: 'Email', href: 'mailto:irawanyodi10@gmail.com' }
]
</script>

<template>
  <footer class="border-t border-hairline-light dark:border-hairline-dark py-16 bg-canvas-light dark:bg-canvas-dark text-xs font-mono transition-colors">
    <div class="max-w-6xl mx-auto px-6 space-y-12">
      
      <!-- Top Row -->
      <div class="flex flex-col md:flex-row md:items-baseline justify-between gap-8">
        <div class="space-y-2 max-w-md">
          <div class="text-stone-950 dark:text-stone-50 font-sans font-semibold text-sm">
            Yodi Irawan (awanbeo)
          </div>
          <p class="text-stone-500 dark:text-stone-400 font-sans leading-relaxed text-xs">
            Layanan rekayasa web dan konsultasi digitalisasi untuk sekolah, institusi daerah, dan bisnis lokal di Indonesia.
          </p>
        </div>

        <!-- Social Text Links -->
        <div class="flex flex-wrap items-center gap-6">
          <a
            v-for="s in socialLinks"
            :key="s.label"
            :href="s.href"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center gap-1 text-stone-600 dark:text-stone-400 hover:text-stone-950 dark:hover:text-stone-100 transition-colors"
          >
            <span>{{ s.label }}</span>
            <ArrowUpRight class="w-3 h-3 stroke-[1.5]" />
          </a>
        </div>
      </div>

      <!-- Bottom Colophon -->
      <div class="pt-8 border-t border-hairline-light dark:border-hairline-dark flex flex-col sm:flex-row items-baseline justify-between gap-4 text-stone-400 dark:text-stone-600 text-[11px]">
        <div>
          © {{ currentYear }} awanbeo. Sarolangun, Jambi — Indonesia.
        </div>
        <div>
          Dibangun dengan Nuxt 3 & Tailwind CSS · Di-hosting di Cloudflare Pages.
        </div>
      </div>

    </div>
  </footer>
</template>
