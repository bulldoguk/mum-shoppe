<template>
  <div class="modal-content">
    <div class="modal-header">
      <h1>Find my Order</h1>
      <button
        type="button"
        class="btn-close box-content h-4 w-4 rounded-none border-none p-1 text-black opacity-50 hover:text-black hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none"
        data-bs-dismiss="modal"
        aria-label="Close"
      ></button>
    </div>
    <div class="modal-body">
      <form class="mx-auto">
        <p>
          Enter your email and click <em>find my order</em> - an email will be
          sent to you with a link to each of your orders in the system.
        </p>
        <label
          for="input-group-1"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >Your Email</label
        >
        <div class="relative mb-6">
          <div
            class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none"
          >
            <svg
              aria-hidden="true"
              class="w-5 h-5 text-gray-500 dark:text-gray-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"
              ></path>
              <path
                d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"
              ></path>
            </svg>
          </div>
          <input
            type="text"
            id="input-group-1"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="name@example.com"
            v-model="email"
          />
        </div>
        <div v-if="message.length > 0" class="alerts" :class="messageClass">
          {{ message }}
        </div>
      </form>
    </div>
    <div class="modal-footer">
      <a class="button button-green" @click="findMyOrder">Find my Order</a>
      <a class="button button-gray" @click="resetModal">Close</a>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  data() {
    return {
      email: '',
      message: '',
      messageClass: '',
    }
  },
  methods: {
    ...mapMutations({
      resetModal: 'MODAL_RESET',
    }),
    findMyOrder() {
      this.message = ''
      const pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/

      // Validate email address
      // If fails, throw error
      if (!this.email.match(pattern)) {
        this.message = 'Please enter a valid email address'
        this.messageClass = 'alertDanger'
        // alert ("Please enter a valid email address")
        return
      }
      let uri = `orders/listByCustomer?email=${this.email}`
      const payload = {}
      payload.recipient = this.email
      payload.subject = 'Your Mum Shoppe orders'
      this.$api
        .get(uri)
        .then((resp) => {
          const orders = resp.data
          console.log(orders)
          if (orders.length < 1) {
            throw new Error('No orders found')
          }
          payload.body = this.buildEmail(orders)
        })
        .then(() => {
          uri = '/api/sendgrid/postEmail'
          this.$axios
            .post(uri, payload)
            .then((res) => {
              console.log('Returned', res.data)
            })
            .then(() => {
              this.messageClass = 'alertSuccess'
              this.message = 'Your orders have been emailed to you'
            })
            .catch((e) => {
              console.log(e)
              throw new Error('Failed to send email')
            })
        })
        .catch((e) => {
          console.log('Error thrown', e)
          this.messageClass = 'alertDanger'
          this.message =
            'Failed to find your orders, please check your email and try again'
        })
    },
    buildEmail(orders) {
      let body = '<p>Here are your current Mum Shoppe orders</p>'
      body += '<ul>'
      for (const order of orders) {
        const dateParts = order.customer.orderDate
          ? order.customer.orderDate.split('-')
          : []
        body += `<li><a href="${this.$config.serverurl}/${order.shoppeInfo[0].slug}?orderid=${order.guid}">`
        body +=
          dateParts.length > 0
            ? `${dateParts[1]}/${dateParts[2]}/${dateParts[0]}:&nbsp;`
            : ''
        body +=
          order.customer.orderTitle.length > 0
            ? `${order.customer.orderTitle}`
            : ''
        body += `</a></li>`
      }
      body += '</ul>'
      return body
    },
  },
}
</script>
