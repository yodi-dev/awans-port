<script setup lang="ts">
import { ArrowUpRight } from '@lucide/vue'
import FadeIn from '~/components/common/FadeIn.vue'

const { data: posts } = await useAsyncData('blog', () =>
  queryContent('blog').sort({ date: -1 }).find()
)

useSeoMeta({
  title: 'Jurnal & Catatan Digitalisasi | Yodi Irawan (Awan)',
  description: 'Esai, panduan tata kelola sistem sekolah, digitalisasi desa, serta catatan teknis rekayasa web oleh Yodi Irawan (Awan).',
  ogTitle: 'Jurnal & Catatan Digitalisasi | Yodi Irawan (Awan)',
  ogDescription: 'Esai, panduan tata kelola sistem sekolah, digitalisasi desa, serta catatan teknis rekayasa web oleh Yodi Irawan (Awan).',
  ogUrl: 'https://awanbeo.my.id/blog',
  ogImage: 'https://awanbeo.my.id/og-image.png',
  twitterCard: 'summary_large_image',
  twitterImage: 'https://awanbeo.my.id/og-image.png'
})

useHead({
  link: [
    { rel: 'canonical', href: 'https://awanbeo.my.id/blog' }
  ]
})
</script>

<template>
  <div class="py-20 md:py-32 max-w-4xl mx-auto px-6">
    
    <!-- Editorial Header -->
    <FadeIn>
      <header class="space-y-4 mb-20 pb-8 border-b border-hairline-light dark:border-hairline-dark">
        <span class="font-mono text-xs uppercase tracking-caps text-navy-500/80 dark:text-navy-400 block font-semibold">
          [ Publikasi & Jurnal ]
        </span>
        <h1 class="text-4xl sm:text-5xl font-bold text-navy-900 dark:text-navy-50 tracking-editorial">
          Catatan Lapangan & Rekayasa Web
        </h1>
        <p class="text-base sm:text-lg text-navy-700/80 dark:text-navy-300/80 leading-relaxed max-w-2xl font-normal">
          Tulisan mengenai digitalisasi sekolah, observasi sistem pelayanan daerah, serta panduan teknis yang dipelajari selama proses berkarya.
        </p>
      </header>
    </FadeIn>

    <!-- Articles Feed (Editorial Archive Format with Staggered Entrance) -->
    <div v-if="posts && posts.length" class="divide-y divide-hairline-light dark:divide-hairline-dark border-b border-hairline-light dark:border-hairline-dark">
      <article
        v-for="(post, index) in posts"
        :key="post._path"
        class="py-12 group transition-colors px-4 -mx-4 rounded-xl hover:bg-navy-50/30 dark:hover:bg-navy-950/20"
      >
        <FadeIn :delay="index * 120">
          <NuxtLink :to="post._path" class="block space-y-4">
            <!-- Metadata Bar -->
            <div class="flex flex-wrap items-center gap-4 text-xs font-mono uppercase tracking-caps text-navy-500/80 dark:text-navy-400">
              <span class="text-navy-900 dark:text-navy-100 font-bold">
                {{ post.category || 'Artikel' }}
              </span>
              <span>·</span>
              <span>{{ post.date }}</span>
              <span v-if="post.readTime">·</span>
              <span v-if="post.readTime">{{ post.readTime }} baca</span>
            </div>

            <!-- Title -->
            <h2 class="text-2xl sm:text-3xl font-bold text-navy-900 dark:text-navy-50 group-hover:text-navy-700 dark:group-hover:text-navy-200 transition-colors tracking-editorial leading-tight">
              {{ post.title }}
            </h2>

            <!-- Excerpt -->
            <p class="text-sm sm:text-base text-navy-600 dark:text-navy-400 leading-relaxed font-normal max-w-3xl">
              {{ post.description }}
            </p>

            <!-- Read Link with micro-interaction -->
            <div class="pt-2 flex items-center gap-1.5 text-xs font-mono font-medium text-navy-900 dark:text-navy-100">
              <span class="editorial-link">Baca Tulisan Lengkap</span>
              <ArrowUpRight class="w-3.5 h-3.5 stroke-[1.5] group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform duration-200" />
            </div>
          </NuxtLink>
        </FadeIn>
      </article>
    </div>

    <!-- Empty State -->
    <div
      v-else
      class="py-16 text-center text-sm font-mono text-navy-400"
    >
      [ Belum ada tulisan yang dipublikasikan ]
    </div>

  </div>
</template>
