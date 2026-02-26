<template>
  <section class="bg-primary-800 py-16 lg:py-24">
    <div class="container-app">
      <div class="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
        <div class="flex-1 text-center lg:text-left">
          <ExchangeDisplay
            :currency="currency"
            :rate="rate"
            :as-of="asOf"
          />
        </div>

        <div class="flex-1 flex justify-center lg:justify-end">
          <FlagStand :currency="currency" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import ExchangeDisplay from './ExchangeDisplay.vue'
import FlagStand from './FlagStand.vue'

export default {
  name: 'HeroSection',
  components: {
    ExchangeDisplay,
    FlagStand
  },
  props: {
    currency: {
      type: Object,
      required: true
    },
    rate: {
      type: Number,
      required: true
    },
    asOf: {
      type: String,
      required: true
    }
  }
}
</script>
