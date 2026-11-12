<script setup lang="ts">
import { ArrowLeft, Calendar, Clock, MessageSquare, Share2 } from '@lucide/vue'

const route = useRoute()
const { data: post } = await useAsyncData(`content-${route.path}`, () =>
  queryContent(route.path).findOne()
)

if (!post.value) {
  throw createError({ statusCode: 404, statusMessage: 'Artikel tidak ditemukan' })
}

useHead({
  title: `${post.value?.title || 'Artikel'} | awanbeo`,
  meta: [
    { name: 'description', content: post.value?.description || '' },
    { property: 'og:title', content: post.value?.title || '' },
    { property: 'og:description', content: post.value?.description || '' }
  ]
})
</script>

<template>
  <div class="py-16 sm:py-20 max-w-3xl mx-auto px-4 sm:px-6">
    <!-- Back to Blog -->
    <NuxtLink
      to="/blog"
      class="inline-flex items-center gap-2 text-xs font-semibold text-slate-500 hover:text-blue-600 dark:hover:text-blue-400 mb-8 transition-colors"
    >
      <ArrowLeft class="w-4 h-4" />
      <span>Kembali ke Daftar Blog</span>
    </NuxtLink>

    <article v-if="post" class="space-y-8">
      <!-- Article Header -->
      <header class="space-y-4 border-b border-slate-200 dark:border-slate-800 pb-8">
        <div class="flex flex-wrap items-center gap-3 text-xs text-slate-500 dark:text-slate-400">
          <span class="px-2.5 py-1 rounded-full bg-blue-100 dark:bg-blue-900/60 text-blue-700 dark:text-blue-300 font-semibold">
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

        <h1 class="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
          {{ post.title }}
        </h1>

        <p class="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
          {{ post.description }}
        </p>
      </header>

      <!-- Markdown Body -->
      <div class="prose prose-slate dark:prose-invert max-w-none space-y-4 text-slate-700 dark:text-slate-300 leading-relaxed text-base [&>h2]:text-2xl [&>h2]:font-bold [&>h2]:text-slate-900 dark:[&>h2]:text-white [&>h2]:mt-8 [&>h2]:mb-4 [&>ul]:list-disc [&>ul]:pl-5 [&>ul]:space-y-2 [&>ol]:list-decimal [&>ol]:pl-5 [&>ol]:space-y-2 [&>p]:leading-relaxed">
        <ContentRenderer :value="post" />
      </div>

      <!-- Article Footer / CTA -->
      <footer class="pt-8 border-t border-slate-200 dark:border-slate-800 mt-12 space-y-6">
        <div class="p-6 rounded-3xl bg-blue-50/60 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-900/60 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h4 class="font-bold text-slate-900 dark:text-white text-base">
              Tertarik Menerapkan Solusi Serupa?
            </h4>
            <p class="text-xs text-slate-600 dark:text-slate-400 mt-0.5">
              Mari diskusikan kebutuhan sistem digital sekolah atau instansi Anda secara langsung.
            </p>
          </div>
          <a
            :href="`https://wa.me/6285183310065?text=Halo%20Awan,%20saya%20membaca%20artikel%20'${encodeURIComponent(post.title)}'%20dan%20tertarik%20konsultasi.`"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 shrink-0 transition-colors"
          >
            <MessageSquare class="w-4 h-4" />
            <span>Diskusi Solusi</span>
          </a>
        </div>
      </footer>
    </article>
  </div>
</template>

