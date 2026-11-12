<script setup lang="ts">
import { GraduationCap, Building2, Store, CheckCircle, ArrowRight } from '@lucide/vue'

const solutions = [
  {
    icon: GraduationCap,
    title: 'Digitalisasi Sekolah & Pendidikan',
    tag: 'Fokus Utama',
    tagColor: 'bg-blue-100 text-blue-700 dark:bg-blue-900/60 dark:text-blue-300',
    description:
      'Membantu sekolah menengah (SMK/SMA/SMP) dan madrasah beralih dari tumpukan berkas manual ke sistem digital yang praktis.',
    offerings: [
      'Sistem Informasi Perpustakaan & Katalog Buku Online',
      'Website Profil Sekolah & Pengumuman Resmi',
      'Sistem Pendaftaran Siswa Baru (PPDB Online)',
      'Aplikasi Bank Soal & Tryout Sekolah Mandiri'
    ]
  },
  {
    icon: Building2,
    title: 'Sistem Layanan & Institusi Daerah',
    tag: 'Pelayanan Publik',
    tagColor: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/60 dark:text-emerald-300',
    description:
      'Solusi software handal untuk fasilitas kesehatan pratama, kantor desa, dan organisasi lokal yang membutuhkan alur kerja transparan.',
    offerings: [
      'SIM Klinik Pratama & Rekam Medis Pasien Terpadu',
      'Website Profil Desa & Transparansi Informasi Warga',
      'Sistem Manajemen Surat & Pelayanan Administrasi Desa',
      'Aplikasi Inventaris Aset Lembaga/Instansi'
    ]
  },
  {
    icon: Store,
    title: 'Aplikasi Ritel & POS UMKM',
    tag: 'Bisnis Daerah',
    tagColor: 'bg-purple-100 text-purple-700 dark:bg-purple-900/60 dark:text-purple-300',
    description:
      'Membantu wirausaha dan toko ritel mengontrol arus uang kasir, memantau sisa stok barang, dan mencegah kebocoran finansial.',
    offerings: [
      'Point of Sale (Aplikasi Kasir Web) Cepat & Responsif',
      'Manajemen Stok Barang & Peringatan Stok Menipis',
      'Laporan Laba/Rugi Harian Otomatis',
      'Tanpa Biaya Langganan Bulanan Software yang Mahal'
    ]
  }
]
</script>

<template>
  <section id="solusi" class="py-20 bg-slate-100/60 dark:bg-slate-900/40 border-y border-slate-200/80 dark:border-slate-800/80 transition-colors">
    <div class="max-w-6xl mx-auto px-4 sm:px-6">
      
      <!-- Section Header -->
      <div class="text-center max-w-3xl mx-auto space-y-4 mb-16">
        <span class="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
          Solusi & Layanan
        </span>
        <h2 class="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          Apa yang Bisa Kita Bangun Bersama?
        </h2>
        <p class="text-slate-600 dark:text-slate-400 text-base leading-relaxed">
          Setiap instansi dan usaha memiliki tantangan operasional yang unik. Saya fokus merancang solusi berbasis web yang pas dengan alur kerja pengguna sebenarnya di lapangan.
        </p>
      </div>

      <!-- Solutions Cards -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div
          v-for="item in solutions"
          :key="item.title"
          class="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow group"
        >
          <div class="space-y-4">
            <!-- Icon & Tag -->
            <div class="flex items-center justify-between">
              <div class="w-12 h-12 rounded-xl bg-blue-50 dark:bg-blue-950/80 flex items-center justify-center text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform">
                <component :is="item.icon" class="w-6 h-6" />
              </div>
              <span :class="['text-[11px] font-semibold px-2.5 py-1 rounded-full', item.tagColor]">
                {{ item.tag }}
              </span>
            </div>

            <!-- Title & Desc -->
            <h3 class="text-xl font-bold text-slate-900 dark:text-white">
              {{ item.title }}
            </h3>
            <p class="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              {{ item.description }}
            </p>

            <!-- Offering Checklist -->
            <div class="pt-4 border-t border-slate-100 dark:border-slate-800 space-y-2.5">
              <div
                v-for="feature in item.offerings"
                :key="feature"
                class="flex items-start gap-2.5 text-xs text-slate-700 dark:text-slate-300"
              >
                <CheckCircle class="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                <span>{{ feature }}</span>
              </div>
            </div>
          </div>

          <!-- Bottom Action -->
          <div class="pt-6 mt-6 border-t border-slate-100 dark:border-slate-800">
            <a
              href="https://wa.me/6285183310065?text=Halo%20Awan,%20saya%20tertarik%20dengan%20solusi%20untuk%20kebutuhan%20saya."
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300"
            >
              <span>Konsultasi Solusi Ini</span>
              <ArrowRight class="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

