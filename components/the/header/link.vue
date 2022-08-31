<template>
  <li>
    <nuxt-link :to="link" :class="thisClass">{{ text }}</nuxt-link>
  </li>
</template>

<script>
export default {
  props: {
    link: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
    authOnly: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    routeMatch() {
      if (this.$route.fullPath === '/' && this.text.toLowerCase() === 'home')
        return true
      return this.$route.fullPath.includes(this.text.toLowerCase())
    },
    thisClass() {
      if (this.routeMatch) {
        return 'block rounded bg-blue-700 py-2 pr-4 pl-3 text-white dark:text-white md:bg-transparent md:p-0 md:text-blue-700'
      } else {
        return 'block border-b border-gray-100 py-2 pr-4 pl-3 text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-white'
      }
    },
  },
}
</script>
