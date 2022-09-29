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
        <a class="button button-green" @click="findMyOrder('gary@myhmbiz.com')"
          >Find My Order</a
        >
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
    findMyOrder(userEmail) {
      let uri = `orders/listByCustomer?email=${userEmail}`
      const payload = {}
      payload.recipient = userEmail
      payload.subject = 'Your Mum Shoppe orders'
      this.$api
        .get(uri)
        .then((resp) => {
          const orders = resp.data
          payload.body = buildEmail(orders)
        })
        .then(() => {
          uri = '/api/sendgrid/postEmail'
          this.$axios.post(uri, payload).then((res) => {
            console.log('Returned', res.data)
          })
        })
        .catch((e) => {
          console.log('Failed to get orders', e)
        })
      /*
      const payload = {
        recipient: 'gary@myhmbiz.com',
        subject: 'Find my order',
        body: 'Here it is!',
      }
      const uri = '/api/sendgrid/postEmail'
      this.$axios
        .post(uri, payload)
        .then((res) => {
          console.log('Returned', res.data)
        })
        .catch((e) => {
          console.log('Failed to send', e)
        })
        */
    },
  },
}

function buildEmail (orders) {
  let body = '<p>Here are your current Mum Shoppe orders</p>'
  body += '<ul>'
  for (const order of orders) {
    body += `<li><a href="?orderid=${order.guid}">${order.customer.date}</a></li>`
  }
  body += '</ul>'
  return body
}
</script>
