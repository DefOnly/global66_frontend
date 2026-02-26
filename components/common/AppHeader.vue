<template>
  <header class="bg-primary-800">
    <div class="container-app">
      <div class="flex items-center justify-between h-16">
        <div class="flex items-center gap-8">
          <nuxt-link to="/" class="flex-shrink-0">
            <img
              src="~/assets/images/logo-header.svg"
              alt="Global66"
              class="h-6"
            />
          </nuxt-link>

          <nav class="hidden lg:flex items-center gap-1">
            <a
              href="/"
              class="px-3 py-2 text-sm font-semibold text-white hover:text-white/80"
            >
              PERSONAS
            </a>
            <a
              href="/"
              class="px-3 py-2 text-sm font-medium text-white/70 hover:text-white"
            >
              EMPRESAS
            </a>
          </nav>
        </div>

        <div class="flex items-center gap-3">
          <nav class="hidden lg:flex items-center gap-1">
            <div class="relative group">
              <a href="/" class="px-3 py-2 text-sm font-medium text-white/70 hover:text-white flex items-center gap-1">
                Productos
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
              </a>
            </div>
            <div class="relative group">
              <a href="/" class="px-3 py-2 text-sm font-medium text-white/70 hover:text-white flex items-center gap-1">
                Beneficios
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
              </a>
            </div>
            <a
              href="/"
              class="px-3 py-2 text-sm font-medium text-white/70 hover:text-white"
            >
              Ayuda
            </a>
          </nav>

          <div class="relative group">
            <a href="/" class="px-2 py-2 flex items-center gap-1 hover:opacity-80">
              <img
                src="~/assets/images/Flag.svg"
                alt="Chile"
                class="w-6 h-6 rounded-full object-cover"
              />
              <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </a>
          </div>

          <a
            href="/"
            class="hidden sm:block px-4 py-2 text-sm font-medium text-white hover:text-white/80"
          >
            Iniciar Sesión
          </a>
          <a
            href="/"
            class="px-4 py-2 text-sm font-medium bg-white text-primary-800 rounded-md hover:bg-gray-50 transition-colors"
          >
            Crear cuenta
          </a>

          <button class="lg:hidden p-2 text-white hover:text-white/80">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'AppHeader'
}
</script>
