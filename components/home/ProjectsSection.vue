<script setup lang="ts">
import { ref } from 'vue'
import { projects, type Project } from '~/data/projects'
import ProjectModal from '~/components/home/ProjectModal.vue'
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
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-20 pb-8 border-b border-hairline-light dark:border-hairline-dark">
        <div class="lg:col-span-8 space-y-3">
          <span class="font-mono text-xs uppercase tracking-caps text-stone-400 dark:text-stone-500">
            [ 02 — Karya Pilihan ]
          </span>
          <h2 class="text-3xl sm:text-4xl font-bold text-stone-950 dark:text-stone-50 tracking-editorial">
            Proyek & Studi Kasus
          </h2>
        </div>
        <div class="lg:col-span-4 lg:text-right">
          <p class="text-sm text-stone-500 dark:text-stone-400 leading-relaxed font-normal">
            Setiap proyek dirancang untuk menyelesaikan kendala manusia di baliknya.
          </p>
        </div>
      </div>

      <!-- Expansive Project Showcase (Proyek sebagai Focal Point) -->
      <div class="space-y-24 md:space-y-32">
        <article
          v-for="(project, index) in projects"
          :key="project.id"
          class="space-y-8 group"
        >
          <!-- Top Meta Row -->
          <div class="flex flex-wrap items-center justify-between gap-4 text-xs font-mono uppercase tracking-caps text-stone-400 dark:text-stone-500 border-b border-hairline-light dark:border-hairline-dark pb-4">
            <div class="flex items-center gap-3">
              <span class="text-stone-950 dark:text-stone-100 font-semibold">0{{ index + 1 }}</span>
              <span>/</span>
              <span>{{ project.category }}</span>
            </div>
            <div class="flex items-center gap-2">
              <span v-for="t in project.techView.stack.slice(0, 3)" :key="t" class="text-stone-500 dark:text-stone-400">
                #{{ t }}
              </span>
            </div>
          </div>

          <!-- Project Focal Preview (Large Canvas Frame) -->
          <div
            @click="openProjectModal(project)"
            class="relative overflow-hidden rounded-2xl border border-hairline-light dark:border-hairline-dark bg-stone-100 dark:bg-stone-900 cursor-pointer shadow-sm hover:shadow-xl transition-all duration-500 group/canvas"
          >
            <!-- Minimal Browser-Style Chrome Bar -->
            <div class="px-4 py-3 border-b border-hairline-light dark:border-hairline-dark bg-stone-50/80 dark:bg-stone-950/80 flex items-center justify-between">
              <div class="flex items-center gap-1.5">
                <span class="w-2.5 h-2.5 rounded-full bg-stone-300 dark:bg-stone-700"></span>
                <span class="w-2.5 h-2.5 rounded-full bg-stone-300 dark:bg-stone-700"></span>
                <span class="w-2.5 h-2.5 rounded-full bg-stone-300 dark:bg-stone-700"></span>
              </div>
              <span class="font-mono text-[11px] text-stone-400 dark:text-stone-500">
                {{ project.id }}.system
              </span>
              <div class="flex items-center gap-1 text-[11px] font-mono text-stone-400 dark:text-stone-500">
                <Eye class="w-3.5 h-3.5 stroke-[1.5]" />
                <span class="hidden sm:inline">Klik untuk Galeri</span>
              </div>
            </div>

            <!-- Banner Image -->
            <div class="aspect-[16/9] sm:aspect-[21/9] overflow-hidden bg-stone-950 flex items-center justify-center">
              <img
                :src="project.banner"
                :alt="project.title"
                loading="lazy"
                class="w-full h-full object-cover group-hover/canvas:scale-[1.02] transition-transform duration-700 ease-out"
              />
            </div>
          </div>

          <!-- Project Narrative & Dual Perspective -->
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 pt-2">
            
            <!-- Left: Title & Subtitle -->
            <div class="lg:col-span-5 space-y-4">
              <h3 class="text-2xl sm:text-3xl font-bold text-stone-950 dark:text-stone-50 tracking-editorial">
                {{ project.title }}
              </h3>
              <p class="text-sm text-stone-500 dark:text-stone-400 leading-relaxed font-normal">
                {{ project.subtitle }}
              </p>

              <!-- Actions -->
              <div class="pt-2 flex flex-wrap items-center gap-4 text-xs font-mono">
                <button
                  @click="openProjectModal(project)"
                  type="button"
                  class="inline-flex items-center gap-1.5 text-stone-950 dark:text-stone-100 hover:opacity-70 transition-opacity underline underline-offset-4"
                >
                  <span>Buka Galeri & Detail</span>
                  <Eye class="w-3.5 h-3.5 stroke-[1.5]" />
                </button>

                <a
                  v-if="project.links.demo"
                  :href="project.links.demo"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="inline-flex items-center gap-1 text-stone-500 hover:text-stone-950 dark:hover:text-stone-100 transition-colors"
                >
                  <span>Live Demo</span>
                  <ExternalLink class="w-3 h-3 stroke-[1.5]" />
                </a>

                <a
                  v-if="project.links.github"
                  :href="project.links.github"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="inline-flex items-center gap-1 text-stone-500 hover:text-stone-950 dark:hover:text-stone-100 transition-colors"
                >
                  <IconGithub class="w-3.5 h-3.5" />
                  <span>GitHub</span>
                </a>
              </div>
            </div>

            <!-- Right: Impact & Technical Highlights (Editorial Comparison) -->
            <div class="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6 text-xs leading-relaxed">
              <!-- Sisi Klien / Dampak -->
              <div class="p-4 rounded-xl border border-hairline-light dark:border-hairline-dark bg-stone-50/60 dark:bg-stone-900/40 space-y-2">
                <span class="font-mono text-[10px] uppercase tracking-caps text-stone-400 dark:text-stone-500 block">
                  [ Nilai Solusi Klien ]
                </span>
                <p class="text-stone-700 dark:text-stone-300">
                  {{ project.clientView.solution }}
                </p>
              </div>

              <!-- Sisi Teknis / Engineering -->
              <div class="p-4 rounded-xl border border-hairline-light dark:border-hairline-dark bg-stone-50/60 dark:bg-stone-900/40 space-y-2">
                <span class="font-mono text-[10px] uppercase tracking-caps text-stone-400 dark:text-stone-500 block">
                  [ Arsitektur & Stack ]
                </span>
                <p class="text-stone-700 dark:text-stone-300 font-mono">
                  {{ project.techView.architecture }}
                </p>
              </div>
            </div>

          </div>
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
