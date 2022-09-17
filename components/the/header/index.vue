<template>
  <div class="header">
    <nav>
      <div>
        <nuxt-link :to="'/'" class="logo">
          <img
            src="~/assets/images/cookoffchampslogo.png"
            alt="CookOffChamps logo"
          />
          <span>Mum Shoppe</span>
        </nuxt-link>
        <nuxt-link :to="'/admin'">
          Admin
        </nuxt-link>
        <div><TheHeaderTotal /></div>
      </div>
    </nav>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  data() {
    return {
      showUserMenu: false,
      showMobileMenu: false,
    }
  },
  methods: {
    ...mapMutations({
      fireModal: 'MODAL_INIT',
    }),
    toggleUserMenu() {
      if (this.$auth.loggedIn) {
        this.showUserMenu = !this.showUserMenu
      } else {
        this.showUserMenu = false
        this.fireModal('login')
      }
    },
    closeUserMenu() {
      this.showUserMenu = false
    },
    toggleMobileMenu() {
      this.showMobileMenu = !this.showMobileMenu
    },
  },
}
</script>
