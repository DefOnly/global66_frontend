<template>
  <div class="flex flex-wrap gap-3 justify-center lg:justify-start">
    <a
      href="https://play.google.com/store"
      target="_blank"
      rel="noopener noreferrer"
      class="transition-opacity hover:opacity-80"
    >
      <img
        src="~/assets/images/playstore.svg"
        alt="Disponible en Google Play"
        class="h-10 lg:h-12"
      />
    </a>

    <a
      href="https://apps.apple.com"
      target="_blank"
      rel="noopener noreferrer"
      class="transition-opacity hover:opacity-80"
    >
      <img
        src="~/assets/images/appstore.svg"
        alt="Descargar en App Store"
        class="h-10 lg:h-12"
      />
    </a>
  </div>
</template>

<script>
export default {
  name: 'StoreBadges'
}
</script>
