<script setup lang="ts">
import { ArrowUpRight } from '@lucide/vue'

const { data: posts } = await useAsyncData('blog', () =>
  queryContent('blog').sort({ date: -1 }).find()
)

useHead({
  title: 'Jurnal & Catatan Digitalisasi | awanbeo',
  meta: [
    {
      name: 'description',
      content: 'Esai, panduan digitalisasi sekolah, serta refleksi teknis seputar pembuatan aplikasi web fungsional oleh Yodi Irawan (awanbeo).'
    }
  ]
})
</script>

<template>
  <div class="py-20 md:py-32 max-w-4xl mx-auto px-6">
    
    <!-- Editorial Header -->
    <header class="space-y-4 mb-20 pb-8 border-b border-hairline-light dark:border-hairline-dark">
      <span class="font-mono text-xs uppercase tracking-caps text-stone-400 dark:text-stone-500 block">
        [ Publikasi & Jurnal ]
      </span>
      <h1 class="text-4xl sm:text-5xl font-bold text-stone-950 dark:text-stone-50 tracking-editorial">
        Catatan Lapangan & Rekayasa Web
      </h1>
      <p class="text-base sm:text-lg text-stone-600 dark:text-stone-400 leading-relaxed max-w-2xl font-normal">
        Tulisan mengenai digitalisasi sekolah, observasi sistem pelayanan daerah, serta panduan teknis yang dipelajari selama proses berkarya.
      </p>
    </header>

    <!-- Articles Feed (Editorial Archive Format) -->
    <div v-if="posts && posts.length" class="divide-y divide-hairline-light dark:divide-hairline-dark border-b border-hairline-light dark:border-hairline-dark">
      <article
        v-for="post in posts"
        :key="post._path"
        class="py-12 group"
      >
        <NuxtLink :to="post._path" class="block space-y-4">
          <!-- Metadata Bar -->
          <div class="flex flex-wrap items-center gap-4 text-xs font-mono uppercase tracking-caps text-stone-400 dark:text-stone-500">
            <span class="text-stone-800 dark:text-stone-200 font-medium">
              {{ post.category || 'Artikel' }}
            </span>
            <span>·</span>
            <span>{{ post.date }}</span>
            <span v-if="post.readTime">·</span>
            <span v-if="post.readTime">{{ post.readTime }} baca</span>
          </div>

          <!-- Title -->
          <h2 class="text-2xl sm:text-3xl font-bold text-stone-950 dark:text-stone-50 group-hover:text-stone-600 dark:group-hover:text-stone-300 transition-colors tracking-editorial leading-tight">
            {{ post.title }}
          </h2>

          <!-- Excerpt -->
          <p class="text-sm sm:text-base text-stone-600 dark:text-stone-400 leading-relaxed font-normal max-w-3xl">
            {{ post.description }}
          </p>

          <!-- Read Link -->
          <div class="pt-2 flex items-center gap-1.5 text-xs font-mono text-stone-950 dark:text-stone-100 group-hover:underline underline-offset-4">
            <span>Baca Tulisan Lengkap</span>
            <ArrowUpRight class="w-3.5 h-3.5 stroke-[1.5] group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
          </div>
        </NuxtLink>
      </article>
    </div>

    <!-- Empty State -->
    <div
      v-else
      class="py-16 text-center text-sm font-mono text-stone-400"
    >
      [ Belum ada tulisan yang dipublikasikan ]
    </div>

  </div>
</template>
