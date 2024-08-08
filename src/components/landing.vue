<script setup>

</script>

<template>
    <main class="container-lg mt-5">
        <div class="row justify-content-lg-end">
            <div class="col-lg-8 g-0 text-end">
                <h1 class="display-2 fw-semibold">
                    Welcome to <br>
                    My Portfolio
                </h1>
                <p class="text-end fw-light">
                    I'm Awan, a passionate Full Stack Web Developer dedicated to crafting dynamic and responsive web applications. I thrive on tackling coding challenges and constantly expanding my knowledge to bring innovative ideas to life. Let's build something amazing together!
                </p>
                <button class="btn mt-5">Get in touch</button>
            </div>
        </div>
        <img src="../../public/hero.png" alt="ilustration picture">
    </main>
    <section class="container portfolio">
        <h2 class="display-4 fw-normal text-center mb-5">Portfolio</h2>
        <div class="row">
            <div class="col-4">
                <div class="card">
                    <div class="card-header d-flex align-items-center">
                        <img src="../../public/logo-kam.png" alt="icon of project">
                        <div class="flex-grow-1 ms-2 align-items-center justify-conten-center">
                            <h3 class="m-0 lh-1">SIM Klinik</h3>
                            <p class="m-0 lh-1  ">Laravel, Bootstrap, MySQL</p>
                        </div>
                    </div>
                    <div class="card-body">
                        <p class="fw-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, dolores saepe facilis, maiores sed perspiciatis optio explicabo autem aspernatur velit magni enim, quia libero aperiam officiis nobis similique doloribus fuga assumenda nemo atque sequi. Sint alias dicta, non doloremque iure, odit culpa sit iste minima veniam dolorem eum quo maiores quod magnam repudiandae autem cupiditate voluptas sunt deleniti. </p>
                        <a href="">more...</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="about mt-5">
        <div class="container py-5">
            <h2 class="display-4 fw-normal text-center">About Me</h2>
            <div class="row">
                <div class="col-lg-4">
                    <img src="/public/profil.jpeg" alt="photo profil">
                </div>
                <div class="col-lg-8">
                    <p class="fw-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam labore nulla eligendi voluptatum ratione animi cupiditate nisi consequatur officiis repellendus. Voluptatum earum autem sit quas? Nam nisi, amet rerum debitis harum excepturi, enim quidem sunt molestias est, recusandae iure voluptas! Quibusdam at voluptas magnam, labore, minima itaque quam ex accusantium atque aliquid facilis delectus sit, amet sunt quae voluptatem error accusamus harum natus? Ipsam commodi tempora perferendis modi, nostrum aliquam itaque accusamus voluptatibus alias id perspiciatis quisquam minus tempore molestias dolorum eaque? Eum reprehenderit ullam iste rem sed corporis quo ipsam delectus distinctio cupiditate in fuga ipsum magnam vel repellendus architecto quisquam vitae, assumenda nam? </p>
                    <p class="fw-light">Maiores reprehenderit quisquam impedit nihil labore ex maxime nostrum facilis porro incidunt pariatur dicta enim quia dignissimos exercitationem in sapiente, ipsum commodi blanditiis numquam alias ad iusto inventore deserunt? Incidunt eos corporis in quam, ipsam sint, ex possimus distinctio quidem numquam dolores? Consectetur hic in porro et necessitatibus nulla deleniti unde dolore tenetur. Perferendis odit, blanditiis eveniet ab quia quisquam iusto aspernatur quae unde eius numquam error repellat aliquid saepe mollitia totam optio id. Architecto ullam error culpa repellat esse minus, odit accusamus, quaerat, saepe tempore dolor officia delectus? Nobis at nostrum sit quam non?</p>
                    <div class="contact"><i></i>Umbulharjo, Yogyakarta</div>
                </div>
            </div>
        </div>
    </section>
    <footer class="container d-flex justify-content-center align-items-center">
        <p class="m-0">Copyright Yodi Irawan @ 2024</p>
    </footer>
</template>

<style scoped>

main button {
    background-color: #1B2C45;
    color: #F8F4F3;
}

main button:hover {
    border: 2px solid #1B2C45;
    background-color: #F8F4F3;
    color: #1B2C45;
}

main img {
    position: absolute;
    top: 200px;
    left: 0;
    max-width: 500px;
}

.portfolio {
    margin-top: 200px;
}

.portfolio .card {
    background-color: #DBD9DC;
    color: #1B2C45;
}

.card img {
    width: 5rem;
}

.about {
    background-color: #DBD9DC;
}

.about img {
    width: 20rem;
    border-radius: 15rem;
}
.about p {
    text-align: justify;
}

footer {
    height: 5rem;
}

@media (max-width: 576px) { 
    main img {
    top:60%;
}
}
</style>