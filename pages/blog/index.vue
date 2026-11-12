<script setup lang="ts">
import { Calendar, Clock, Tag, ArrowRight, BookOpen } from '@lucide/vue'

const { data: posts } = await useAsyncData('blog', () =>
  queryContent('blog').sort({ date: -1 }).find()
)

useHead({
  title: 'Blog & Catatan Digitalisasi | awanbeo',
  meta: [
    {
      name: 'description',
      content: 'Artikel, panduan digitalisasi sekolah, serta catatan teknis seputar pembuatan aplikasi web andal oleh Yodi Irawan (awanbeo).'
    }
  ]
})
</script>

<template>
  <div class="py-16 sm:py-24 max-w-5xl mx-auto px-4 sm:px-6">
    <!-- Header -->
    <div class="max-w-2xl mb-12 space-y-3">
      <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 text-xs font-semibold">
        <BookOpen class="w-3.5 h-3.5" />
        <span>Blog & Gagasan</span>
      </div>
      <h1 class="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
        Catatan & Panduan Digitalisasi
      </h1>
      <p class="text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed">
        Berbagi panduan praktis seputar modernisasi sistem sekolah, aplikasi faskes/desa, serta wawasan teknis web development.
      </p>
    </div>

    <!-- Posts List -->
    <div v-if="posts && posts.length" class="space-y-6">
      <article
        v-for="post in posts"
        :key="post._path"
        class="group p-6 sm:p-8 rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm hover:shadow-md hover:border-blue-500/50 transition-all"
      >
        <NuxtLink :to="post._path" class="block space-y-3">
          <div class="flex flex-wrap items-center gap-3 text-xs text-slate-500 dark:text-slate-400">
            <span class="px-2.5 py-1 rounded-full bg-blue-100 dark:bg-blue-900/60 text-blue-700 dark:text-blue-300 font-medium">
              {{ post.category || 'Artikel' }}
            </span>
            <span class="flex items-center gap-1">
              <Calendar class="w-3.5 h-3.5" />
              {{ post.date }}
            </span>
            <span v-if="post.readTime" class="flex items-center gap-1">
              <Clock class="w-3.5 h-3.5" />
              {{ post.readTime }}
            </span>
          </div>

          <h2 class="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
            {{ post.title }}
          </h2>

          <p class="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
            {{ post.description }}
          </p>

          <div class="pt-3 flex items-center justify-between text-xs font-semibold text-blue-600 dark:text-blue-400">
            <div class="flex flex-wrap gap-2">
              <span
                v-for="tag in post.tags"
                :key="tag"
                class="text-[11px] font-mono text-slate-500 dark:text-slate-400"
              >
                #{{ tag }}
              </span>
            </div>
            <span class="inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform">
              <span>Baca Selengkapnya</span>
              <ArrowRight class="w-3.5 h-3.5" />
            </span>
          </div>
        </NuxtLink>
      </article>
    </div>

    <!-- Empty State -->
    <div
      v-else
      class="p-12 text-center rounded-3xl border border-dashed border-slate-300 dark:border-slate-800 text-slate-500"
    >
      <p>Belum ada artikel yang dipublikasikan.</p>
    </div>
  </div>
</template>
