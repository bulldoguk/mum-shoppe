<template>
  <div class="usericon">
    <button
      type="button"
      :class="$auth.loggedIn ? 'bg-gray-800' : 'bg-white'"
      id="user-menu-button"
      aria-expanded="false"
      data-dropdown-toggle="dropdown"
      @click="$emit('userProfileClick')"
    >
      <span class="sr-only">Open user menu</span>
      <img
        v-if="useImage"
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
