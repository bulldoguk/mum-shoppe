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
        <a class="button button-green" @click="findMyOrder">Find My Order</a>
        <a class="button button-yellow" @click="helpMeChoose">Help me Choose</a>
        <nuxt-link :to="'/admin'"> Admin </nuxt-link>
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
    findMyOrder() {
      this.fireModal('findMyOrder')
    },
    helpMeChoose() {
      this.fireModal('helpMeChoose')
    },
  },
}

function buildEmail(orders) {
  let body = '<p>Here are your current Mum Shoppe orders</p>'
  body += '<ul>'
  for (const order of orders) {
    body += `<li><a href="?orderid=${order.guid}">${order.customer.date}</a></li>`
  }
  body += '</ul>'
  return body
}
</script>
