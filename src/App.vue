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

  <nav class="bottom-navbar">
    <ul>
      <li>
        <a title="Home" href="/"><i class="fa-solid fa-house-chimney"></i></a>
      </li>
      <li>
        <a title="News" href="/news"><i class="fa-solid fa-newspaper"></i></a>
      </li>
      <li>
        <a title="Blog" href="/blog"><i class="fa-solid fa-blog"></i></a>
      </li>
    </ul>
  </nav>
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

.bottom-navbar {
  position: fixed;
  bottom: 0;
  right: 0;
  border-radius: 6px 6px 0 0;
  height: 9rem;
  background-color: #384868;
  padding: 10px 0;
  z-index: 1000;
}
.bottom-navbar ul {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin: 0;
  padding: 0;
  list-style: none;
}
.bottom-navbar ul li {
  flex-grow: 1;
  /* height: 2.5rem; */
  text-align: center;
  margin: 10px 0;
  /* padding: 10px; */
}
.bottom-navbar ul li a {
  text-decoration: none;
  color: white;
  font-weight: 600;
  padding: 10px;
}

.bottom-navbar ul li a:hover {
  color: #7d8abc;
  background-color: #fff;
}

@media (min-width: 992px) {
  .wraping {
    padding: 0 100px;
  }
}
</style>
