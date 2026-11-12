<script setup lang="ts">
import { MessageSquare, Mail, MapPin, Clock, ArrowRight, ShieldCheck } from '@lucide/vue'
import IconLinkedin from '~/components/icons/IconLinkedin.vue'

const contacts = [
  {
    title: 'WhatsApp (Respon Tercepat)',
    detail: '+62 851-8331-0065',
    actionText: 'Kirim Pesan WhatsApp',
    href: 'https://wa.me/6285183310065?text=Halo%20Awan,%20saya%20tertarik%20berdiskusi%20tentang%20proyek%20aplikasi%20web.',
    icon: MessageSquare,
    badge: 'Disarankan',
    color: 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20'
  },
  {
    title: 'Surel / Email',
    detail: 'irawanyodi10@gmail.com',
    actionText: 'Kirim Email',
    href: 'mailto:irawanyodi10@gmail.com?subject=Inquiry%20Proyek%20Website',
    icon: Mail,
    badge: 'Formal',
    color: 'bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20'
  },
  {
    title: 'LinkedIn',
    detail: 'linkedin.com/in/yodi-irawan',
    actionText: 'Kunjungi Profil',
    href: 'https://www.linkedin.com/in/yodi-irawan/',
    icon: IconLinkedin,
    badge: 'Jejaring',
    color: 'bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border-indigo-500/20'
  }
]
</script>

<template>
  <section id="kontak" class="py-24 transition-colors">
    <div class="max-w-6xl mx-auto px-4 sm:px-6">
      <div class="rounded-3xl border border-slate-200 dark:border-slate-800 bg-gradient-to-b from-white to-slate-50 dark:from-slate-900 dark:to-slate-950 p-8 sm:p-12 shadow-xl">
        <div class="max-w-3xl mx-auto text-center space-y-4 mb-12">
          <span class="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
            Hubungi Saya
          </span>
          <h2 class="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Punya Rencana Digitalisasi di Sekolah atau Lembaga Anda?
          </h2>
          <p class="text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed">
            Tidak perlu sungkan jika rencana Anda masih berupa ide awal. Mari kita diskusikan bersama untuk memetakan alur kerja dan solusi terbaik yang paling efisien.
          </p>
        </div>

        <!-- Contact Options Grid -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <a
            v-for="item in contacts"
            :key="item.title"
            :href="item.href"
            target="_blank"
            rel="noopener noreferrer"
            class="group p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/90 hover:border-blue-500 dark:hover:border-blue-500 transition-all shadow-sm hover:shadow-md flex flex-col justify-between"
          >
            <div class="space-y-4">
              <div class="flex items-center justify-between">
                <div class="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-700 dark:text-slate-300 group-hover:scale-110 transition-transform">
                  <component :is="item.icon" class="w-5 h-5" />
                </div>
                <span :class="['text-[11px] font-semibold px-2 py-0.5 rounded-full border', item.color]">
                  {{ item.badge }}
                </span>
              </div>

              <div>
                <h4 class="text-sm font-semibold text-slate-500 dark:text-slate-400">
                  {{ item.title }}
                </h4>
                <p class="text-base font-bold text-slate-900 dark:text-white mt-0.5">
                  {{ item.detail }}
                </p>
              </div>
            </div>

            <div class="pt-4 mt-6 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-xs font-semibold text-blue-600 dark:text-blue-400 group-hover:text-blue-700">
              <span>{{ item.actionText }}</span>
              <ArrowRight class="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </a>
        </div>

        <!-- Trust Note -->
        <div class="mt-10 pt-8 border-t border-slate-200/80 dark:border-slate-800/80 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-500 dark:text-slate-400">
          <div class="flex items-center gap-2">
            <Clock class="w-4 h-4 text-blue-500" />
            <span>Konsultasi awal & pemetaan kebutuhan gratis</span>
          </div>
          <div class="flex items-center gap-2">
            <ShieldCheck class="w-4 h-4 text-emerald-500" />
            <span>Garansi penyesuaian & pendampingan setelah rilis</span>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>
