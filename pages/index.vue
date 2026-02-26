<template>
  <div class="container-app py-20 text-center">
    <h1 class="text-3xl font-bold text-gray-900 mb-4">
      Bienvenido a Global66
    </h1>
    <p class="text-gray-600 mb-8">
      Consulta el tipo de cambio del dólar
    </p>
    <div class="flex flex-col sm:flex-row gap-4 justify-center">
      <nuxt-link
        to="/precio/peso-chileno"
        class="btn-primary inline-block"
      >
        Ver USD → CLP
      </nuxt-link>
      <nuxt-link
        to="/precio/sol-peruano"
        class="btn-primary inline-block"
      >
        Ver USD → PEN
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  head() {
    return {
      title: 'Global66 - Tipo de Cambio',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Consulta el tipo de cambio del dólar en tiempo real. Convierte USD a CLP, PEN y más.'
        }
      ]
    }
  }
}
</script>
