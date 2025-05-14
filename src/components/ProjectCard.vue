<template>
    <div class="bg-white rounded-lg shadow-md hover:shadow-xl transition-all overflow-hidden group">
        <img :src="project.image" alt="Preview"
            class="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" />

        <div class="p-6 flex flex-col h-full">
            <h3 class="text-xl font-semibold text-gray-800 mb-2">{{ project.title }}</h3>

            <div class="flex flex-wrap gap-2 mb-4">
                <span v-for="tech in project.stack.split(',')" :key="tech"
                    class="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                    {{ tech.trim() }}
                </span>
            </div>

            <p class="text-gray-600 text-sm flex-grow">{{ project.description }}</p>

            <div v-if="project.link" class="mt-4">
                <a :href="project.link" target="_blank" class="text-blue-600 text-sm hover:underline">
                    🔗 Lihat Proyek
                </a>
            </div>
        </div>
    </div>
</template>

<script setup>
defineProps({
    project: Object,
})
</script>
