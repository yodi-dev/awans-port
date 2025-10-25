<script setup>
import { ref, onMounted } from 'vue'
import { getPublicLogs, addLog } from '@/services/devlogService'

const logs = ref([])
const loading = ref(false)
const showForm = ref(false)
const password = ref('')
const correctPassword = 'Red10yo*'

const form = ref({ title: '', content: '', is_public: true })
const canWrite = ref(false)

onMounted(async () => {
    loading.value = true
    logs.value = await getPublicLogs()
    loading.value = false
})

async function handlePasswordSubmit() {
    if (password.value === correctPassword) canWrite.value = true
    password.value = ''
}

async function handleSubmit() {
    if (!form.value.content.trim()) return
    await addLog(form.value)
    logs.value = await getPublicLogs()
    form.value = { title: '', content: '', is_public: true }
    showForm.value = false
}
</script>

<template>
    <main class="max-w-xl mx-auto p-4">
        <h1 class="text-2xl font-bold mb-4">Dev Log</h1>

        <button @click="showForm = !showForm" class="px-3 py-2 bg-blue-600 text-white rounded">
            {{ showForm ? 'Cancel' : 'Add Log' }}
        </button>

        <div v-if="showForm" class="mt-4 space-y-4">
            <div v-if="!canWrite">
                <input v-model="password" type="password" placeholder="Enter password"
                    class="border p-2 w-full rounded" />
                <button @click="handlePasswordSubmit"
                    class="bg-green-600 text-white px-3 py-2 rounded mt-2">Confirm</button>
            </div>

            <div v-else>
                <input v-model="form.title" type="text" placeholder="Title (optional)"
                    class="border p-2 w-full rounded" />
                <textarea v-model="form.content" placeholder="What did you do today?"
                    class="border p-2 w-full rounded h-32"></textarea>
                <label class="block mt-2">
                    <input type="checkbox" v-model="form.is_public" /> Public
                </label>
                <button @click="handleSubmit" class="bg-blue-600 text-white px-3 py-2 rounded mt-2">Save</button>
            </div>
        </div>

        <div class="mt-6">
            <div v-if="loading">Loading...</div>
            <div v-else>
                <div v-for="log in logs" :key="log.id" class="border-b py-3">
                    <h2 v-if="log.title" class="font-semibold">{{ log.title }}</h2>
                    <p class="whitespace-pre-line">{{ log.content }}</p>
                    <small class="text-gray-500">{{ new Date(log.created_at).toLocaleString() }}</small>
                </div>
            </div>
        </div>
    </main>
</template>
