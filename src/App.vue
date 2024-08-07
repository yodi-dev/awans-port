<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <nav>
      <img src="@/assets/logo.svg" alt="brand logo">
      <p class="brand">awan.</p>
    </nav>
  </header>

  <RouterView />
</template>

<style scoped>
  .brand {
    font-family: "Akaya Kanadaka", system-ui;
    font-weight: 500;
    font-style: normal;
  }
</style>
