<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <div class="row justify-content-end g-0">
    <div class="col-lg-12 col-5">
      <header class="container mt-5">
        <div class="d-flex justify-content-end text-end align-items-center">
          <img class="me-1 my-auto" src="@/assets/logo.svg" alt="brand logo" />
          <p class="brand my-auto pb-2">awan.</p>
        </div>
      </header>
    </div>
  </div>
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

@media (min-width: 992px) {
  .wraping {
    padding: 0 100px;
  }
}
</style>
