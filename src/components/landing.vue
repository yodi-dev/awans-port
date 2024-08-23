<script setup></script>

<template>
  <div class="row g-0">
    <div class="col-lg-12 col-12 text-center text-lg-end">
      <main class="container mt-5">
        <div class="row">
          <div class="col-lg-4">
            <img src="../../public/hero.png" alt="ilustration picture" />
          </div>
          <div class="col-lg-8">
            <h1 class="display-2 fw-semibold">
              Welcome to <br />
              My Portfolio
            </h1>
            <p class="text-lg-end fw-light">
              I'm Awan, a passionate Full Stack Web Developer dedicated to
              crafting dynamic and responsive web applications. I thrive on
              tackling coding challenges and constantly expanding my knowledge
              to bring innovative ideas to life. Let's build something amazing
              together!
            </p>
            <button class="btn mt-5">Get in touch</button>
          </div>
        </div>
      </main>
    </div>
  </div>
  <div class="row g-0">
    <div class="col-12">
      <section class="portfolio py-5">
        <div class="container">
          <h2 class="display-4 fw-normal text-center mb-5">Portfolio</h2>
          <div class="row justify-content-center g-4">
            <div class="col-11 col-lg-4">
              <div class="card">
                <div class="card-header d-flex align-items-center">
                  <img src="../../public/logo-kam.png" alt="icon of project" />
                  <div
                    class="flex-grow-1 ms-2 align-items-center justify-conten-center"
                  >
                    <h3 class="m-0 fw-semibold lh-1">SIM Klinik</h3>
                    <span class="m-0 lh-1">Laravel, Bootstrap, MySQL</span>
                  </div>
                </div>
                <div class="card-body text-center">
                  <p class="fw-light">
                    A final project for my Bachelor's degree, developed for a
                    clinic in Gunung Kidul. Built with Laravel and Bootstrap,
                    this system simplifies the management of patient visit data,
                    employee scheduling, and financial reporting with three user
                    levels: doctor, staff, and admin.
                  </p>
                  <!-- <a class="btn btn-sm px-3" href="">Dive in</a> -->
                </div>
              </div>
            </div>
            <div class="col-11 col-lg-4">
              <div class="card">
                <div class="card-header d-flex align-items-center">
                  <img
                    src="../../public/logo-perpus.png"
                    alt="icon of project"
                  />
                  <div
                    class="flex-grow-1 ms-3 align-items-center justify-conten-center"
                  >
                    <h3 class="m-0 lh-1 fw-semibold">Perpus App</h3>
                    <span class="m-0 lh-1">Laravel, Bootstrap, MySQL</span>
                  </div>
                </div>
                <div class="card-body text-center">
                  <p class="fw-light">
                    A final project for a web development bootcamp, built with
                    Laravel and Bootstrap. This application includes all the
                    essential features of a standard library management system.
                  </p>
                  <!-- <a class="btn btn-sm px-3" href="">Dive in</a> -->
                </div>
              </div>
            </div>
            <div class="col-11 col-lg-4">
              <div class="card">
                <div class="card-header d-flex align-items-center">
                  <img src="../../public/logo-shop.png" alt="icon of project" />
                  <div
                    class="flex-grow-1 ms-3 align-items-center justify-conten-center"
                  >
                    <h3 class="m-0 fw-semibold lh-1">POS App</h3>
                    <span class="m-0 lh-1">Vue JS, Vanilla CSS</span>
                  </div>
                </div>
                <div class="card-body text-center">
                  <p class="fw-light">
                    A practice project using Vue.js for the frontend, displaying
                    data from an API. The UI is styled with vanilla CSS.
                  </p>
                  <!-- <a class="btn btn-sm px-3" href="">Dive in</a> -->
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row g-0 mt-5 skill justify-content-center">
          <div class="col-6 col-lg-3">
            <div class="tag-group py-3 d-flex flex-column align-items-center">
              <div class="tag mb-2">
                <i class="fa-brands fa-css3-alt me-2"></i><span>CSS</span>
              </div>
              <div class="tag mb-2">
                <i class="fa-brands fa-html5 me-2"></i><span>HTML</span>
              </div>

              <div class="tag mb-2">
                <i class="fa-brands fa-js me-2"></i><span>JavaScript</span>
              </div>
            </div>
          </div>
          <div class="col-6 col-lg-3">
            <div class="tag-group py-3 d-flex align-items-center flex-column">
              <div class="tag mb-2">
                <i class="fa-brands fa-php me-2"></i><span>PHP</span>
              </div>
              <div class="tag mb-2">
                <i class="fa-solid fa-database me-2"></i><span>MySQL</span>
              </div>
              <div class="tag mb-2">
                <i class="fa-brands fa-bootstrap me-2"></i
                ><span>Bootstrap</span>
              </div>
            </div>
          </div>
          <div class="col-6 col-lg-3">
            <div class="tag-group py-3 align-items-center d-flex flex-column">
              <div class="tag mb-2">
                <i class="fa-brands fa-vuejs me-2"></i><span>Vue Js</span>
              </div>
              <div class="tag mb-2">
                <i class="fa-brands fa-laravel me-2"></i><span>Laravel</span>
              </div>

              <div class="tag mb-2">
                <i class="fa-solid fa-fire me-2"></i><span>CodeIgniter</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
  <div class="row g-0">
    <div class="col-12">
      <section class="about">
        <div class="container py-5">
          <div class="row">
            <div class="col-lg-4 d-flex align-items-end justify-content-center">
              <img src="/public/profil.jpeg" alt="photo profil" />
            </div>
            <div class="col-lg-8">
              <h2 class="display-5 text-center text-lg-start my-4 fw-semibold">
                About Me
              </h2>
              <p class="fw-light">
                I was born and raised on the island of Sumatra, and my passion
                for technology began during my time in vocational high school,
                where I studied Computer and Network Engineering. Toward the end
                of my studies, I became more interested in web development,
                which led me to pursue a degree in Information Technology
                Education, particularly because it included web development
                courses.
              </p>
              <p class="fw-light">
                I began focusing on web development during my final years of
                college, where I gained a solid understanding of various aspects
                of the field, including requirements analysis, development
                methodologies, data structures, basic programming, algorithms,
                decision support systems, and more. Alongside my studies, I also
                took several courses and training programs in web development.
              </p>
              <p class="fw-light">
                Now, having recently completed my Bachelor's degree, I am
                actively seeking job opportunities in the web development
                industry.
              </p>
            </div>
          </div>
        </div>
        <div class="row g-0 mt-5 skill justify-content-center text-center">
          <div class="col-12 col-lg-3">
            <div class="tag-group py-3 d-flex flex-column flex">
              <a
                href="https://maps.app.goo.gl/vC4HZvJt1KhKnopj6"
                target="_blank"
                class="tag mb-2 text-light link-underline link-underline-opacity-0"
              >
                <i class="fa-solid fa-house me-2"></i
                ><span>Umbulharjo, Yogyakarta</span>
              </a>
              <a
                href="mailto:irawanyodi10@gmail.com"
                target="_blank"
                class="tag text-light link-underline link-underline-opacity-0"
              >
                <i class="fa-regular fa-envelope me-2"></i
                ><span>irawanyodi10@gmail.com</span>
              </a>
            </div>
          </div>
          <div class="col-6 col-lg-3">
            <div class="tag-group py-3 d-flex flex-column flex">
              <a
                href="https://www.linkedin.com/in/yodi-irawan/"
                target="_blank"
                class="tag mb-2 text-light link-underline link-underline-opacity-0"
              >
                <i class="fa-brands fa-linkedin-in me-2"></i>
                <span>LinkedIn</span>
              </a>
              <a
                href="https://wa.me/6282279696793"
                target="_blank"
                class="tag text-light link-underline link-underline-opacity-0"
              >
                <i class="fa-brands fa-whatsapp me-2"></i
                ><span>0822 7969 6793</span>
              </a>
            </div>
          </div>
          <div class="col-6 col-lg-3">
            <div class="tag-group py-3 d-flex flex-column flex">
              <div class="tag mb-2">
                <i class="fa-regular fa-heart me-2"></i><span>Musik, Game</span>
              </div>
              <a
                href="https://www.instagram.com/awan.espede/"
                target="_blank"
                class="tag text-light link-underline link-underline-opacity-0"
              >
                <i class="fa-brands fa-instagram me-2"></i
                ><span>@awan.espede</span>
              </a>
            </div>
          </div>
          <footer class="mb-3 pt-3 border-top">
            <p class="m-0 text-center">Copyright Yodi Irawan @ 2024</p>
          </footer>
        </div>
      </section>
    </div>
  </div>
</template>

<style scoped>
main button,
.portfolio .btn {
  background-color: #1b2c45;
  color: #f8f4f3;
}

main button:hover {
  border: 2px solid #1b2c45;
  background-color: #f8f4f3;
  color: #1b2c45;
}

main img {
  position: absolute;
  top: 200px;
  left: 20px;
  max-width: 500px;
}

.portfolio {
  margin-top: 200px;
  background-color: #1b2c45;
  color: #dbd9dc;
}

.portfolio .card {
  background-color: #dbd9dc;
  color: #1b2c45;
  min-height: 20rem;
}

.portfolio p {
  text-indent: 2em;
  text-align: justify;
  text-justify: inter-word;
}

.card img {
  width: 5rem;
}

.skill {
  background-color: #384868;
}

.about {
  background-color: #dbd9dc;
}

.about img {
  width: 18rem;
  border-radius: 15rem;
}

.about p {
  text-align: justify;
}

.about .skill {
  color: #dbd9dc;
}

@media (max-width: 576px) {
  main img {
    display: none;
  }
}
</style>
