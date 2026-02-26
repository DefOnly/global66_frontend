<template>
  <div>
    <HeroSection
      :currency="currency"
      :rate="rate"
      :as-of="asOf"
    />
    <FeatureSection />
  </div>
</template>

<script>
import { getCurrencyBySlug } from '~/utils/currencies'
import HeroSection from '~/components/hero/HeroSection.vue'
import FeatureSection from '~/components/features/FeatureSection.vue'

export default {
  name: 'PrecioPage',
  components: {
    HeroSection,
    FeatureSection
  },
  async asyncData({ params, $axios, error }) {
    const slug = params.slug
    const currency = getCurrencyBySlug(slug)

    if (!currency) {
      return error({ statusCode: 404, message: 'Divisa no encontrada' })
    }

    try {
      const { data } = await $axios.get('/api/rates', {
        params: { base: 'USD', target: currency.code }
      })

      return {
        slug,
        currency,
        rate: data.rates[currency.code],
        asOf: data.asOf
      }
    } catch (e) {
      return error({ statusCode: 500, message: 'Error al obtener tasas de cambio' })
    }
  },
  head() {
    const titles = {
      CLP: 'Valor del dólar hoy en pesos chilenos',
      PEN: 'Valor del dólar hoy en soles peruanos',
      USD: 'Tipo de cambio del dólar'
    }

    const descriptions = {
      CLP: `Consulta el tipo de cambio del dólar a peso chileno hoy: 1 USD = ${this.formattedRate} CLP. Actualizado en tiempo real con Global66.`,
      PEN: `Consulta el tipo de cambio del dólar a sol peruano hoy: 1 USD = ${this.formattedRate} PEN. Actualizado en tiempo real con Global66.`,
      USD: 'Consulta el tipo de cambio del dólar. Actualizado en tiempo real con Global66.'
    }

    const title = `${titles[this.currency.code]} | Global66`
    const description = descriptions[this.currency.code]
    const canonicalUrl = `https://global66.com/precio/${this.slug}`

    return {
      title,
      meta: [
        { hid: 'description', name: 'description', content: description },
        { hid: 'og:title', property: 'og:title', content: title },
        { hid: 'og:description', property: 'og:description', content: description },
        { hid: 'og:url', property: 'og:url', content: canonicalUrl },
        { hid: 'og:type', property: 'og:type', content: 'website' },
        { hid: 'twitter:card', name: 'twitter:card', content: 'summary_large_image' },
        { hid: 'twitter:title', name: 'twitter:title', content: title },
        { hid: 'twitter:description', name: 'twitter:description', content: description }
      ],
      link: [
        { rel: 'canonical', href: canonicalUrl },
        { rel: 'alternate', hreflang: 'es-CL', href: canonicalUrl },
        { rel: 'alternate', hreflang: 'es-PE', href: canonicalUrl },
        { rel: 'alternate', hreflang: 'x-default', href: canonicalUrl }
      ]
    }
  },
  computed: {
    formattedRate() {
      return new Intl.NumberFormat(this.currency.locale, {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
      }).format(this.rate)
    }
  }
}
</script>
