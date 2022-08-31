<template>
  <div>
    <button
      type="button"
      class="mr-3 flex rounded-full text-sm focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600 md:mr-0"
      :class="$auth.loggedIn ? 'bg-gray-800' : 'bg-white'"
      id="user-menu-button"
      aria-expanded="false"
      data-dropdown-toggle="dropdown"
      @click="$emit('userProfileClick')"
    >
      <span class="sr-only">Open user menu</span>
      <img
        v-if="useImage"
        class="h-8 w-8 rounded-full"
        :src="image"
        :alt="name"
      />
      <SvgOutlineUser v-else />
    </button>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters({
      user: 'loggedInUser',
    }),
    useImage() {
      return this.$auth.loggedIn
    },
    image() {
      return this.user.picture
    },
    name() {
      return this.user.name
    },
  },
}
</script>
