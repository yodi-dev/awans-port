<template>
    <section class="container mx-auto px-6 py-20">
        <div class="flex flex-col-reverse lg:flex-row items-center justify-between gap-10">
            <!-- Text Section -->
            <div class="lg:w-2/3 text-center lg:text-right animate-fade-in">
                <h1 class="text-5xl font-bold leading-tight text-gray-900">
                    <span class="block text-2xl font-medium text-gray-600">Welcome to</span>
                    MY PORTFOLIO
                </h1>
                <p class="mt-4 text-gray-600 max-w-2xl lg:ml-auto leading-relaxed">
                    I'm Awan, a passionate Full Stack Web Developer dedicated to crafting dynamic and responsive web
                    applications. I thrive on tackling coding challenges and constantly expanding my knowledge.
                </p>
                <a href="mailto:irawanyodi10@gmail.com"
                    class="inline-block mt-8 px-6 py-3 rounded-md bg-gray-900 text-white hover:bg-white hover:text-gray-900 border-2 border-gray-900 transition duration-300">
                    Get in touch
                </a>
            </div>

            <!-- Image Section -->
            <div class="lg:w-1/3 animate-fade-in-left">
                <img src="@/assets/images/hero.png" alt="illustration" class="w-full max-w-sm mx-auto" />
            </div>
        </div>
    </section>
</template>

<style scoped>
@keyframes fade-in {
    from {
        opacity: 0;
        transform: translateY(30px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}

@keyframes fade-in-left {
    from {
        opacity: 0;
        transform: translateX(-30px);
    }

    to {
        opacity: 1;
        transform: translateX(0);
    }
}

.animate-fade-in {
    animation: fade-in 0.8s ease-out both;
}

.animate-fade-in-left {
    animation: fade-in-left 0.8s ease-out both;
}
</style>
