<template>
  <div class="modal-content">
    <div class="modal-header">
      <h1>Save my Order</h1>
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
          Confirm the following information for your order, then either:
          <ol>
            <li>Click "Submit" to send it to your Mum Shoppe and they will be in touch to finalize everything, or</li>
            <li>Click "Save" if you're not quite ready yet!</li>
          </ol>
        </p>
        <div class="relative mb-6">
          <div
            class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none"
          >
          <InformationCircle />
          </div>
          <input
            type="text"
            id="input-group-1"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="My Mum Order"
            v-model="orderTitle"
          />
        </div>

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

        <div class="relative mb-6">
          <div
            class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none"
          >
          <Phone />
          </div>
          <input
            type="phone"
            id="input-group-1"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="555-555-5555"
            v-model="cellPhone"
          />
        </div>


        <div v-if="message.length > 0" class="alerts" :class="messageClass">
          {{ message }}
        </div>
      </form>
    </div>
    <div class="modal-footer">
      <a class="button button-green" @click="saveMyOrder">Save</a>
      <a class="button button-blue" @click="submitMyOrder">Submit</a>
      <a class="button button-gray" @click="resetModal">Close</a>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
import Phone from '../svg/outline/phone.vue'
import InformationCircle from '../svg/outline/informationCircle.vue'
import { thisExpression } from '@babel/types'
export default {
  data() {
    return {
      message: '',
      messageClass: '',
    }
  },
  computed: {
    ...mapGetters({
      customer: 'order/getCustomerDetails',
      order: 'order/orderToSend',
      shoppeGuid: 'shoppes/getShoppeGuid',
    }),
    shopSlug() {
      const parts = this.$route.params.pathMatch.split('/')
      return parts[0]
    },
    thisShoppeGuid() {
      return this.shoppeGuid(this.shopSlug)
    },
    orderTitle: {
      get() {
        return this.customer.orderTitle
      },
      set(newVal) {
        this.setCustomer({ key: 'orderTitle', value: newVal })
      },
    },
    email: {
      get() {
        return this.customer.email
      },
      set(newVal) {
        this.setCustomer({ key: 'email', value: newVal })
      },
    },
    cellPhone: {
      get() {
        return this.customer.cellPhone
      },
      set(newVal) {
        this.setCustomer({ key: 'cellPhone', value: newVal })
      },
    },
  },
  methods: {
    ...mapMutations({
      resetModal: 'MODAL_RESET',
      setCustomer: 'order/updateCustomer',
    }),
    saveMyOrder() {
      console.log('Saving order')
      try {
        this.doValidation()
        this.doSaving()
        this.message = 'Order successfully saved'
        this.messageClass = 'alertSuccess'
      } catch (e) {
        console.log(e)
      }
    },
    submitMyOrder() {
      console.log('Submitting order')
      try {
        this.doValidation()
        this.doSaving()
        this.doSubmit()
        this.message = 'Order successfully submitted'
        this.messageClass = 'alertSuccess'
      } catch (e) {
        console.log(e)
      }
    },
    doValidation() {
      this.message = ''
      const pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/
      if (
        this.cellPhone.length < 1 ||
        this.orderTitle.length < 1 ||
        !this.email.match(pattern)
      ) {
        this.message = 'Please make sure all three fields above are correct'
        this.messageClass = 'alertDanger'
        throw new Error ('Failed to validate form')
      }
      if (this.customer.orderDate.length < 1) { 
        this.setCustomer({ key: 'orderDate', value: new Date().toISOString().split('T')[0] })
      }
    },
    async doSaving() {
      const uri = `/orders/`
      const payload = { ...this.order }
      if (!payload.shoppe_guid) {
        payload.shoppe_guid = this.thisShoppeGuid
      }
      console.log('Sending ', payload)
      await this.$api
        .patch(uri, payload)
        .then((resp) => {
          console.log(resp.data)
        })
        .catch((e) => {
          console.log('Failed to update order', e)
          this.message = 'Failed to save order'
          this.messageClass = 'alertDanger'
          throw new Error('Failed to save order')
        })
    },
    doSubmit() {
      console.log('Email to shoppe organizer here')
    },
  },
  components: { Phone, InformationCircle },
}
</script>
