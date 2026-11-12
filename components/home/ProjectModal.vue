<script setup lang="ts">
import { ref, watch, onMounted, onUnmounted } from 'vue'
import type { Project } from '~/data/projects'
import {
  X,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  CheckCircle2
} from '@lucide/vue'
import IconGithub from '~/components/icons/IconGithub.vue'

const props = defineProps<{
  project: Project | null
  show: boolean
}>()

const emit = defineEmits<{
  (e: 'close'): void
}>()

const activeTab = ref<'client' | 'tech'>('client')
const currentSlide = ref(0)

watch(
  () => props.show,
  (val) => {
    if (val) {
      currentSlide.value = 0
      activeTab.value = 'client'
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
  }
)

const nextSlide = () => {
  if (!props.project?.screenshots.length) return
  currentSlide.value = (currentSlide.value + 1) % props.project.screenshots.length
}

const prevSlide = () => {
  if (!props.project?.screenshots.length) return
  currentSlide.value =
    (currentSlide.value - 1 + props.project.screenshots.length) %
    props.project.screenshots.length
}

const handleKeydown = (e: KeyboardEvent) => {
  if (!props.show) return
  if (e.key === 'Escape') emit('close')
  if (e.key === 'ArrowRight') nextSlide()
  if (e.key === 'ArrowLeft') prevSlide()
}

onMounted(() => {
  window.addEventListener('keydown', handleKeydown)
})

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeydown)
  document.body.style.overflow = ''
})
</script>

<template>
  <Teleport to="body">
    <Transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div
        v-if="show && project"
        class="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-stone-950/80 backdrop-blur-sm"
        @click.self="emit('close')"
      >
        <div
          class="relative w-full max-w-4xl bg-canvas-light dark:bg-canvas-dark border border-hairline-light dark:border-hairline-dark rounded-2xl shadow-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col"
        >
          <!-- Top Header -->
          <div class="flex items-center justify-between px-6 py-4 border-b border-hairline-light dark:border-hairline-dark shrink-0">
            <div>
              <span class="font-mono text-[10px] uppercase tracking-caps text-stone-400 dark:text-stone-500">
                {{ project.category }} · {{ project.badge }}
              </span>
              <h3 class="text-xl font-bold text-stone-950 dark:text-stone-50 tracking-editorial">
                {{ project.title }}
              </h3>
            </div>
            <button
              @click="emit('close')"
              class="p-2 rounded-lg text-stone-400 hover:text-stone-950 dark:hover:text-stone-100 hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors"
              aria-label="Tutup"
            >
              <X class="w-5 h-5 stroke-[1.5]" />
            </button>
          </div>

          <!-- Scrollable Body -->
          <div class="overflow-y-auto p-6 space-y-6">
            
            <!-- Screenshots Frame -->
            <div
              v-if="project.screenshots && project.screenshots.length"
              class="relative rounded-xl overflow-hidden bg-stone-950 border border-hairline-light dark:border-hairline-dark aspect-video flex items-center justify-center group"
            >
              <img
                :src="project.screenshots[currentSlide]"
                :alt="project.title + ' Screenshot'"
                class="w-full h-full object-contain"
              />

              <!-- Slider Controls -->
              <div
                v-if="project.screenshots.length > 1"
                class="absolute inset-0 flex items-center justify-between p-3 opacity-90 sm:opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <button
                  @click="prevSlide"
                  class="p-2 rounded-full bg-stone-900/90 text-white hover:bg-stone-950 border border-stone-700"
                  aria-label="Slide sebelumnya"
                >
                  <ChevronLeft class="w-5 h-5 stroke-[1.5]" />
                </button>
                <button
                  @click="nextSlide"
                  class="p-2 rounded-full bg-stone-900/90 text-white hover:bg-stone-950 border border-stone-700"
                  aria-label="Slide berikutnya"
                >
                  <ChevronRight class="w-5 h-5 stroke-[1.5]" />
                </button>
              </div>

              <!-- Slide Dots Indicator -->
              <div class="absolute bottom-3 inset-x-0 flex items-center justify-center gap-1.5">
                <span
                  v-for="(_, idx) in project.screenshots"
                  :key="idx"
                  @click="currentSlide = idx"
                  :class="[
                    'h-1.5 rounded-full cursor-pointer transition-all',
                    idx === currentSlide ? 'bg-white w-6' : 'bg-white/40 w-1.5 hover:bg-white/70'
                  ]"
                />
              </div>
            </div>

            <!-- Perspectives Minimalist Tabs -->
            <div class="flex items-center gap-6 border-b border-hairline-light dark:border-hairline-dark text-xs font-mono">
              <button
                @click="activeTab = 'client'"
                :class="[
                  'pb-3 border-b-2 transition-colors',
                  activeTab === 'client'
                    ? 'border-stone-950 dark:border-stone-100 text-stone-950 dark:text-stone-100 font-medium'
                    : 'border-transparent text-stone-400 hover:text-stone-700 dark:hover:text-stone-300'
                ]"
              >
                [ 01 — Kebutuhan & Nilai Solusi ]
              </button>
              <button
                @click="activeTab = 'tech'"
                :class="[
                  'pb-3 border-b-2 transition-colors',
                  activeTab === 'tech'
                    ? 'border-stone-950 dark:border-stone-100 text-stone-950 dark:text-stone-100 font-medium'
                    : 'border-transparent text-stone-400 hover:text-stone-700 dark:hover:text-stone-300'
                ]"
              >
                [ 02 — Spesifikasi Arsitektur Teknis ]
              </button>
            </div>

            <!-- Tab 1: Client & Problem Statement -->
            <div v-if="activeTab === 'client'" class="space-y-6">
              <div class="space-y-1">
                <span class="font-mono text-[10px] uppercase tracking-caps text-stone-400 dark:text-stone-500 block">
                  Target Pengguna
                </span>
                <p class="text-sm text-stone-800 dark:text-stone-200">
                  {{ project.clientView.targetAudience }}
                </p>
              </div>

              <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs leading-relaxed">
                <div class="p-4 rounded-xl border border-hairline-light dark:border-hairline-dark bg-stone-50/70 dark:bg-stone-900/40 space-y-2">
                  <span class="font-mono text-[10px] uppercase tracking-caps text-stone-400 dark:text-stone-500 block">
                    Kendala Lapangan:
                  </span>
                  <p class="text-stone-600 dark:text-stone-300">
                    {{ project.clientView.problem }}
                  </p>
                </div>

                <div class="p-4 rounded-xl border border-hairline-light dark:border-hairline-dark bg-stone-50/70 dark:bg-stone-900/40 space-y-2">
                  <span class="font-mono text-[10px] uppercase tracking-caps text-stone-400 dark:text-stone-500 block">
                    Solusi yang Diterapkan:
                  </span>
                  <p class="text-stone-600 dark:text-stone-300">
                    {{ project.clientView.solution }}
                  </p>
                </div>
              </div>

              <div class="space-y-3">
                <span class="font-mono text-[10px] uppercase tracking-caps text-stone-400 dark:text-stone-500 block">
                  Manfaat Operasional Riil:
                </span>
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-stone-700 dark:text-stone-300">
                  <div
                    v-for="benefit in project.clientView.keyBenefits"
                    :key="benefit"
                    class="flex items-start gap-2"
                  >
                    <CheckCircle2 class="w-3.5 h-3.5 text-stone-900 dark:text-stone-100 shrink-0 mt-0.5 stroke-[1.5]" />
                    <span>{{ benefit }}</span>
                  </div>
                </div>
              </div>
            </div>

            <!-- Tab 2: Technical Specs -->
            <div v-else class="space-y-6">
              <div class="space-y-2">
                <span class="font-mono text-[10px] uppercase tracking-caps text-stone-400 dark:text-stone-500 block">
                  Tech Stack
                </span>
                <div class="flex flex-wrap gap-2">
                  <span
                    v-for="tech in project.techView.stack"
                    :key="tech"
                    class="px-2.5 py-1 rounded-md text-xs font-mono border border-hairline-light dark:border-hairline-dark bg-stone-50 dark:bg-stone-900 text-stone-700 dark:text-stone-300"
                  >
                    {{ tech }}
                  </span>
                </div>
              </div>

              <div class="p-4 rounded-xl border border-hairline-light dark:border-hairline-dark bg-stone-50/70 dark:bg-stone-900/40 space-y-1.5">
                <span class="font-mono text-[10px] uppercase tracking-caps text-stone-400 dark:text-stone-500 block">
                  Pola Arsitektur
                </span>
                <p class="text-xs font-mono text-stone-700 dark:text-stone-300 leading-relaxed">
                  {{ project.techView.architecture }}
                </p>
              </div>

              <div class="space-y-2">
                <span class="font-mono text-[10px] uppercase tracking-caps text-stone-400 dark:text-stone-500 block">
                  Highlight Rekayasa Teknis:
                </span>
                <ul class="space-y-1.5 text-xs text-stone-600 dark:text-stone-300">
                  <li
                    v-for="point in project.techView.technicalHighlights"
                    :key="point"
                    class="flex items-start gap-2"
                  >
                    <span class="text-stone-400 select-none font-mono">―</span>
                    <span>{{ point }}</span>
                  </li>
                </ul>
              </div>
            </div>

          </div>

          <!-- Bottom Actions Bar -->
          <div class="px-6 py-4 border-t border-hairline-light dark:border-hairline-dark flex items-center justify-between text-xs font-mono shrink-0">
            <div class="flex items-center gap-4">
              <a
                v-if="project.links.demo"
                :href="project.links.demo"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex items-center gap-1.5 text-stone-900 dark:text-stone-100 hover:opacity-70 transition-opacity underline underline-offset-4"
              >
                <span>Kunjungi Live Demo</span>
                <ExternalLink class="w-3.5 h-3.5 stroke-[1.5]" />
              </a>

              <a
                v-if="project.links.github"
                :href="project.links.github"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex items-center gap-1.5 text-stone-500 hover:text-stone-950 dark:hover:text-stone-100 transition-colors"
              >
                <IconGithub class="w-3.5 h-3.5" />
                <span>Repositori GitHub</span>
              </a>
            </div>

            <button
              @click="emit('close')"
              class="text-stone-400 hover:text-stone-950 dark:hover:text-stone-100 transition-colors"
            >
              Tutup [Esc]
            </button>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>
