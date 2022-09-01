<template>
  <div class="header">
    <nav>
      <div>
        <nuxt-link :to="'/'" class="logo">
          <img
            src="~/assets/images/cookoffchampslogo.png"
            alt="CookOffChamps logo"
          />
          <span>Mum Shoppe</span
          >
        </nuxt-link>
        <div class="center">
          <HeaderUserIcon
            @userProfileClick="toggleUserMenu"
            ref="HeaderUserIcon"
          />
          <HeaderUserMenu
            v-if="showUserMenu"
            ref="HeaderUserMenu"
            @closeUserMenu="closeUserMenu"
          />
          <button
            data-collapse-toggle="mobile-menu-2"
            type="button"
            aria-controls="mobile-menu-2"
            aria-expanded="false"
            @click="toggleMobileMenu"
          >
            <span class="sr-only">Open main menu</span>
            <svg
              class="h-6 w-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <svg
              class="hidden h-6 w-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
        <div
          class="w-full items-center justify-between md:order-1 md:flex md:w-auto"
          id="mobile-menu-2"
          :class="showMobileMenu ? 'block' : 'hidden'"
        >
          <ul
            class="mt-4 flex flex-col md:mt-0 md:flex-row md:space-x-8 md:text-sm md:font-medium"
          >
            <HeaderLink
              :link="'/'"
              :text="'Home'"
              @click.native="toggleMobileMenu"
            />
            <HeaderLink
              :link="'/event/'"
              :text="'Events'"
              @click.native="toggleMobileMenu"
            />
            <HeaderLink
              :link="'/team/'"
              :text="'Teams'"
              @click.native="toggleMobileMenu"
            />
          </ul>
        </div>
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
