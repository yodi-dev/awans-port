<script setup lang="ts">
import { ArrowDownRight, ArrowUpRight } from '@lucide/vue'
</script>

<template>
  <section class="pt-16 pb-24 md:pt-24 md:pb-32 border-b border-hairline-light dark:border-hairline-dark">
    <div class="max-w-6xl mx-auto px-6">
      
      <!-- Top Meta Eyebrow -->
      <div class="flex items-center justify-between text-xs font-mono uppercase tracking-caps text-stone-400 dark:text-stone-500 mb-8 pb-4 border-b border-hairline-light dark:border-hairline-dark">
        <span>Web Engineering & Education</span>
        <span>Sarolangun, Jambi</span>
      </div>

      <!-- Main Grid Layout -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        
        <!-- Left Statement (Typographic Focus) -->
        <div class="lg:col-span-8 space-y-8">
          <h1 class="text-3xl sm:text-5xl lg:text-[3.5rem] font-bold text-stone-950 dark:text-stone-50 tracking-editorial leading-[1.12]">
            Membangun sistem web yang fungsional, tahan uji, dan mudah dipahami manusia.
          </h1>

          <p class="text-lg sm:text-xl text-stone-600 dark:text-stone-400 leading-relaxed max-w-2xl font-normal">
            Saya <strong>Yodi Irawan</strong>. Menggabungkan perspektif <strong>Pendidikan TIK</strong> dengan keahlian <strong>Full Stack Web Development</strong> untuk mendigitalkan operasional sekolah, fasilitas kesehatan daerah, dan bisnis lokal tanpa kerumitan yang tak perlu.
          </p>

          <!-- Action Links (Restrained & Direct) -->
          <div class="pt-4 flex flex-wrap items-center gap-6 text-sm font-mono">
            <a
              href="#proyek"
              class="inline-flex items-center gap-2 text-stone-950 dark:text-stone-100 hover:text-stone-600 dark:hover:text-stone-400 transition-colors group"
            >
              <span>Eksplorasi Karya Terpilih</span>
              <ArrowDownRight class="w-4 h-4 stroke-[1.5] group-hover:translate-x-0.5 group-hover:translate-y-0.5 transition-transform" />
            </a>

            <span class="w-px h-3.5 bg-hairline-light dark:bg-hairline-dark"></span>

            <a
              href="https://wa.me/6285183310065?text=Halo%20Awan,%20saya%20ingin%20berdiskusi%20tentang%20rencana%20pembuatan%20website/aplikasi."
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center gap-2 text-stone-500 hover:text-stone-950 dark:hover:text-stone-200 transition-colors group"
            >
              <span>Mulai Percakapan</span>
              <ArrowUpRight class="w-4 h-4 stroke-[1.5] group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
            </a>
          </div>
        </div>

        <!-- Right Side: Editorial Portrait & Technical Specs -->
        <div class="lg:col-span-4 space-y-6">
          <div class="relative overflow-hidden rounded-2xl border border-hairline-light dark:border-hairline-dark bg-stone-100 dark:bg-stone-900 group">
            <img
              src="/images/profil.jpeg"
              alt="Yodi Irawan"
              class="w-full aspect-[4/5] object-cover filter grayscale contrast-[1.05] group-hover:grayscale-0 transition-all duration-700 ease-out"
            />
          </div>

          <!-- Metadata List -->
          <div class="space-y-2.5 pt-2 text-xs font-mono text-stone-500 dark:text-stone-400">
            <div class="flex justify-between py-1.5 border-b border-hairline-light dark:border-hairline-dark">
              <span class="text-stone-400 dark:text-stone-500">Peran</span>
              <span class="text-stone-800 dark:text-stone-200">Full Stack Developer</span>
            </div>
            <div class="flex justify-between py-1.5 border-b border-hairline-light dark:border-hairline-dark">
              <span class="text-stone-400 dark:text-stone-500">Pondasi Stack</span>
              <span class="text-stone-800 dark:text-stone-200 font-mono">Laravel · Vue · Nuxt</span>
            </div>
            <div class="flex justify-between py-1.5">
              <span class="text-stone-400 dark:text-stone-500">Ketersediaan</span>
              <span class="text-stone-800 dark:text-stone-200">Terbuka untuk Proyek</span>
            </div>
          </div>
        </div>

      </div>

    </div>
  </section>
</template>
