<script setup lang="ts">
import { MessageSquare, Mail, Heart, MapPin, ArrowUpRight } from '@lucide/vue'
import IconGithub from '~/components/icons/IconGithub.vue'
import IconLinkedin from '~/components/icons/IconLinkedin.vue'

const currentYear = new Date().getFullYear()

const socialLinks = [
  {
    label: 'WhatsApp',
    href: 'https://wa.me/6285183310065',
    icon: MessageSquare,
    color: 'hover:text-emerald-500'
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/yodi-irawan/',
    icon: IconLinkedin,
    color: 'hover:text-blue-500'
  },
  {
    label: 'GitHub',
    href: 'https://github.com/yodi-dev',
    icon: IconGithub,
    color: 'hover:text-slate-900 dark:hover:text-white'
  },
  {
    label: 'Email',
    href: 'mailto:irawanyodi10@gmail.com',
    icon: Mail,
    color: 'hover:text-red-500'
  }
]
</script>

<template>
  <footer class="border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 transition-colors duration-200">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 py-12 md:py-16">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
        
        <!-- Brand Info -->
        <div class="md:col-span-2 space-y-4">
          <div class="flex items-center gap-2">
            <span class="font-bold text-xl text-slate-900 dark:text-white tracking-tight">
              Yodi Irawan (awanbeo)
            </span>
          </div>
          <p class="text-slate-600 dark:text-slate-400 text-sm leading-relaxed max-w-md">
            Full Stack Web Developer & Lulusan Pendidikan TIK. Berdedikasi membantu digitalisasi sistem sekolah, faskes/institusi daerah, dan automasi bisnis dengan aplikasi web yang andal dan mudah digunakan.
          </p>
          <div class="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
            <MapPin class="w-4 h-4 text-slate-400" />
            <span>Sarolangun, Jambi — Melayani proyek seluruh Indonesia</span>
          </div>
        </div>

        <!-- Quick Links -->
        <div class="space-y-3">
          <h4 class="text-sm font-semibold text-slate-900 dark:text-white uppercase tracking-wider">
            Navigasi
          </h4>
          <ul class="space-y-2 text-sm">
            <li>
              <NuxtLink to="/#solusi" class="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                Layanan & Solusi
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/#proyek" class="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                Showcase Proyek
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/#tentang" class="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                Tentang Saya
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/blog" class="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                Artikel & Blog
              </NuxtLink>
            </li>
          </ul>
        </div>

        <!-- Social & Contact -->
        <div class="space-y-3">
          <h4 class="text-sm font-semibold text-slate-900 dark:text-white uppercase tracking-wider">
            Terhubung
          </h4>
          <ul class="space-y-2.5">
            <li v-for="social in socialLinks" :key="social.label">
              <a
                :href="social.href"
                target="_blank"
                rel="noopener noreferrer"
                :class="['group flex items-center justify-between text-sm text-slate-600 dark:text-slate-400 transition-colors', social.color]"
              >
                <div class="flex items-center gap-2.5">
                  <component :is="social.icon" class="w-4 h-4" />
                  <span>{{ social.label }}</span>
                </div>
                <ArrowUpRight class="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
            </li>
          </ul>
        </div>

      </div>

      <!-- Bottom Bar -->
      <div class="mt-12 pt-8 border-t border-slate-100 dark:border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 dark:text-slate-400">
        <p>© {{ currentYear }} awanbeo. Dirancang & dibangun dengan Nuxt 3 & Tailwind CSS.</p>
        <p class="flex items-center gap-1">
          Dibuat dengan <Heart class="w-3.5 h-3.5 text-rose-500 fill-rose-500" /> di Sarolangun, Jambi
        </p>
      </div>
    </div>
  </footer>
</template>
