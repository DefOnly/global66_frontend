<template>
  <div class="relative w-80 h-80 lg:w-96 lg:h-96">
    <!-- Pedestal/Stand -->
    <div class="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-sm">
      <img
        src="~/assets/images/stand.svg"
        alt="Stand"
        class="w-full"
      />
    </div>

    <!-- Shadow layer - ON the pedestal surface -->
    <div class="absolute top-1/3 left-1/2 -translate-x-1/2 flex items-center justify-center -space-x-8 z-[5]">
      <!-- Shadow for left flag -->
      <div class="w-24 h-24 lg:w-32 lg:h-32 rounded-full bg-black/20 blur-2xl opacity-60"></div>

      <!-- Shadow for right flag -->
      <div class="w-24 h-24 lg:w-32 lg:h-32 rounded-full bg-black/20 blur-2xl opacity-60"></div>
    </div>

    <!-- Flags Container - ON TOP of pedestal -->
    <div class="absolute top-1/3 left-1/2 -translate-x-1/2 flex items-center justify-center">
      <!-- Flag Target Currency (behind) -->
      <div class="relative z-[8]">
        <!-- Outer transparent ring (glassmorphism) -->
        <div class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 lg:w-40 lg:h-40 rounded-full bg-gradient-to-br from-primary-300/40 to-primary-400/30 backdrop-blur-md"></div>

        <!-- Middle ring -->
        <div class="relative w-24 h-24 lg:w-32 lg:h-32 rounded-full bg-gradient-to-br from-primary-200/30 to-primary-300/20 backdrop-blur-sm shadow-2xl flex items-center justify-center">
          <!-- Inner white circle with flag -->
          <div class="w-20 h-20 lg:w-28 lg:h-28 rounded-full bg-white shadow-lg overflow-hidden">
            <img
              :src="targetFlagSrc"
              :alt="currency.country"
              class="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      <!-- Arrow - Green indicator (on top of flags) -->
      <div class="absolute -top-2 left-1/2 -translate-x-1/2 z-[11]">
        <img
          src="~/assets/images/arrow.svg"
          alt="Exchange"
          class="w-12 h-12 lg:w-14 lg:h-14 drop-shadow-lg"
        />
      </div>

      <!-- Flag USD (front - always on top) -->
      <div class="relative z-10">
        <!-- Outer transparent ring (glassmorphism) -->
        <div class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 lg:w-40 lg:h-40 rounded-full bg-gradient-to-br from-primary-300/40 to-primary-400/30 backdrop-blur-md"></div>

        <!-- Middle ring -->
        <div class="relative w-24 h-24 lg:w-32 lg:h-32 rounded-full bg-gradient-to-br from-primary-200/30 to-primary-300/20 backdrop-blur-sm shadow-2xl flex items-center justify-center">
          <!-- Inner white circle with flag -->
          <div class="w-20 h-20 lg:w-28 lg:h-28 rounded-full bg-white shadow-lg overflow-hidden">
            <img
              src="~/assets/images/united-states-of-america.svg"
              alt="Estados Unidos"
              class="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FlagStand',
  props: {
    currency: {
      type: Object,
      required: true
    }
  },
  computed: {
    targetFlagSrc() {
      const flagMap = {
        CLP: require('~/assets/images/Flag.svg'),
        PEN: require('~/assets/images/Flag-1.svg'),
        USD: require('~/assets/images/united-states-of-america.svg')
      }
      return flagMap[this.currency.code] || flagMap.USD
    }
  }
}
</script>
