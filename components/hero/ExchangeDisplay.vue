<template>
  <div>
    <h1 class="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
      Valor del dólar hoy
    </h1>

    <p class="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
      1 USD = {{ formattedRate }} {{ currency.code }}
    </p>

    <p class="text-sm sm:text-base text-white/80">
      Tipo de cambio para {{ formattedDate }} a las {{ formattedTime }} UTC
    </p>
  </div>
</template>

<script>
import { formatRate, formatDateTime } from '~/utils/formatters'

export default {
  name: 'ExchangeDisplay',
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
  },
  computed: {
    formattedRate() {
      return formatRate(this.rate, this.currency.locale)
    },
    formattedDate() {
      return formatDateTime(this.asOf, this.currency.locale).date
    },
    formattedTime() {
      return formatDateTime(this.asOf, this.currency.locale).time
    }
  }
}
</script>
