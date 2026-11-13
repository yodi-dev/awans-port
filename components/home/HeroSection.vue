<script setup lang="ts">
import { ArrowDownRight, ArrowUpRight } from '@lucide/vue'
</script>

<template>
  <section
    class="pt-16 pb-24 md:pt-24 md:pb-32 border-b border-hairline-light dark:border-hairline-dark overflow-hidden">
    <div class="max-w-6xl mx-auto px-6">

      <!-- Top Meta Eyebrow -->
      <div
        class="flex items-center justify-between text-xs font-mono uppercase tracking-caps text-navy-600/70 dark:text-navy-400 mb-10 pb-4 border-b border-hairline-light dark:border-hairline-dark animate-fade-in">
        <span class="flex items-center gap-2">
          <span class="w-1.5 h-1.5 rounded-full bg-navy-900 dark:bg-navy-400"></span>
          Web Engineering & IT Education
        </span>
        <span>Sarolangun, Jambi</span>
      </div>

      <!-- Main Grid Layout -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

        <!-- Left Statement (Typographic Focus) -->
        <div class="lg:col-span-8 space-y-8">
          <h1
            class="text-3xl sm:text-5xl lg:text-[3.65rem] font-bold text-navy-900 dark:text-navy-50 tracking-editorial leading-[1.12] animate-fade-up">
            Membangun sistem web yang fungsional dan ramah pengguna awam.
          </h1>

          <p
            class="text-lg sm:text-xl text-navy-800/80 dark:text-navy-200/80 leading-relaxed max-w-2xl font-normal animate-fade-up [animation-delay:150ms]">
            Saya <strong>Yodi Irawan (Awan)</strong>, software engineer berlatar belakang <strong>Pendidikan TIK</strong>. Membantu sekolah, institusi daerah, dan UMKM memiliki sistem web yang mandiri, rapi, dan mudah digunakan staf lapangan.
          </p>

          <!-- Action Buttons (Tactile & Refined) -->
          <div class="pt-4 flex flex-wrap items-center gap-5 text-sm font-mono animate-fade-up [animation-delay:300ms]">
            <a href="#proyek"
              class="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-navy-900 text-white hover:bg-navy-800 dark:bg-navy-100 dark:text-navy-950 dark:hover:bg-white active:scale-[0.98] transition-all shadow-sm group">
              <span>Lihat Karya Terpilih</span>
              <ArrowDownRight
                class="w-4 h-4 stroke-[1.5] group-hover:translate-x-0.5 group-hover:translate-y-0.5 transition-transform" />
            </a>

            <a href="https://wa.me/6285183310065?text=Halo%20Awan,%20saya%20tertarik%20berkonsultasi%20mengenai%20pembuatan%20sistem%20web."
              target="_blank" rel="noopener noreferrer"
              class="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-hairline-light dark:border-hairline-dark bg-surface-light dark:bg-surface-dark text-navy-800 dark:text-navy-200 hover:text-navy-950 dark:hover:text-white hover:border-navy-400 dark:hover:border-navy-600 active:scale-[0.98] transition-all group">
              <span>Konsultasi Alur Kerja</span>
              <ArrowUpRight
                class="w-4 h-4 stroke-[1.5] group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
            </a>
          </div>
        </div>

        <!-- Right Side: Editorial Portrait & Technical Specs -->
        <div class="lg:col-span-4 space-y-6 animate-fade-up [animation-delay:200ms]">
          <div
            class="relative overflow-hidden rounded-2xl border border-hairline-light dark:border-hairline-dark bg-navy-100/50 dark:bg-navy-950/60 group shadow-sm">
            <img
              src="/images/profil.png"
              alt="Foto Profil Yodi Irawan (Awan) - Solo Software Engineer"
              width="400"
              height="500"
              fetchpriority="high"
              class="w-full aspect-[4/5] object-cover filter grayscale contrast-[1.05] group-hover:grayscale-0 group-hover:scale-[1.02] transition-all duration-700 ease-out"
            />
          </div>

          <!-- Metadata List -->
          <div class="space-y-2.5 pt-2 text-xs font-mono text-navy-600/70 dark:text-navy-400">
            <div class="flex justify-between py-1.5 border-b border-hairline-light dark:border-hairline-dark">
              <span class="text-navy-500/70 dark:text-navy-500">Peran</span>
              <span class="text-navy-900 dark:text-navy-100 font-medium">Solo Software Engineer</span>
            </div>
            <div class="flex justify-between py-1.5 border-b border-hairline-light dark:border-hairline-dark">
              <span class="text-navy-500/70 dark:text-navy-500">Pendekatan</span>
              <span class="text-navy-900 dark:text-navy-100 font-mono">Pendidikan TIK · Human-Centered</span>
            </div>
            <div class="flex justify-between py-1.5 border-b border-hairline-light dark:border-hairline-dark">
              <span class="text-navy-500/70 dark:text-navy-500">Pondasi Stack</span>
              <span class="text-navy-900 dark:text-navy-100 font-mono">Laravel · Vue / Nuxt · MySQL</span>
            </div>
            <div class="flex justify-between py-1.5">
              <span class="text-navy-500/70 dark:text-navy-500">Ketersediaan</span>
              <span class="text-navy-900 dark:text-navy-100 font-medium flex items-center gap-1.5">
                <span class="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                Terbuka untuk Kolaborasi Proyek
              </span>
            </div>
          </div>
        </div>

      </div>

    </div>
  </section>
</template>
