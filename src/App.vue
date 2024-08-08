<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header class="container-lg mt-5">
    <div class="row justify-content-end">
      <div class="col-lg-auto g-0 d-flex justify-content-end text-end align-items-center">
        <img class="me-1 my-auto" src="@/assets/logo.svg" alt="brand logo">
        <p class="brand my-auto pb-2">awan.</p>
      </div>
    </div>
  </header>
  <RouterView />
</template>

<style scoped>
  img {
    height: 1em;
  }
  .brand {
    font-family: "Akaya Kanadaka", system-ui;
    font-weight: 500;
    font-size: 2em;
    font-style: normal;
  }
</style>
