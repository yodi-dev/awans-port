<script setup lang="ts">
import { ArrowLeft, ArrowUpRight } from '@lucide/vue'

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
  <div class="py-16 md:py-24 max-w-2xl mx-auto px-6">
    
    <!-- Return Navigation -->
    <NuxtLink
      to="/blog"
      class="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-caps text-stone-400 hover:text-stone-950 dark:hover:text-stone-100 mb-12 transition-colors"
    >
      <ArrowLeft class="w-3.5 h-3.5 stroke-[1.5]" />
      <span>Kembali ke Indeks Jurnal</span>
    </NuxtLink>

    <article v-if="post" class="space-y-10">
      
      <!-- Article Header -->
      <header class="space-y-6 pb-8 border-b border-hairline-light dark:border-hairline-dark">
        <!-- Metadata -->
        <div class="flex flex-wrap items-center gap-3 text-xs font-mono uppercase tracking-caps text-stone-400 dark:text-stone-500">
          <span class="text-stone-800 dark:text-stone-200 font-semibold">
            {{ post.category || 'Artikel' }}
          </span>
          <span>·</span>
          <span>{{ post.date }}</span>
          <span v-if="post.readTime">·</span>
          <span v-if="post.readTime">{{ post.readTime }} baca</span>
        </div>

        <!-- Headline -->
        <h1 class="text-3xl sm:text-4xl md:text-[2.75rem] font-bold text-stone-950 dark:text-stone-50 tracking-editorial leading-[1.18]">
          {{ post.title }}
        </h1>

        <!-- Excerpt / Dek -->
        <p class="text-lg text-stone-600 dark:text-stone-400 leading-relaxed font-normal">
          {{ post.description }}
        </p>
      </header>

      <!-- Editorial Body Reading Content -->
      <div class="prose prose-stone dark:prose-invert max-w-none text-stone-800 dark:text-stone-200 text-base leading-[1.85] font-normal space-y-6 [&>h2]:text-2xl [&>h2]:font-bold [&>h2]:text-stone-950 dark:[&>h2]:text-stone-50 [&>h2]:tracking-editorial [&>h2]:mt-12 [&>h2]:mb-4 [&>ul]:list-none [&>ul]:pl-0 [&>ul]:space-y-2 [&>ul>li]:relative [&>ul>li]:pl-5 [&>ul>li]:before:content-['―'] [&>ul>li]:before:absolute [&>ul>li]:before:left-0 [&>ul>li]:before:text-stone-400 [&>ol]:list-decimal [&>ol]:pl-5 [&>ol]:space-y-2.5">
        <ContentRenderer :value="post" />
      </div>

      <!-- Article Footer / Invitation -->
      <footer class="pt-12 border-t border-hairline-light dark:border-hairline-dark mt-16 space-y-6">
        <div class="space-y-2">
          <span class="font-mono text-xs uppercase tracking-caps text-stone-400 dark:text-stone-500 block">
            [ Kolaborasi & Tanya Jawab ]
          </span>
          <h3 class="text-xl font-bold text-stone-950 dark:text-stone-50 tracking-editorial">
            Tertarik mendiskusikan implementasi untuk sekolah Anda?
          </h3>
          <p class="text-sm text-stone-600 dark:text-stone-400 leading-relaxed">
            Saya selalu terbuka untuk berdiskusi santai mengenai alur kerja perpustakaan atau sistem sekolah yang ingin dimodernisasi.
          </p>
        </div>

        <div class="pt-2">
          <a
            :href="`https://wa.me/6285183310065?text=Halo%20Awan,%20saya%20membaca%20artikel%20'${encodeURIComponent(post.title)}'%20dan%20tertarik%20konsultasi.`"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-stone-950 dark:text-stone-100 hover:opacity-70 transition-opacity underline underline-offset-4"
          >
            <span>Mulai Diskusi via WhatsApp</span>
            <ArrowUpRight class="w-3.5 h-3.5 stroke-[1.5]" />
          </a>
        </div>
      </footer>

    </article>
  </div>
</template>
