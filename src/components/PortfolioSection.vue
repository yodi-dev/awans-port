<template>
    <section class="bg-gray-50 py-20">
        <div class="container mx-auto px-6">
            <h2 class="text-3xl font-semibold text-center mb-12">Portfolio</h2>

            <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <ProjectCard v-for="project in projects" :key="project.title" :project="project" />
            </div>
        </div>
    </section>
</template>

<script setup>
import ProjectCard from './ProjectCard.vue'
import logoKam from '@/assets/images/logo-kam.png'
import logoPerpus from '@/assets/images/logo-perpus.png'
import logoShop from '@/assets/images/logo-shop.png'

const projects = [
    {
        title: 'SIM Klinik',
        stack: 'Laravel, Bootstrap, MySQL',
        image: logoKam,
        description:
            'A final project built for a clinic in Gunung Kidul, managing patient visits, staff schedules, and financial reports.',
    },
    {
        title: 'Perpus App',
        stack: 'Laravel, Bootstrap, MySQL',
        image: logoPerpus,
        description:
            'A bootcamp project for managing library systems with CRUD and role-based functionality.',
    },
    {
        title: 'POS App',
        stack: 'Vue JS, Vanilla CSS',
        image: logoShop,
        description:
            'A personal practice project using Vue.js with API data display and a clean, responsive UI.',
    },
]
</script>
