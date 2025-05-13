<template>
    <div class="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition">
        <div class="flex items-center space-x-4 mb-4">
            <img :src="project.image" alt="project logo" class="w-12 h-12 object-contain" />
            <div>
                <h3 class="font-semibold text-lg">{{ project.title }}</h3>
                <span class="text-sm text-gray-500">{{ project.stack }}</span>
            </div>
        </div>
        <p class="text-sm text-gray-600">{{ project.description }}</p>
    </div>
</template>

<script setup>
defineProps({
    project: Object,
})
</script>
