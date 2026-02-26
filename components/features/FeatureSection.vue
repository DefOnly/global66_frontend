<template>
  <section class="bg-white py-16 lg:py-24">
    <div class="container-app bg-[#F5F7FE] rounded-3xl py-12 lg:py-16 overflow-visible">
      <div class="flex flex-col lg:flex-row items-center gap-12 lg:gap-20 overflow-visible">
        <div class="flex-1 text-center lg:text-left">
          <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Sé Global,<br />
            <span class="text-primary-900">paga como local</span>
          </h2>

          <p class="text-gray-600 mb-8 max-w-md mx-auto lg:mx-0">
            Tu Cuenta Global para pagar, convertir, enviar dinero y más.
          </p>

          <StoreBadges />
        </div>

        <div class="flex-1 flex justify-center relative">
          <img
            src="~/assets/images/banner-img.png"
            alt="App Global66"
            class="max-w-sm lg:max-w-md w-full relative lg:scale-[1.5]"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import StoreBadges from './StoreBadges.vue'

export default {
  name: 'FeatureSection',
  components: {
    StoreBadges
  }
}
</script>
