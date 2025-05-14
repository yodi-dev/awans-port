<template>
    <section class="bg-gray-50 py-20">
        <div class="container mx-auto px-6">
            <h2 class="text-3xl font-bold text-center mb-12 text-gray-800">Portfolio</h2>

            <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                <ProjectCard v-for="project in projects" :key="project.title" :project="project"
                    @click="openModal(project)" />

                <ProjectModal :project="selectedProject" :show="showModal" @close="showModal = false" />
            </div>
        </div>
    </section>
</template>

<script setup>
import ProjectCard from './ProjectCard.vue'
import ProjectModal from './ProjectModal.vue'
import { ref } from 'vue'

import logoKam from '@/assets/images/kam/banner.png'
import logoPerpus from '@/assets/images/perpus/banner.png'
import logoShop from '@/assets/images/shop/banner.png'

import ssKam1 from '@/assets/images/kam/ss1.png'
import ssKam2 from '@/assets/images/kam/ss2.png'
import ssKam3 from '@/assets/images/kam/ss3.png'
import ssKam4 from '@/assets/images/kam/ss4.png'
import ssKam5 from '@/assets/images/kam/ss5.png'
import ssKam6 from '@/assets/images/kam/ss6.png'
import ssKam7 from '@/assets/images/kam/ss7.png'
import ssKam8 from '@/assets/images/kam/ss8.png'

import ssPerpus1 from '@/assets/images/perpus/ss1.png'
import ssPerpus2 from '@/assets/images/perpus/ss2.png'
import ssPerpus3 from '@/assets/images/perpus/ss3.png'
import ssPerpus4 from '@/assets/images/perpus/ss4.png'

import ssShop1 from '@/assets/images/shop/ss1.png'
import ssShop2 from '@/assets/images/shop/ss2.png'
import ssShop3 from '@/assets/images/shop/ss3.png'
import ssShop4 from '@/assets/images/shop/ss4.png'
import ssShop5 from '@/assets/images/shop/ss5.png'
import ssShop6 from '@/assets/images/shop/ss6.png'
import ssShop7 from '@/assets/images/shop/ss7.png'

const selectedProject = ref(null)
const showModal = ref(false)

const openModal = (project) => {
    selectedProject.value = project
    showModal.value = true
}

const projects = [
    {
        title: 'SIM Klinik Gunung Kidul',
        stack: 'Laravel, Bootstrap, MySQL',
        image: logoKam,
        description:
            'A complete system for a local clinic, featuring patient management, staff scheduling, and financial reports.',
        link: 'https://github.com/yodi-dev/sipdkam-now',
        screenshots: [
            ssKam1,
            ssKam2,
            ssKam3,
            ssKam4,
            ssKam5,
            ssKam6,
            ssKam7,
            ssKam8,
        ],
    },
    {
        title: 'Perpustakaan Digital',
        stack: 'Laravel, Bootstrap, MySQL',
        image: logoPerpus,
        description:
            'A comprehensive web-based system for managing library operations, developed as a capstone project during the Eduwork fullstack bootcamp.',
        link: 'https://github.com/yodi-dev/perpus-smk',
        screenshots: [
            ssPerpus1,
            ssPerpus2,
            ssPerpus3,
            ssPerpus4,
        ],
    },
    {
        title: 'POS App - Habiba Store',
        stack: 'Laravel, Livewire, Tailwind CSS',
        image: logoShop,
        description:
            'A powerful and user-friendly Point of Sale (POS) web application developed to manage product inventory, streamline sales, and generate daily reports.',
        link: 'https://demo.habiba-store.my.id/',
        screenshots: [
            ssShop1,
            ssShop2,
            ssShop3,
            ssShop4,
            ssShop5,
            ssShop6,
            ssShop7,
        ],
    },
]
</script>
