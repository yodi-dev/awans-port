<script setup lang="ts">
import { ArrowDown, MessageSquare, GraduationCap, Building2, Store, CheckCircle2 } from '@lucide/vue'

const highlights = [
  { icon: GraduationCap, text: 'Latar Belakang Pendidikan TIK' },
  { icon: Building2, text: 'Fokus Solusi Sekolah & Daerah' },
  { icon: Store, text: 'Aplikasi Bisnis & Kasir UMKM' },
]
</script>

<template>
  <section class="relative overflow-hidden py-16 sm:py-24 lg:py-28">
    <!-- Subtle Background Glow -->
    <div class="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 sm:w-[600px] h-96 sm:h-[600px] bg-blue-500/10 dark:bg-blue-600/15 rounded-full blur-3xl pointer-events-none -z-10"></div>

    <div class="max-w-6xl mx-auto px-4 sm:px-6">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        
        <!-- Text & Pitch -->
        <div class="lg:col-span-7 space-y-6 text-center lg:text-left">
          
          <!-- Pill Badge -->
          <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-900/60 text-blue-700 dark:text-blue-300 text-xs font-semibold">
            <span class="w-2 h-2 rounded-full bg-blue-500 animate-ping"></span>
            <span>Spesialis Aplikasi Web Sekolah & Institusi Daerah</span>
          </div>

          <!-- Main Heading -->
          <h1 class="text-3xl sm:text-5xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.15]">
            Membangun Solusi Web Nyata yang 
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">
              Praktis & Mudah Digunakan
            </span>
          </h1>

          <!-- Body Description -->
          <p class="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl mx-auto lg:mx-0">
            Halo! Saya <strong>Yodi Irawan (awanbeo)</strong>. Menggabungkan latar belakang <strong>Pendidikan TIK</strong> dan keahlian <strong>Full Stack Web Development</strong> untuk merancang sistem digital yang memecahkan masalah riil di lapangan—bukan sekadar baris kode.
          </p>

          <!-- Action Buttons -->
          <div class="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 pt-2">
            <a
              href="#proyek"
              class="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-white bg-blue-600 hover:bg-blue-700 shadow-md shadow-blue-500/25 active:scale-95 transition-all text-sm"
            >
              <span>Eksplorasi Karya & Proyek</span>
              <ArrowDown class="w-4 h-4" />
            </a>

            <a
              href="https://wa.me/6285183310065?text=Halo%20Awan,%20saya%20ingin%20berdiskusi%20tentang%20rencana%20pembuatan%20website/aplikasi."
              target="_blank"
              rel="noopener noreferrer"
              class="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/80 active:scale-95 transition-all text-sm"
            >
              <MessageSquare class="w-4 h-4 text-emerald-500" />
              <span>Konsultasi Kebutuhan</span>
            </a>
          </div>

          <!-- Trust / Key Features Badges -->
          <div class="pt-4 border-t border-slate-200/80 dark:border-slate-800/80 grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div
              v-for="item in highlights"
              :key="item.text"
              class="flex items-center gap-2 text-xs font-medium text-slate-600 dark:text-slate-400 justify-center lg:justify-start"
            >
              <CheckCircle2 class="w-4 h-4 text-emerald-500 shrink-0" />
              <span>{{ item.text }}</span>
            </div>
          </div>

        </div>

        <!-- Profile Card & Visual -->
        <div class="lg:col-span-5 flex justify-center">
          <div class="relative w-72 sm:w-80">
            
            <!-- Card Decoration Ring -->
            <div class="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-blue-600/30 to-indigo-500/20 blur-xl"></div>
            
            <div class="relative rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xl p-3">
              <img
                src="/images/profil.jpeg"
                alt="Yodi Irawan - awanbeo"
                class="w-full h-80 object-cover rounded-2xl"
              />
              <div class="p-4 text-center">
                <h3 class="font-bold text-slate-900 dark:text-white text-base">Yodi Irawan</h3>
                <p class="text-xs text-slate-500 dark:text-slate-400">Web Developer & IT Education Specialist</p>
                <div class="mt-3 flex items-center justify-center gap-2">
                  <span class="text-[11px] px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 font-mono">
                    Laravel
                  </span>
                  <span class="text-[11px] px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 font-mono">
                    Vue / Nuxt
                  </span>
                  <span class="text-[11px] px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 font-mono">
                    Tailwind
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  </section>
</template>

