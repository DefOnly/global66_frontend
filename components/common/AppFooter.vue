<template>
  <footer class="bg-gray-900 text-white py-12">
    <div class="container-app">
      <div class="flex flex-col md:flex-row justify-between items-center gap-4">
        <p class="text-sm text-gray-400">
          © {{ currentYear }} Global66. Todos los derechos reservados.
        </p>
        <div class="flex items-center gap-6">
          <a href="#" class="text-sm text-gray-400 hover:text-white transition-colors">
            Términos y condiciones
          </a>
          <a href="#" class="text-sm text-gray-400 hover:text-white transition-colors">
            Privacidad
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'AppFooter',
  computed: {
    currentYear() {
      return new Date().getFullYear()
    }
  }
}
</script>
