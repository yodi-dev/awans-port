<script setup lang="ts">
import { ref, computed } from 'vue'
import { projects, type Project } from '~/data/projects'
import ProjectModal from '~/components/home/ProjectModal.vue'
import { ExternalLink, Eye, Sparkles } from '@lucide/vue'
import IconGithub from '~/components/icons/IconGithub.vue'

const selectedCategory = ref<string>('Semua')
const categories = ['Semua', 'Pendidikan & Sekolah', 'Layanan & Institusi Daerah', 'Bisnis & UMKM']

const filteredProjects = computed(() => {
  if (selectedCategory.value === 'Semua') return projects
  return projects.filter((p) => p.category === selectedCategory.value)
})

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
  <section id="proyek" class="py-24 transition-colors">
    <div class="max-w-6xl mx-auto px-4 sm:px-6">
      
      <!-- Section Header -->
      <div class="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div class="space-y-3 max-w-xl">
          <span class="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
            Showcase Portofolio
          </span>
          <h2 class="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Karya & Solusi yang Pernah Dibangun
          </h2>
          <p class="text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed">
            Ditinjau dari dua sisi: solusi nyata untuk efisiensi operasional pengguna di lapangan, serta arsitektur kode yang bersih dan terstruktur.
          </p>
        </div>

        <!-- Category Filters -->
        <div class="flex flex-wrap gap-2">
          <button
            v-for="cat in categories"
            :key="cat"
            @click="selectedCategory = cat"
            :class="[
              'px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all',
              selectedCategory === cat
                ? 'bg-blue-600 text-white shadow-sm'
                : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
            ]"
          >
            {{ cat }}
          </button>
        </div>
      </div>

      <!-- Projects Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="project in filteredProjects"
          :key="project.id"
          @click="openProjectModal(project)"
          class="group rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 overflow-hidden shadow-sm hover:shadow-xl hover:border-blue-400 dark:hover:border-blue-600 transition-all duration-300 cursor-pointer flex flex-col justify-between"
        >
          <div>
            <!-- Banner Image Preview -->
            <div class="relative aspect-video overflow-hidden bg-slate-100 dark:bg-slate-800">
              <img
                :src="project.banner"
                :alt="project.title"
                loading="lazy"
                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div class="absolute top-3 left-3">
                <span class="text-[11px] font-bold px-2.5 py-1 rounded-full bg-slate-950/80 text-white backdrop-blur-md shadow-sm">
                  {{ project.badge }}
                </span>
              </div>
            </div>

            <!-- Content Details -->
            <div class="p-6 space-y-4">
              <div>
                <h3 class="text-lg font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-1">
                  {{ project.title }}
                </h3>
                <p class="text-xs text-slate-500 dark:text-slate-400 mt-1 line-clamp-2">
                  {{ project.subtitle }}
                </p>
              </div>

              <!-- Tech Stack Badges -->
              <div class="flex flex-wrap gap-1.5">
                <span
                  v-for="tech in project.techView.stack"
                  :key="tech"
                  class="text-[10px] font-mono px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300"
                >
                  {{ tech }}
                </span>
              </div>

              <!-- Mini Problem & Solution Highlight -->
              <div class="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800 text-xs text-slate-600 dark:text-slate-300 space-y-1">
                <div class="font-medium text-slate-900 dark:text-white flex items-center gap-1.5">
                  <Sparkles class="w-3.5 h-3.5 text-blue-500" />
                  <span>Dampak Nyata:</span>
                </div>
                <p class="line-clamp-2 text-[11px] text-slate-500 dark:text-slate-400">
                  {{ project.clientView.solution }}
                </p>
              </div>
            </div>
          </div>

          <!-- Bottom Action Buttons -->
          <div class="px-6 pb-6 pt-2 flex items-center justify-between border-t border-slate-100 dark:border-slate-800/80 text-xs">
            <span class="font-semibold text-blue-600 dark:text-blue-400 group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
              <span>Detail & Screenshot</span>
              <Eye class="w-3.5 h-3.5" />
            </span>

            <div class="flex items-center gap-2" @click.stop>
              <a
                v-if="project.links.demo"
                :href="project.links.demo"
                target="_blank"
                rel="noopener noreferrer"
                class="p-1.5 rounded-lg text-slate-500 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                title="Buka Live Demo"
              >
                <ExternalLink class="w-4 h-4" />
              </a>
              <a
                v-if="project.links.github"
                :href="project.links.github"
                target="_blank"
                rel="noopener noreferrer"
                class="p-1.5 rounded-lg text-slate-500 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                title="Buka Repositori GitHub"
              >
                <IconGithub class="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <!-- Project Modal Component -->
      <ProjectModal
        :project="selectedProject"
        :show="isModalOpen"
        @close="closeProjectModal"
      />

    </div>
  </section>
</template>
