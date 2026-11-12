<script setup lang="ts">
import { ref, watch, onMounted, onUnmounted } from 'vue'
import type { Project } from '~/data/projects'
import {
  X,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  CheckCircle2,
  Cpu,
  Layers,
  HelpCircle,
  Lightbulb
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
        class="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-slate-950/80 backdrop-blur-sm"
        @click.self="emit('close')"
      >
        <div
          class="relative w-full max-w-4xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl shadow-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col"
        >
          <!-- Header -->
          <div class="flex items-center justify-between px-6 py-4 border-b border-slate-200 dark:border-slate-800 shrink-0">
            <div>
              <span class="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-blue-100 dark:bg-blue-900/60 text-blue-700 dark:text-blue-300">
                {{ project.badge }}
              </span>
              <h3 class="text-xl font-bold text-slate-900 dark:text-white mt-1">
                {{ project.title }}
              </h3>
            </div>
            <button
              @click="emit('close')"
              class="p-2 rounded-xl text-slate-400 hover:text-slate-700 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              aria-label="Tutup Modal"
            >
              <X class="w-5 h-5" />
            </button>
          </div>

          <!-- Modal Scrollable Content -->
          <div class="overflow-y-auto p-6 space-y-6">
            
            <!-- Screenshots Carousel -->
            <div
              v-if="project.screenshots && project.screenshots.length"
              class="relative rounded-2xl overflow-hidden bg-slate-950 border border-slate-200 dark:border-slate-800 aspect-video flex items-center justify-center group"
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
                  class="p-2 rounded-full bg-slate-900/80 text-white hover:bg-slate-900 shadow-lg backdrop-blur-sm"
                  aria-label="Slide sebelumnya"
                >
                  <ChevronLeft class="w-5 h-5" />
                </button>
                <button
                  @click="nextSlide"
                  class="p-2 rounded-full bg-slate-900/80 text-white hover:bg-slate-900 shadow-lg backdrop-blur-sm"
                  aria-label="Slide berikutnya"
                >
                  <ChevronRight class="w-5 h-5" />
                </button>
              </div>

              <!-- Slide Dots Indicator -->
              <div class="absolute bottom-3 inset-x-0 flex items-center justify-center gap-1.5">
                <span
                  v-for="(_, idx) in project.screenshots"
                  :key="idx"
                  @click="currentSlide = idx"
                  :class="[
                    'w-2 h-2 rounded-full cursor-pointer transition-all',
                    idx === currentSlide ? 'bg-blue-500 w-5' : 'bg-white/50 hover:bg-white/80'
                  ]"
                />
              </div>
            </div>

            <!-- Perspective Tabs -->
            <div class="flex items-center gap-2 border-b border-slate-200 dark:border-slate-800">
              <button
                @click="activeTab = 'client'"
                :class="[
                  'pb-3 text-sm font-semibold border-b-2 flex items-center gap-2 transition-colors',
                  activeTab === 'client'
                    ? 'border-blue-600 text-blue-600 dark:text-blue-400'
                    : 'border-transparent text-slate-500 hover:text-slate-800 dark:hover:text-slate-200'
                ]"
              >
                <Lightbulb class="w-4 h-4" />
                <span>Sisi Manfaat & Solusi (Untuk Klien)</span>
              </button>
              <button
                @click="activeTab = 'tech'"
                :class="[
                  'pb-3 text-sm font-semibold border-b-2 flex items-center gap-2 transition-colors',
                  activeTab === 'tech'
                    ? 'border-blue-600 text-blue-600 dark:text-blue-400'
                    : 'border-transparent text-slate-500 hover:text-slate-800 dark:hover:text-slate-200'
                ]"
              >
                <Cpu class="w-4 h-4" />
                <span>Sisi Arsitektur Teknis (Engineering)</span>
              </button>
            </div>

            <!-- Tab Content: Client Perspective -->
            <div v-if="activeTab === 'client'" class="space-y-5 animate-fade-in">
              <div class="p-4 rounded-xl bg-blue-50/70 dark:bg-blue-950/40 border border-blue-100 dark:border-blue-900/60">
                <span class="text-xs font-bold text-blue-800 dark:text-blue-300 uppercase tracking-wider block mb-1">
                  Target Pengguna
                </span>
                <p class="text-sm text-slate-700 dark:text-slate-300">
                  {{ project.clientView.targetAudience }}
                </p>
              </div>

              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div class="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/60">
                  <div class="flex items-center gap-2 text-rose-600 dark:text-rose-400 font-semibold text-sm mb-2">
                    <HelpCircle class="w-4 h-4" />
                    <span>Kendala Lapangan yang Dihadapi:</span>
                  </div>
                  <p class="text-xs leading-relaxed text-slate-600 dark:text-slate-400">
                    {{ project.clientView.problem }}
                  </p>
                </div>

                <div class="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/60">
                  <div class="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-semibold text-sm mb-2">
                    <CheckCircle2 class="w-4 h-4" />
                    <span>Solusi yang Dihadirkan:</span>
                  </div>
                  <p class="text-xs leading-relaxed text-slate-600 dark:text-slate-400">
                    {{ project.clientView.solution }}
                  </p>
                </div>
              </div>

              <div>
                <h4 class="text-sm font-bold text-slate-900 dark:text-white mb-3">
                  Manfaat Utama Operasional:
                </h4>
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  <div
                    v-for="benefit in project.clientView.keyBenefits"
                    :key="benefit"
                    class="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-300"
                  >
                    <CheckCircle2 class="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span>{{ benefit }}</span>
                  </div>
                </div>
              </div>
            </div>

            <!-- Tab Content: Tech Perspective -->
            <div v-else class="space-y-5 animate-fade-in">
              <!-- Tech Stack Badges -->
              <div>
                <span class="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-2">
                  Teknologi yang Digunakan
                </span>
                <div class="flex flex-wrap gap-2">
                  <span
                    v-for="tech in project.techView.stack"
                    :key="tech"
                    class="px-3 py-1 rounded-lg text-xs font-mono font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700"
                  >
                    {{ tech }}
                  </span>
                </div>
              </div>

              <!-- Architecture -->
              <div class="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/60">
                <span class="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-1">
                  Arsitektur & Pola Desain
                </span>
                <p class="text-xs text-slate-700 dark:text-slate-300 leading-relaxed font-mono">
                  {{ project.techView.architecture }}
                </p>
              </div>

              <!-- Technical Highlights -->
              <div>
                <h4 class="text-sm font-bold text-slate-900 dark:text-white mb-2">
                  Sorotan Teknis (Key Engineering Points):
                </h4>
                <ul class="space-y-2">
                  <li
                    v-for="point in project.techView.technicalHighlights"
                    :key="point"
                    class="text-xs text-slate-600 dark:text-slate-400 flex items-start gap-2"
                  >
                    <span class="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0 mt-1.5"></span>
                    <span>{{ point }}</span>
                  </li>
                </ul>
              </div>
            </div>

          </div>

          <!-- Footer Actions -->
          <div class="px-6 py-4 border-t border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50 flex flex-wrap items-center justify-between gap-3 shrink-0">
            <div class="flex items-center gap-3">
              <a
                v-if="project.links.demo"
                :href="project.links.demo"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 transition-colors"
              >
                <span>Kunjungi Live Demo</span>
                <ExternalLink class="w-3.5 h-3.5" />
              </a>

              <a
                v-if="project.links.github"
                :href="project.links.github"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:bg-slate-100 transition-colors"
              >
                <IconGithub class="w-3.5 h-3.5" />
                <span>Lihat di GitHub</span>
              </a>
            </div>

            <button
              @click="emit('close')"
              class="px-4 py-2 rounded-xl text-xs font-medium text-slate-500 hover:text-slate-800 dark:hover:text-slate-200"
            >
              Tutup Pratinjau
            </button>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>
