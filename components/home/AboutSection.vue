<script setup lang="ts">
const stackCategories = [
  {
    name: 'Backend & Sistem',
    skills: ['Laravel', 'PHP', 'MySQL', 'REST API', 'Eloquent ORM', 'Database Architecture']
  },
  {
    name: 'Frontend & Reaktivitas',
    skills: ['Vue 3', 'Nuxt 3', 'Tailwind CSS', 'Livewire', 'TypeScript / JS']
  },
  {
    name: 'Infrastruktur & Delivery',
    skills: ['Cloudflare Pages', 'Git & GitHub', 'Linux VPS / Server', 'Postman']
  }
]
</script>

<template>
  <section id="tentang" class="py-24 md:py-32 border-b border-hairline-light dark:border-hairline-dark">
    <div class="max-w-6xl mx-auto px-6">
      
      <!-- Section Header -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-16 pb-8 border-b border-hairline-light dark:border-hairline-dark">
        <div class="lg:col-span-8 space-y-3">
          <span class="font-mono text-xs uppercase tracking-caps text-stone-400 dark:text-stone-500">
            [ 03 — Latar Belakang & Filosofi ]
          </span>
          <h2 class="text-3xl sm:text-4xl font-bold text-stone-950 dark:text-stone-50 tracking-editorial">
            Teknologi Tanpa Kerumitan
          </h2>
        </div>
        <div class="lg:col-span-4 lg:text-right">
          <p class="text-sm text-stone-500 dark:text-stone-400 leading-relaxed font-normal">
            Pendidikan TIK sebagai jembatan empati antara kode dan pengguna awam.
          </p>
        </div>
      </div>

      <!-- Narrative & Technical Competency Columns -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
        
        <!-- Left: Personal Story & Manifesto -->
        <div class="lg:col-span-7 space-y-6 text-stone-700 dark:text-stone-300 text-base sm:text-lg leading-relaxed font-normal">
          <p>
            Berakar di Sumatera dan menyelesaikan studi di bidang <strong>Pendidikan Teknologi Informasi & Komunikasi (Pendidikan TIK)</strong>, saya melihat bahwa kegagalan adopsi sistem digital di sekolah atau daerah jarang disebabkan oleh keterbatasan teknologi.
          </p>
          <p>
            Masalah utamanya hampir selalu sama: sistem yang dirancang terlalu rumit bagi staf lapangan, proses pelatihan yang minim, atau pengembang yang sulit diajak berkomunikasi menggunakan bahasa sehari-hari.
          </p>
          <p class="text-stone-500 dark:text-stone-400 text-sm sm:text-base">
            Oleh sebab itu, dalam setiap proyek saya memegang tiga prinsip: <em>menghilangkan friksi pengguna awam</em>, <em>menjaga arsitektur kode tetap bersih dan terdokumentasi</em>, serta <em>memberikan pendampingan hingga sistem benar-benar berjalan mandiri</em>.
          </p>
        </div>

        <!-- Right: Technical Toolkit Index -->
        <div class="lg:col-span-5 space-y-8">
          <div class="space-y-6">
            <span class="font-mono text-xs uppercase tracking-caps text-stone-400 dark:text-stone-500 block pb-2 border-b border-hairline-light dark:border-hairline-dark">
              Spesifikasi Keahlian Teknis
            </span>

            <div class="space-y-6">
              <div
                v-for="cat in stackCategories"
                :key="cat.name"
                class="space-y-2.5"
              >
                <h4 class="font-mono text-xs text-stone-950 dark:text-stone-100 font-semibold uppercase tracking-caps">
                  {{ cat.name }}
                </h4>
                <div class="flex flex-wrap gap-x-3 gap-y-1.5 text-xs font-mono text-stone-500 dark:text-stone-400">
                  <span
                    v-for="skill in cat.skills"
                    :key="skill"
                    class="after:content-['·'] last:after:content-none after:ml-3"
                  >
                    {{ skill }}
                  </span>
                </div>
              </div>
            </div>

            <!-- Base Note -->
            <div class="pt-6 border-t border-hairline-light dark:border-hairline-dark text-xs font-mono text-stone-400 dark:text-stone-500 space-y-1">
              <div>LOKASI: Sarolangun, Jambi — Indonesia</div>
              <div>METODE: Daring (Remote) / Kunjungan Lapangan Berdasarkan Kesepakatan</div>
            </div>
          </div>
        </div>

      </div>

    </div>
  </section>
</template>
