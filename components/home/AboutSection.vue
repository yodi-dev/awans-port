<script setup lang="ts">
import { GraduationCap, HeartHandshake, Code2, MapPin, CheckCircle2 } from '@lucide/vue'

const values = [
  {
    icon: GraduationCap,
    title: 'Paham Kebutuhan Pengguna Awam',
    desc: 'Latar belakang Pendidikan TIK melatih saya mendengarkan kendala pengguna dan merancang antarmuka yang ramah bahkan bagi yang belum melek teknologi.'
  },
  {
    icon: Code2,
    title: 'Arsitektur Bersih & Aman',
    desc: 'Menggunakan standar framework modern (Laravel & Vue/Nuxt) dengan validasi data ketat dan performa tinggi yang tidak memberatkan kuota internet.'
  },
  {
    icon: HeartHandshake,
    title: 'Edukasi & Pendampingan Pasca-Rilis',
    desc: 'Tidak sekadar menyerahkan kode lalu pergi. Saya menyediakan panduan operasional dan sesi tanya jawab agar sistem benar-benar terpakai optimal.'
  }
]

const stackCategories = [
  {
    name: 'Backend & Database',
    skills: ['Laravel', 'PHP', 'MySQL', 'REST API', 'Eloquent ORM']
  },
  {
    name: 'Frontend & UI',
    skills: ['Vue 3', 'Nuxt 3', 'Tailwind CSS', 'Livewire', 'TypeScript/JS']
  },
  {
    name: 'Infrastruktur & Alat Kerja',
    skills: ['Cloudflare Pages', 'Git & GitHub', 'Linux Server / VPS', 'Postman']
  }
]
</script>

<template>
  <section id="tentang" class="py-24 bg-slate-100/60 dark:bg-slate-900/40 border-y border-slate-200/80 dark:border-slate-800/80 transition-colors">
    <div class="max-w-6xl mx-auto px-4 sm:px-6">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        <!-- Story & Pillars -->
        <div class="lg:col-span-7 space-y-6">
          <span class="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
            Filosofi & Profil
          </span>
          <h2 class="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Menjembatani Teknologi Canggih dengan Kemudahan Nyata
          </h2>
          
          <div class="space-y-4 text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
            <p>
              Lahir dan bertumbuh di Sumatera, ketertarikan saya pada dunia komputasi bermula sejak SMK hingga menyelesaikan studi di bidang <strong>Pendidikan Teknologi Informasi & Komunikasi (Pendidikan TIK)</strong>.
            </p>
            <p>
              Pengalaman tersebut menyadarkan saya bahwa masalah digitalisasi di sekolah atau instansi daerah sering kali <em>bukan</em> karena kurangnya software, melainkan software yang ada terlalu rumit, lambat, atau pengembangnya sulit diajak berdiskusi.
            </p>
            <p>
              Oleh karena itu, fokus utama saya adalah menghadirkan sistem web yang mempermudah kerja manusia di baliknya—bukan malah menambah beban kerja baru.
            </p>
          </div>

          <!-- Value Pillars -->
          <div class="pt-4 space-y-4">
            <div
              v-for="val in values"
              :key="val.title"
              class="flex items-start gap-3.5 p-3.5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800"
            >
              <div class="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950/80 flex items-center justify-center text-blue-600 dark:text-blue-400 shrink-0">
                <component :is="val.icon" class="w-5 h-5" />
              </div>
              <div>
                <h4 class="text-sm font-bold text-slate-900 dark:text-white">
                  {{ val.title }}
                </h4>
                <p class="text-xs text-slate-500 dark:text-slate-400 mt-0.5 leading-relaxed">
                  {{ val.desc }}
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- Tech Stack Bento Card -->
        <div class="lg:col-span-5 space-y-6">
          <div class="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 shadow-sm space-y-6">
            <div>
              <span class="text-xs font-bold uppercase tracking-wider text-slate-400">
                Keahlian & Toolkit
              </span>
              <h3 class="text-xl font-bold text-slate-900 dark:text-white mt-1">
                Teknologi yang Saya Kuasai
              </h3>
            </div>

            <div class="space-y-5">
              <div
                v-for="category in stackCategories"
                :key="category.name"
                class="space-y-2.5"
              >
                <h4 class="text-xs font-semibold text-slate-700 dark:text-slate-300">
                  {{ category.name }}
                </h4>
                <div class="flex flex-wrap gap-2">
                  <span
                    v-for="skill in category.skills"
                    :key="skill"
                    class="px-2.5 py-1 rounded-lg text-xs font-mono font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 border border-slate-200/80 dark:border-slate-700/80"
                  >
                    {{ skill }}
                  </span>
                </div>
              </div>
            </div>

            <!-- Location Note -->
            <div class="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center gap-3 text-xs text-slate-500 dark:text-slate-400">
              <MapPin class="w-4 h-4 text-rose-500 shrink-0" />
              <span>Berbasis di <strong>Sarolangun, Jambi</strong>. Siap berkolaborasi baik secara daring (remote) maupun peninjauan langsung bila dibutuhkan.</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

