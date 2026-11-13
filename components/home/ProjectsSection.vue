<script setup lang="ts">
import { ref } from 'vue'
import { projects, type Project } from '~/data/projects'
import ProjectModal from '~/components/home/ProjectModal.vue'
import FadeIn from '~/components/common/FadeIn.vue'
import { ArrowUpRight, Eye, ExternalLink } from '@lucide/vue'
import IconGithub from '~/components/icons/IconGithub.vue'

const selectedProject = ref<Project | null>(null)
const isModalOpen = ref(false)

const openProjectModal = (project: Project) => {
  selectedProject.value = project
  isModalOpen.value = true
}

const closeProjectModal = () => {
  isModalOpen.value = false
  selectedProject.value = null
}
</script>

<template>
  <section id="proyek" class="py-24 md:py-32 border-b border-hairline-light dark:border-hairline-dark">
    <div class="max-w-6xl mx-auto px-6">
      
      <!-- Section Header -->
      <FadeIn>
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-20 pb-8 border-b border-hairline-light dark:border-hairline-dark">
          <div class="lg:col-span-8 space-y-3">
            <span class="font-mono text-xs uppercase tracking-caps text-navy-500/80 dark:text-navy-400">
              [ 02 — Studi Kasus & Karya Terpilih ]
            </span>
            <h2 class="text-3xl sm:text-4xl font-bold text-navy-900 dark:text-navy-50 tracking-editorial">
              Bukti Rekayasa yang Telah Diuji di Lapangan
            </h2>
          </div>
          <div class="lg:col-span-4 lg:text-right">
            <p class="text-sm text-navy-600/70 dark:text-navy-400 leading-relaxed font-normal">
              Karya nyata yang memecahkan masalah operasional nyata, dari institusi pendidikan kejuruan hingga toko ritel lokal.
            </p>
          </div>
        </div>
      </FadeIn>

      <!-- Expansive Project Showcase (Proyek sebagai Focal Point) -->
      <div class="space-y-24 md:space-y-32">
        <article
          v-for="(project, index) in projects"
          :key="project.id"
          class="space-y-8 group"
        >
          <FadeIn :delay="index * 120">
            <!-- Top Meta Row -->
            <div class="flex flex-wrap items-center justify-between gap-4 text-xs font-mono uppercase tracking-caps text-navy-500/70 dark:text-navy-400 border-b border-hairline-light dark:border-hairline-dark pb-4">
              <div class="flex items-center gap-3">
                <span class="text-navy-900 dark:text-navy-100 font-bold">0{{ index + 1 }}</span>
                <span>/</span>
                <span>{{ project.category }}</span>
              </div>
              <div class="flex items-center gap-2">
                <span v-for="t in project.techView.stack.slice(0, 3)" :key="t" class="text-navy-600/80 dark:text-navy-400">
                  #{{ t }}
                </span>
              </div>
            </div>

            <!-- Project Focal Preview (Large Canvas Frame with Subtle Zoom on Hover) -->
            <div
              @click="openProjectModal(project)"
              @keydown.enter.prevent="openProjectModal(project)"
              @keydown.space.prevent="openProjectModal(project)"
              role="button"
              tabindex="0"
              :aria-label="`Buka galeri screenshot dan analisis sistem ${project.title}`"
              class="mt-6 relative overflow-hidden rounded-2xl border border-hairline-light dark:border-hairline-dark bg-navy-950/5 dark:bg-navy-950/40 cursor-pointer shadow-sm hover:shadow-xl hover:border-navy-400/50 dark:hover:border-navy-600/50 transition-all duration-500 group/canvas focus:outline-none focus-visible:ring-2 focus-visible:ring-navy-600 dark:focus-visible:ring-linen-200"
            >
              <!-- Minimal Browser-Style Chrome Bar -->
              <div class="px-4 py-3 border-b border-hairline-light dark:border-hairline-dark bg-surface-light/80 dark:bg-surface-dark/80 flex items-center justify-between">
                <div class="flex items-center gap-1.5">
                  <span class="w-2.5 h-2.5 rounded-full bg-navy-200 dark:bg-navy-800 group-hover/canvas:bg-rose-400/80 transition-colors"></span>
                  <span class="w-2.5 h-2.5 rounded-full bg-navy-200 dark:bg-navy-800 group-hover/canvas:bg-amber-400/80 transition-colors"></span>
                  <span class="w-2.5 h-2.5 rounded-full bg-navy-200 dark:bg-navy-800 group-hover/canvas:bg-emerald-400/80 transition-colors"></span>
                </div>
                <span class="font-mono text-[11px] text-navy-500/80 dark:text-navy-400">
                  {{ project.id }}.system
                </span>
                <div class="flex items-center gap-1 text-[11px] font-mono text-navy-600 dark:text-navy-400 group-hover/canvas:text-navy-950 dark:group-hover/canvas:text-white transition-colors">
                  <Eye class="w-3.5 h-3.5 stroke-[1.5]" />
                  <span class="hidden sm:inline">Pratinjau Screenshot</span>
                </div>
              </div>

              <!-- Banner Image -->
              <div class="aspect-[16/9] sm:aspect-[21/9] overflow-hidden bg-navy-950 flex items-center justify-center">
                <img
                  :src="project.banner"
                  :alt="project.title"
                  loading="lazy"
                  class="w-full h-full object-cover group-hover/canvas:scale-[1.025] transition-transform duration-700 ease-out"
                />
              </div>
            </div>

            <!-- Project Narrative & Dual Perspective -->
            <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 pt-6">
              
              <!-- Left: Title & Subtitle -->
              <div class="lg:col-span-5 space-y-4">
                <h3 class="text-2xl sm:text-3xl font-bold text-navy-900 dark:text-navy-50 tracking-editorial group-hover:text-navy-700 dark:group-hover:text-navy-200 transition-colors">
                  {{ project.title }}
                </h3>
                <p class="text-sm text-navy-600 dark:text-navy-400 leading-relaxed font-normal">
                  {{ project.subtitle }}
                </p>

                <!-- Actions -->
                <div class="pt-2 flex flex-wrap items-center gap-5 text-xs font-mono">
                  <button
                    @click="openProjectModal(project)"
                    type="button"
                    class="editorial-link text-navy-950 dark:text-navy-100 font-medium"
                  >
                    <span>Galeri & Analisis Sistem</span>
                    <Eye class="w-3.5 h-3.5 stroke-[1.5] ml-1.5" />
                  </button>

                  <a
                    v-if="project.links.demo"
                    :href="project.links.demo"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="inline-flex items-center gap-1 text-navy-500 hover:text-navy-950 dark:hover:text-navy-100 transition-colors group/demo"
                  >
                    <span class="underline underline-offset-4">Live Demo</span>
                    <ExternalLink class="w-3 h-3 stroke-[1.5] group-hover/demo:-translate-y-0.5 group-hover/demo:translate-x-0.5 transition-transform" />
                  </a>

                  <a
                    v-if="project.links.github"
                    :href="project.links.github"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="inline-flex items-center gap-1.5 text-navy-500 hover:text-navy-950 dark:hover:text-navy-100 transition-colors"
                  >
                    <IconGithub class="w-3.5 h-3.5 shrink-0" />
                    <span class="underline underline-offset-4">GitHub</span>
                  </a>
                </div>
              </div>

              <!-- Right: Impact & Technical Highlights (Editorial Comparison) -->
              <div class="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5 text-xs leading-relaxed">
                <!-- Sisi Klien / Dampak -->
                <div class="p-5 rounded-2xl border border-hairline-light dark:border-hairline-dark bg-surface-light dark:bg-surface-dark space-y-2.5 shadow-sm">
                  <span class="font-mono text-[10px] uppercase tracking-caps text-navy-500 dark:text-navy-400 font-bold block">
                    [ Nilai Solusi Klien ]
                  </span>
                  <p class="text-navy-800 dark:text-navy-200">
                    {{ project.clientView.solution }}
                  </p>
                </div>

                <!-- Sisi Teknis / Engineering -->
                <div class="p-5 rounded-2xl border border-hairline-light dark:border-hairline-dark bg-surface-light dark:bg-surface-dark space-y-2.5 shadow-sm">
                  <span class="font-mono text-[10px] uppercase tracking-caps text-navy-500 dark:text-navy-400 font-bold block">
                    [ Arsitektur & Stack ]
                  </span>
                  <p class="text-navy-800 dark:text-navy-200 font-mono">
                    {{ project.techView.architecture }}
                  </p>
                </div>
              </div>

            </div>
          </FadeIn>
        </article>
      </div>

      <!-- Project Modal -->
      <ProjectModal
        :project="selectedProject"
        :show="isModalOpen"
        @close="closeProjectModal"
      />

    </div>
  </section>
</template>
