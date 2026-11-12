<script setup lang="ts">
import { ArrowUpRight } from '@lucide/vue'

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
      <div class="max-w-3xl space-y-4 mb-16">
        <span class="font-mono text-xs uppercase tracking-caps text-stone-400 dark:text-stone-500 block">
          [ 04 — Kontak & Kolaborasi ]
        </span>
        <h2 class="text-3xl sm:text-5xl font-bold text-stone-950 dark:text-stone-50 tracking-editorial leading-tight">
          Punya rencana sistem baru untuk sekolah atau lembaga Anda?
        </h2>
        <p class="text-base sm:text-lg text-stone-600 dark:text-stone-400 leading-relaxed font-normal">
          Tidak perlu khawatir jika kebutuhan Anda belum terstruktur secara teknis. Kita bisa mulai dengan memetakan alur kerja yang ingin dipermudah.
        </p>
      </div>

      <!-- Contact Directory (Architectural Rows) -->
      <div class="divide-y divide-hairline-light dark:divide-hairline-dark border-y border-hairline-light dark:border-hairline-dark">
        <a
          v-for="c in channels"
          :key="c.label"
          :href="c.href"
          target="_blank"
          rel="noopener noreferrer"
          class="py-8 grid grid-cols-1 md:grid-cols-12 gap-4 items-baseline group hover:bg-stone-50/50 dark:hover:bg-stone-900/30 transition-colors px-2 -mx-2 rounded-lg"
        >
          <!-- Channel Name -->
          <div class="md:col-span-3">
            <span class="font-mono text-xs uppercase tracking-caps text-stone-400 dark:text-stone-500">
              {{ c.label }}
            </span>
          </div>

          <!-- Direct Link & Arrow -->
          <div class="md:col-span-5 flex items-center gap-2">
            <span class="text-lg sm:text-xl font-medium text-stone-950 dark:text-stone-50 group-hover:underline underline-offset-4">
              {{ c.value }}
            </span>
            <ArrowUpRight class="w-4 h-4 stroke-[1.5] text-stone-400 group-hover:text-stone-950 dark:group-hover:text-stone-100 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
          </div>

          <!-- Description -->
          <div class="md:col-span-4">
            <p class="text-xs text-stone-500 dark:text-stone-400 leading-relaxed font-normal">
              {{ c.description }}
            </p>
          </div>
        </a>
      </div>

    </div>
  </section>
</template>
