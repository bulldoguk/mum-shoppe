<template>
  <div class="border-b-2">
    <div class="flex flex-row justify-between">
      <div>
        <h1 class="capitalize">About you</h1>
      </div>
    </div>
    <div>
      <form>
        <div class="grid md:grid-cols-12 md:gap-6">
          <div class="col-span-6">
            <div class="relative z-0 mb-6 w-full group">
              <input
                type="text"
                name="buyerName"
                id="buyerName"
                class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required=""
                v-model="buyerName"
                @input="makeDirty()"
              />
              <label
                for="buyerName"
                class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >Buyers name</label
              >
            </div>
          </div>
          <div class="col-span-6">
            <div class="relative z-0 mb-6 w-full group">
              <input
                type="date"
                name="orderDate"
                id="orderDate"
                class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required=""
                v-model="orderDate"
                @input="makeDirty()"
              />
              <label
                for="orderDate"
                class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >Date</label
              >
            </div>
          </div>
        </div>
        <div class="grid md:grid-cols-12 md:gap-6">
          <div class="col-span-6">
            <div class="relative z-0 mb-6 w-full group">
              <input
                type="phone"
                name="cellPhone"
                id="cellPhone"
                class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required=""
                v-model="cellPhone"
                @input="makeDirty()"
              />
              <label
                for="cellPhone"
                class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >Cell phone #</label
              >
            </div>
          </div>
          <div class="col-span-6">
            <div class="flex flex-row justify-between">
              <div
                class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              >
                Member of KHS Band?
              </div>
              <input
                class="text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                type="checkbox"
                v-model="KHSBandMember"
                @input="makeDirty()"
              />
            </div>
          </div>
        </div>
        <div class="grid md:grid-cols-12 md:gap-6">
          <div class="col-span-6">
            <div class="flex flex-row justify-between">
              <div
                class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              >
                OK to text at this number?
              </div>
              <input
                class="text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                type="checkbox"
                v-model="OKToText"
                @input="makeDirty()"
              />
            </div>
          </div>
          <div class="col-span-6">
            <div class="flex flex-row justify-between">
              <div
                class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              >
                Member of KHS Band Color Guard?
              </div>
              <input
                class="text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                type="checkbox"
                v-model="KHSBandMemberColorGuard"
                @input="makeDirty()"
              />
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { defineComponent } from '@vue/composition-api'
import { mapGetters, mapMutations } from 'vuex'

export default defineComponent({
  setup() {},
  computed: {
    ...mapGetters({
      customer: 'order/getCustomerDetails',
    }),
    KHSBandMemberColorGuard: {
      get() {
        return this.customer['KHSBandMemberColorGuard']
      },
      set(newVal) {
        this.setCustomer({ key: 'KHSBandMemberColorGuard', value: newVal })
      },
    },
    OKToText: {
      get() {
        return this.customer['OKToText']
      },
      set(newVal) {
        this.setCustomer({ key: 'OKToText', value: newVal })
      },
    },
    KHSBandMember: {
      get() {
        return this.customer['KHSBandMember']
      },
      set(newVal) {
        this.setCustomer({ key: 'KHSBandMember', value: newVal })
      },
    },
    cellPhone: {
      get() {
        return this.customer['cellPhone']
      },
      set(newVal) {
        this.setCustomer({ key: 'cellPhone', value: newVal })
      },
    },
    orderDate: {
      get() {
        return this.customer['orderDate']
      },
      set(newVal) {
        this.setCustomer({ key: 'orderDate', value: newVal })
      },
    },
    buyerName: {
      get() {
        return this.customer['buyerName']
      },
      set(newVal) {
        this.setCustomer({ key: 'buyerName', value: newVal })
      },
    },
  },
  methods: {
    ...mapMutations({
      setCustomer: 'order/updateCustomer',
    }),
    makeDirty() {
      return true
    },
  },
})
</script>
