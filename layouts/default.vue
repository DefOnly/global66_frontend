<template>
  <div class="min-h-screen flex flex-col">
    <AppHeader />
    <main class="flex-1">
      <Nuxt />
    </main>
    <AppFooter />
  </div>
</template>

<script>
import AppHeader from '~/components/common/AppHeader.vue'

export default {
  name: 'DefaultLayout',
  components: {
    AppHeader,
  }
}
</script>
