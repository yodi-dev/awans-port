<template>
    <Transition name="fade">
      <div v-if="show" class="fixed inset-0 bg-black/60 z-50 flex items-center justify-center px-4">
        <div class="bg-white max-w-3xl w-full rounded-lg overflow-hidden shadow-lg relative">
          <button @click="close" class="absolute top-4 right-4 text-gray-500 hover:text-black">✕</button>
  
          <div class="p-6">
            <h3 class="text-2xl font-semibold mb-2">{{ project.title }}</h3>
            <div class="flex flex-wrap gap-2 mb-4">
              <span
                v-for="tech in project.stack.split(',')"
                :key="tech"
                class="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded"
              >
                {{ tech.trim() }}
              </span>
            </div>
            <p class="text-gray-600 mb-4">{{ project.description }}</p>
  
            <div v-if="project.screenshots?.length" class="relative">
              <img
                :src="project.screenshots[currentIndex]"
                class="w-full h-64 object-cover rounded transition-all"
                alt="Screenshot"
              />
              <div class="flex justify-between absolute inset-0 items-center px-4">
                <button
                  @click="prev"
                  class="bg-white/80 hover:bg-white text-black rounded-full p-2"
                > <
                </button>
                <button
                  @click="next"
                  class="bg-white/80 hover:bg-white text-black rounded-full p-2"
                > >
                </button>
              </div>
            </div>
  
            <div v-if="project.link" class="mt-6">
              <a
                :href="project.link"
                target="_blank"
                class="text-blue-600 text-sm hover:underline"
              >
                🔗 Kunjungi Proyek
              </a>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </template>
  
  <script setup>
  import { ref, watch } from 'vue'
  
  const props = defineProps({
    project: Object,
    show: Boolean,
  })
  const emit = defineEmits(['close'])
  
  const currentIndex = ref(0)
  
  watch(() => props.show, (val) => {
    if (val) currentIndex.value = 0
  })
  
  const close = () => emit('close')
  const prev = () => {
    currentIndex.value =
      (currentIndex.value - 1 + props.project.screenshots.length) %
      props.project.screenshots.length
  }
  const next = () => {
    currentIndex.value = (currentIndex.value + 1) % props.project.screenshots.length
  }
  </script>
  
  <style scoped>
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.3s;
  }
  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
  }
  </style>
  