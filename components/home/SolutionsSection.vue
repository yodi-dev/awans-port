<script setup lang="ts">
import { ArrowUpRight } from '@lucide/vue'

const solutions = [
  {
    index: '01',
    category: 'Sistem Pendidikan',
    title: 'Digitalisasi Sekolah & Perpustakaan',
    description:
      'Membantu institusi pendidikan (SMK/SMA/SMP, Madrasah, dan Rumah Baca) beralih dari pencatatan manual berbelit ke sistem terpadu yang memangkas waktu kerja guru dan staf.',
    scope: [
      'Sistem Informasi Perpustakaan & Pelacakan Sirkulasi Buku',
      'Katalog Buku Digital Siswa & Otomasi Denda Keterlambatan',
      'Website Profil Sekolah & Portal Informasi Siswa',
      'Sistem Pendaftaran Siswa Baru (PPDB Online)'
    ]
  },
  {
    index: '02',
    category: 'Layanan Publik',
    title: 'Sistem Informasi Institusi & Faskes Daerah',
    description:
      'Merancang sistem informasi manajemen terstruktur untuk fasilitas kesehatan pratama, klinik swasta, dan organisasi pemerintahan tingkat desa yang memerlukan transparansi data.',
    scope: [
      'SIM Klinik Pratama: Pendaftaran, Rekam Medis & Kasir',
      'Integrasi Stok Obat Farmasi & Kartu Stok Real-time',
      'Website Profil Desa & Transparansi Anggaran Warga',
      'Sistem Administrasi Persuratan & Inventarisasi Aset'
    ]
  },
  {
    index: '03',
    category: 'Bisnis & UMKM',
    title: 'Aplikasi Kasir (POS) & Manajemen Stok',
    description:
      'Solusi aplikasi web kasir berkecepatan tinggi untuk toko ritel dan wirausaha lokal. Mengontrol aliran uang kas, memantau sisa barang, dan menyajikan laporan laba harian tanpa biaya langganan software yang memberatkan.',
    scope: [
      'Point of Sale (POS) Kasir Cepat & Responsif Tablet/PC',
      'Pencatatan Stok Masuk/Keluar & Peringatan Stok Menipis',
      'Dashboard Rekap Laba/Rugi Harian & Produk Terlaris',
      'Arsitektur Standalone Tanpa Biaya Sewa Bulanan'
    ]
  }
]
</script>

<template>
  <section id="solusi" class="py-24 md:py-32 border-b border-hairline-light dark:border-hairline-dark">
    <div class="max-w-6xl mx-auto px-6">
      
      <!-- Section Header -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-16 pb-8 border-b border-hairline-light dark:border-hairline-dark">
        <div class="lg:col-span-8 space-y-3">
          <span class="font-mono text-xs uppercase tracking-caps text-stone-400 dark:text-stone-500">
            [ 01 — Ruang Lingkup Layanan ]
          </span>
          <h2 class="text-3xl sm:text-4xl font-bold text-stone-950 dark:text-stone-50 tracking-editorial">
            Solusi yang Dirancang untuk Kebutuhan Nyata
          </h2>
        </div>
        <div class="lg:col-span-4 lg:text-right">
          <p class="text-sm text-stone-500 dark:text-stone-400 leading-relaxed font-normal">
            Fokus pada sistem yang langsung memecahkan bottleneck operasional di lapangan.
          </p>
        </div>
      </div>

      <!-- Architectural List (De-card-ified) -->
      <div class="divide-y divide-hairline-light dark:divide-hairline-dark">
        <article
          v-for="item in solutions"
          :key="item.index"
          class="py-12 md:py-16 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 group"
        >
          <!-- Column 1: Index Number & Category -->
          <div class="lg:col-span-3 space-y-2">
            <span class="font-mono text-2xl font-light text-stone-300 dark:text-stone-700 block">
              {{ item.index }}
            </span>
            <span class="font-mono text-xs uppercase tracking-caps text-stone-500 dark:text-stone-400">
              {{ item.category }}
            </span>
          </div>

          <!-- Column 2: Main Title & Purpose -->
          <div class="lg:col-span-5 space-y-4">
            <h3 class="text-xl sm:text-2xl font-bold text-stone-950 dark:text-stone-50 tracking-editorial">
              {{ item.title }}
            </h3>
            <p class="text-stone-600 dark:text-stone-400 text-sm sm:text-base leading-relaxed">
              {{ item.description }}
            </p>
            <div class="pt-2">
              <a
                href="https://wa.me/6285183310065?text=Halo%20Awan,%20saya%20tertarik%20berdiskusi%20tentang%20solusi%20ini."
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex items-center gap-1.5 text-xs font-mono text-stone-400 hover:text-stone-950 dark:hover:text-stone-100 transition-colors"
              >
                <span>Konsultasi kebutuhan ini</span>
                <ArrowUpRight class="w-3.5 h-3.5 stroke-[1.5]" />
              </a>
            </div>
          </div>

          <!-- Column 3: Scope Breakdown -->
          <div class="lg:col-span-4">
            <div class="space-y-2.5 pt-1">
              <span class="font-mono text-[11px] uppercase tracking-caps text-stone-400 dark:text-stone-500 block mb-3">
                Ruang Lingkup Solusi:
              </span>
              <ul class="space-y-2 text-xs text-stone-600 dark:text-stone-300">
                <li
                  v-for="scopeItem in item.scope"
                  :key="scopeItem"
                  class="flex items-start gap-2.5"
                >
                  <span class="text-stone-300 dark:text-stone-600 font-mono select-none">―</span>
                  <span class="leading-relaxed">{{ scopeItem }}</span>
                </li>
              </ul>
            </div>
          </div>
        </article>
      </div>

    </div>
  </section>
</template>
