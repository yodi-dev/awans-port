<script setup>
import { RouterView } from "vue-router";
</script>

<template>
  <div class="min-h-screen flex flex-col bg-white text-gray-800">
    <!-- Header -->
    <header class="w-full py-5 px-20 flex items-center justify-end">
      <p class="font-akaya text-2xl font-medium"><a href="/">awanbeo</a></p>
    </header>

    <!-- Main Content -->
    <main class="flex-1 px-6">
      <RouterView />
    </main>

    <!-- Bottom Navbar -->
    <!-- <nav class="fixed bottom-0 left-0 right-0 bg-blue-900 h-16 md:h-20 px-4 z-50">
      <ul class="h-full flex justify-around items-center text-white font-semibold">
        <li>
          <router-link to="/" title="Home" class="hover:text-blue-300">
            <i class="fa-solid fa-house-chimney text-xl md:text-2xl"></i>
          </router-link>
        </li>
        <li>
          <router-link to="/news" title="News" class="hover:text-blue-300">
            <i class="fa-solid fa-newspaper text-xl md:text-2xl"></i>
          </router-link>
        </li>
      </ul>
    </nav> -->

    <footer class="mt-12 text-center border-t py-6 text-sm text-gray-400">
      Created with ❤️ by awanbeo | 2025 |
      <RouterLink to="/devlog" class="font-medium hover:underline">Dev Log</RouterLink>
    </footer>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Akaya+Kanadaka&display=swap');

.font-akaya {
  font-family: 'Akaya Kanadaka', system-ui;
}
</style>
