<template>
  <div class="row g-0 mt-5">
    <div class="col-12">
      <div class="container">
        <h1 class="display-5 fw-semibold mb-3">Top News</h1>
        <div v-if="loading">Loading...</div>
        <div v-if="error">{{ error }}</div>

        <div class="row row-cols-1 row-cols-lg-2">
          <div v-for="article in articles" :key="article.title">
            <div class="col card p-3 m-2">
              <h4 class="">{{ article.title }}</h4>
              <p>{{ article.description }}</p>
              <p>
                {{ article.author }} -
                <a
                  :href="article.url"
                  target="_blank"
                  class="link-dark link-underline-primary"
                  >Read more</a
                >
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      articles: [],
      loading: false,
      error: null,
    };
  },
  methods: {
    fetchNews() {
      this.loading = true;
      const proxyUrl = "https://cors-anywhere.herokuapp.com/";
      const url =
        "https://newsapi.org/v2/top-headlines?country=id&apiKey=01fc5cfe76454309b69abcbbd3bbfc03";
      fetch(proxyUrl + url)
        .then((response) => response.json())
        .then((data) => {
          // console.log(data.articles);

          this.articles = data.articles;
          this.loading = false;
        })
        .catch((error) => {
          this.error = "Failed to fetch news";
          this.loading = false;
        });
    },
  },
  mounted() {
    this.fetchNews();
    // Poll the API every 10 seconds
    setInterval(this.fetchNews, 60000);
  },
};
</script>
