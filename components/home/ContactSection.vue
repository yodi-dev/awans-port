<script setup lang="ts">
import { ArrowUpRight } from '@lucide/vue'
import FadeIn from '~/components/common/FadeIn.vue'

const channels = [
  {
    label: 'WhatsApp Langsung',
    value: '+62 851-8331-0065',
    href: 'https://wa.me/6285183310065?text=Halo%20Awan,%20saya%20tertarik%20berdiskusi%20tentang%20proyek%20aplikasi%20web.',
    description: 'Respon cepat untuk pertanyaan awal, jadwal diskusi, atau konsultasi singkat.'
  },
  {
    label: 'Surat Elektronik',
    value: 'irawanyodi10@gmail.com',
    href: 'mailto:irawanyodi10@gmail.com?subject=Inquiry%20Proyek%20Website',
    description: 'Untuk pengiriman kerangka acuan kerja (TOR), proposal resmi, atau dokumen proyek.'
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/yodi-irawan',
    href: 'https://www.linkedin.com/in/yodi-irawan/',
    description: 'Jejaring profesional dan rekam jejak kolaborasi.'
  }
]
</script>

<template>
  <section id="kontak" class="py-24 md:py-32">
    <div class="max-w-6xl mx-auto px-6">
      
      <!-- Section Header -->
      <FadeIn>
        <div class="max-w-3xl space-y-4 mb-16">
          <span class="font-mono text-xs uppercase tracking-caps text-navy-500/80 dark:text-navy-400 block font-semibold">
            [ 04 — Kontak & Kolaborasi ]
          </span>
          <h2 class="text-3xl sm:text-5xl font-bold text-navy-900 dark:text-navy-50 tracking-editorial leading-tight">
            Punya rencana sistem baru untuk sekolah atau lembaga Anda?
          </h2>
          <p class="text-base sm:text-lg text-navy-700/80 dark:text-navy-300/80 leading-relaxed font-normal">
            Tidak perlu khawatir jika kebutuhan Anda belum terstruktur secara teknis. Kita bisa mulai dengan memetakan alur kerja yang ingin dipermudah.
          </p>
        </div>
      </FadeIn>

      <!-- Contact Directory (Architectural Rows with smooth hover) -->
      <FadeIn :delay="150">
        <div class="divide-y divide-hairline-light dark:divide-hairline-dark border-y border-hairline-light dark:border-hairline-dark">
          <a
            v-for="c in channels"
            :key="c.label"
            :href="c.href"
            target="_blank"
            rel="noopener noreferrer"
            class="py-8 grid grid-cols-1 md:grid-cols-12 gap-4 items-baseline group hover:bg-navy-50/40 dark:hover:bg-navy-950/30 transition-all duration-300 px-4 -mx-4 rounded-xl"
          >
            <!-- Channel Name -->
            <div class="md:col-span-3">
              <span class="font-mono text-xs uppercase tracking-caps text-navy-500/80 dark:text-navy-400 font-semibold">
                {{ c.label }}
              </span>
            </div>

            <!-- Direct Link & Arrow -->
            <div class="md:col-span-5 flex items-center gap-2">
              <span class="text-lg sm:text-xl font-bold text-navy-900 dark:text-navy-50 group-hover:text-navy-700 dark:group-hover:text-navy-200 transition-colors underline-offset-4 group-hover:underline">
                {{ c.value }}
              </span>
              <ArrowUpRight class="w-4 h-4 stroke-[1.5] text-navy-400 group-hover:text-navy-950 dark:group-hover:text-white group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform duration-200" />
            </div>

            <!-- Description -->
            <div class="md:col-span-4">
              <p class="text-xs text-navy-600/80 dark:text-navy-400 leading-relaxed font-normal">
                {{ c.description }}
              </p>
            </div>
          </a>
        </div>
      </FadeIn>

    </div>
  </section>
</template>
