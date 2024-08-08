<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header class="d-flex pt-5 pe-5 justify-content-end align-items-center">
    <img class="me-1" src="@/assets/logo.svg" alt="brand logo">
    <p class="brand">awan.</p>
  </header>
  <RouterView />
</template>

<style scoped>
  .brand {
    font-family: "Akaya Kanadaka", system-ui;
    font-weight: 500;
    font-size: 3em;
    font-style: normal;
  }
</style>
