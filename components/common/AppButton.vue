<template>
  <component
    :is="tag"
    :to="to"
    :href="href"
    :type="type"
    :class="buttonClasses"
    :disabled="disabled"
    v-bind="$attrs"
    v-on="$listeners"
  >
    <slot />
  </component>
</template>

<script>
export default {
  name: 'AppButton',
  props: {
    variant: {
      type: String,
      default: 'primary',
      validator: (v) => ['primary', 'secondary', 'outline'].includes(v)
    },
    size: {
      type: String,
      default: 'md',
      validator: (v) => ['sm', 'md', 'lg'].includes(v)
    },
    to: {
      type: String,
      default: null
    },
    href: {
      type: String,
      default: null
    },
    type: {
      type: String,
      default: 'button'
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    tag() {
      if (this.to) return 'nuxt-link'
      if (this.href) return 'a'
      return 'button'
    },
    buttonClasses() {
      const base = 'inline-flex items-center justify-center font-semibold rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2'

      const variants = {
        primary: 'bg-accent-green text-white hover:bg-accent-green-hover focus:ring-accent-green',
        secondary: 'bg-gray-100 text-gray-700 hover:bg-gray-200 focus:ring-gray-300',
        outline: 'border-2 border-primary-600 text-primary-600 hover:bg-primary-50 focus:ring-primary-500'
      }

      const sizes = {
        sm: 'px-4 py-1.5 text-sm',
        md: 'px-6 py-2.5 text-sm',
        lg: 'px-8 py-3 text-base'
      }

      const disabledClass = this.disabled ? 'opacity-50 cursor-not-allowed' : ''

      return `${base} ${variants[this.variant]} ${sizes[this.size]} ${disabledClass}`
    }
  }
}
</script>
