<template>
  <div class="row g-0 mt-5">
    <div class="col-12">
      <div class="container">
        <h1 class="display-5 fw-semibold mb-3">Top News</h1>
        <div v-if="loading">Loading...</div>
        <div v-if="error">{{ error }}</div>

        <div class="row row-cols-1 row-cols-lg-2">
          <div v-for="(post, index) in data.posts" :key="index">
            <div class="col card p-3 m-2">
              <!-- Thumbnail image -->
              <img
                :src="post.thumbnail"
                alt="Thumbnail"
                class="img-fluid mb-3"
              />

              <!-- Title -->
              <h4 class="">{{ post.title }}</h4>

              <!-- Description -->
              <p>{{ post.description }}</p>

              <!-- Published date -->
              <p class="text-muted">
                {{ formatDate(post.pubDate) }}
              </p>

              <!-- Read more link -->
              <a
                :href="post.link"
                target="_blank"
                class="link-dark link-underline-primary"
                >Read more</a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      data: {
        posts: [],
      },
      loading: false,
      error: null,
    };
  },
  methods: {
    async fetchNews() {
      try {
        this.loading = true;
        const response = await axios.get(
          "https://api-berita-indonesia.vercel.app/cnn/terbaru/"
        );
        // Menyimpan data posts
        this.data.posts = response.data.data.posts;
      } catch (error) {
        this.error = "Failed to fetch news";
        console.error("Error fetching data:", error);
      } finally {
        this.loading = false;
      }
    },
    formatDate(dateString) {
      if (!dateString) return "No Date Available"; // Handle case jika tanggal kosong

      // Log dateString untuk melihat format yang diterima
      // console.log("Date string:", dateString);

      const date = new Date(dateString);
      if (isNaN(date)) return "Invalid Date"; // Handle invalid date

      const options = { year: "numeric", month: "long", day: "numeric" };
      return date.toLocaleDateString(undefined, options);
    },
  },
  mounted() {
    this.fetchNews();
  },
};
</script>
