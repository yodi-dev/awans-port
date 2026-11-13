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
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div
        v-if="show && project"
        class="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-navy-950/80 backdrop-blur-sm"
        @click.self="emit('close')"
      >
        <div
          role="dialog"
          aria-modal="true"
          :aria-labelledby="`modal-title-${project.id}`"
          class="relative w-full max-w-4xl bg-canvas-light dark:bg-canvas-dark border border-hairline-light dark:border-hairline-dark rounded-2xl shadow-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col transition-all duration-300 transform"
        >
          <!-- Top Header -->
          <div class="flex items-center justify-between px-6 py-4 border-b border-hairline-light dark:border-hairline-dark shrink-0">
            <div>
              <span class="font-mono text-[10px] uppercase tracking-caps text-navy-500 dark:text-navy-400">
                {{ project.category }} · {{ project.badge }}
              </span>
              <h3 :id="`modal-title-${project.id}`" class="text-xl font-bold text-navy-900 dark:text-navy-50 tracking-editorial">
                {{ project.title }}
              </h3>
            </div>
            <button
              @click="emit('close')"
              type="button"
              class="p-2 rounded-lg text-navy-400 hover:text-navy-950 dark:hover:text-white hover:bg-navy-100/50 dark:hover:bg-navy-900/50 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-navy-600 dark:focus-visible:ring-linen-200"
              aria-label="Tutup dialog"
            >
              <X class="w-5 h-5 stroke-[1.5]" />
            </button>
          </div>

          <!-- Scrollable Body -->
          <div class="overflow-y-auto p-6 space-y-6">
            
            <!-- Screenshots Frame -->
            <div
              v-if="project.screenshots && project.screenshots.length"
              class="relative rounded-xl overflow-hidden bg-navy-950 border border-hairline-light dark:border-hairline-dark aspect-video flex items-center justify-center group"
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
                  class="p-2 rounded-full bg-navy-900/90 text-white hover:bg-navy-950 border border-navy-700/80 transition-transform active:scale-95"
                  aria-label="Slide sebelumnya"
                >
                  <ChevronLeft class="w-5 h-5 stroke-[1.5]" />
                </button>
                <button
                  @click="nextSlide"
                  class="p-2 rounded-full bg-navy-900/90 text-white hover:bg-navy-950 border border-navy-700/80 transition-transform active:scale-95"
                  aria-label="Slide berikutnya"
                >
                  <ChevronRight class="w-5 h-5 stroke-[1.5]" />
                </button>
              </div>

              <!-- Slide Dots Indicator -->
              <div class="absolute bottom-3 inset-x-0 flex items-center justify-center gap-1.5">
                <button
                  v-for="(_, idx) in project.screenshots"
                  :key="idx"
                  type="button"
                  @click="currentSlide = idx"
                  :aria-label="`Buka slide ${idx + 1} dari ${project.screenshots.length}`"
                  :class="[
                    'h-1.5 rounded-full cursor-pointer transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-white',
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
                    ? 'border-navy-900 dark:border-navy-100 text-navy-900 dark:text-navy-100 font-bold'
                    : 'border-transparent text-navy-400 hover:text-navy-700 dark:hover:text-navy-300'
                ]"
              >
                [ 01 — Kebutuhan & Nilai Solusi ]
              </button>
              <button
                @click="activeTab = 'tech'"
                :class="[
                  'pb-3 border-b-2 transition-colors',
                  activeTab === 'tech'
                    ? 'border-navy-900 dark:border-navy-100 text-navy-900 dark:text-navy-100 font-bold'
                    : 'border-transparent text-navy-400 hover:text-navy-700 dark:hover:text-navy-300'
                ]"
              >
                [ 02 — Spesifikasi Arsitektur Teknis ]
              </button>
            </div>

            <!-- Tab 1: Client & Problem Statement -->
            <div v-if="activeTab === 'client'" class="space-y-6 animate-fade-in">
              <div class="space-y-1">
                <span class="font-mono text-[10px] uppercase tracking-caps text-navy-500 dark:text-navy-400 block font-bold">
                  Target Pengguna
                </span>
                <p class="text-sm text-navy-900 dark:text-navy-100">
                  {{ project.clientView.targetAudience }}
                </p>
              </div>

              <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs leading-relaxed">
                <div class="p-4 rounded-xl border border-hairline-light dark:border-hairline-dark bg-surface-light dark:bg-surface-dark space-y-2">
                  <span class="font-mono text-[10px] uppercase tracking-caps text-navy-500 dark:text-navy-400 block font-bold">
                    Kendala Lapangan:
                  </span>
                  <p class="text-navy-700 dark:text-navy-300">
                    {{ project.clientView.problem }}
                  </p>
                </div>

                <div class="p-4 rounded-xl border border-hairline-light dark:border-hairline-dark bg-surface-light dark:bg-surface-dark space-y-2">
                  <span class="font-mono text-[10px] uppercase tracking-caps text-navy-500 dark:text-navy-400 block font-bold">
                    Solusi yang Diterapkan:
                  </span>
                  <p class="text-navy-700 dark:text-navy-300">
                    {{ project.clientView.solution }}
                  </p>
                </div>
              </div>

              <div class="space-y-3">
                <span class="font-mono text-[10px] uppercase tracking-caps text-navy-500 dark:text-navy-400 block font-bold">
                  Manfaat Operasional Riil:
                </span>
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-navy-800 dark:text-navy-200">
                  <div
                    v-for="benefit in project.clientView.keyBenefits"
                    :key="benefit"
                    class="flex items-start gap-2"
                  >
                    <CheckCircle2 class="w-3.5 h-3.5 text-navy-900 dark:text-navy-100 shrink-0 mt-0.5 stroke-[1.5]" />
                    <span>{{ benefit }}</span>
                  </div>
                </div>
              </div>
            </div>

            <!-- Tab 2: Technical Specs -->
            <div v-else class="space-y-6 animate-fade-in">
              <div class="space-y-2">
                <span class="font-mono text-[10px] uppercase tracking-caps text-navy-500 dark:text-navy-400 block font-bold">
                  Tech Stack
                </span>
                <div class="flex flex-wrap gap-2">
                  <span
                    v-for="tech in project.techView.stack"
                    :key="tech"
                    class="px-2.5 py-1 rounded-md text-xs font-mono border border-hairline-light dark:border-hairline-dark bg-surface-light dark:bg-surface-dark text-navy-800 dark:text-navy-200"
                  >
                    {{ tech }}
                  </span>
                </div>
              </div>

              <div class="p-4 rounded-xl border border-hairline-light dark:border-hairline-dark bg-surface-light dark:bg-surface-dark space-y-1.5">
                <span class="font-mono text-[10px] uppercase tracking-caps text-navy-500 dark:text-navy-400 block font-bold">
                  Pola Arsitektur
                </span>
                <p class="text-xs font-mono text-navy-800 dark:text-navy-200 leading-relaxed">
                  {{ project.techView.architecture }}
                </p>
              </div>

              <div class="space-y-2">
                <span class="font-mono text-[10px] uppercase tracking-caps text-navy-500 dark:text-navy-400 block font-bold">
                  Highlight Rekayasa Teknis:
                </span>
                <ul class="space-y-1.5 text-xs text-navy-700 dark:text-navy-300">
                  <li
                    v-for="point in project.techView.technicalHighlights"
                    :key="point"
                    class="flex items-start gap-2"
                  >
                    <span class="text-navy-400 select-none font-mono">―</span>
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
                class="inline-flex items-center gap-1.5 text-navy-900 dark:text-navy-100 hover:text-navy-600 dark:hover:text-white transition-colors underline underline-offset-4"
              >
                <span>Kunjungi Live Demo</span>
                <ExternalLink class="w-3.5 h-3.5 stroke-[1.5]" />
              </a>

              <a
                v-if="project.links.github"
                :href="project.links.github"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex items-center gap-1.5 text-navy-500 hover:text-navy-950 dark:hover:text-white transition-colors"
              >
                <IconGithub class="w-3.5 h-3.5 shrink-0" />
                <span>Repositori GitHub</span>
              </a>
            </div>

            <button
              @click="emit('close')"
              class="text-navy-400 hover:text-navy-950 dark:hover:text-white transition-colors"
            >
              Tutup [Esc]
            </button>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>
