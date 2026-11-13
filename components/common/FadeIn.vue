<script setup lang="ts">
import { ref, onMounted } from 'vue'

const props = withDefaults(
  defineProps<{
    delay?: number
    direction?: 'up' | 'none'
  }>(),
  {
    delay: 0,
    direction: 'up'
  }
)

const elementRef = ref<HTMLElement | null>(null)
const isVisible = ref(false)

onMounted(() => {
  if (!elementRef.value) return

  // Check if browser supports IntersectionObserver
  if (!('IntersectionObserver' in window)) {
    isVisible.value = true
    return
  }

  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        isVisible.value = true
        observer.disconnect()
      }
    },
    {
      threshold: 0.1,
      rootMargin: '0px 0px -40px 0px'
    }
  )

  observer.observe(elementRef.value)
})
</script>

<template>
  <div
    ref="elementRef"
    :style="{ transitionDelay: `${delay}ms` }"
    :class="[
      'transition-all duration-700 cubic-bezier(0.16, 1, 0.3, 1) motion-reduce:transition-none motion-reduce:transform-none motion-reduce:opacity-100',
      isVisible
        ? 'opacity-100 translate-y-0'
        : direction === 'up'
        ? 'opacity-0 translate-y-7'
        : 'opacity-0'
    ]"
  >
    <slot />
  </div>
</template>
