<template>
  <div class="customerSection">
    <div class="flex flex-row justify-between">
      <div>
        <h1 class="capitalize">Contact Information</h1>
      </div>
    </div>
    <div>
      <a @click="findMyOrder">Find My Order</a>
      <form>
        <div class="grid md:grid-cols-2 md:gap-6">
          <div>
            <div class="textInput group">
              <input
                type="text"
                name="buyerName"
                id="buyerName"
                class="block py-2.5 px-0 w-full print:text-xs text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required=""
                v-model="buyerName"
                @input="makeDirty()"
              />
              <label
                for="buyerName"
                class="peer-focus:font-medium absolute print:text-xs text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >Buyers name</label
              >
            </div>
            <div class="textInput group">
              <input
                type="email"
                name="email"
                id="email"
                class="block py-2.5 px-0 w-full print:text-xs text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required=""
                v-model="email"
                @input="makeDirty()"
              />
              <label
                for="email"
                class="peer-focus:font-medium absolute print:text-xs text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >Email</label
              >
            </div>
            <div class="textInput group">
              <input
                type="phone"
                name="cellPhone"
                id="cellPhone"
                class="block py-2.5 px-0 w-full print:text-xs text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required=""
                v-model="cellPhone"
                @input="makeDirty()"
              />
              <label
                for="cellPhone"
                class="peer-focus:font-medium absolute print:text-xs text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >Cell phone #</label
              >
            </div>
            <div class="checkboxInput">
              <div
                class="block py-2.5 px-0 w-full print:text-xs text-sm text-gray-900 bg-transparent appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              >
                OK to text at this number?
              </div>
              <input
                class="print:text-xs text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                type="checkbox"
                v-model="OKToText"
                @input="makeDirty()"
              />
            </div>
            <div class="textInput group">
              <select
                name="wearerGrade"
                id="wearerGrade"
                class="block py-2.5 px-0 w-full print:text-xs text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                v-model="wearerGrade"
                @change="makeDirty()"
              >
                <option
                  v-for="(grade, index) in gradeOptions"
                  :key="index"
                  :value="grade"
                >
                  {{ grade.name }}: {{ grade.colors }}
                </option>
              </select>
              <label
                for="wearerGrade"
                class="peer-focus:font-medium absolute print:text-xs text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >Wearer's grade</label
              >
            </div>
          </div>
          <div>
            <div class="textInput group">
              <input
                type="date"
                name="orderDate"
                id="orderDate"
                class="block py-2.5 px-0 w-full print:text-xs text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required=""
                v-model="orderDate"
                @input="makeDirty()"
              />
              <label
                for="orderDate"
                class="peer-focus:font-medium absolute print:text-xs text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >Date</label
              >
            </div>
            <div class="checkboxInput">
              <div
                class="block py-2.5 px-0 w-full print:text-xs text-sm text-gray-900 bg-transparent appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              >
                Member of KHS Band?
              </div>
              <input
                class="print:text-xs text-sm text-gray-900 bg-transparent dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                type="checkbox"
                v-model="KHSBandMember"
                @input="makeDirty()"
              />
            </div>
            <div class="checkboxInput">
              <div
                class="block py-2.5 px-0 w-full print:text-xs text-sm text-gray-900 bg-transparent appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              >
                Member of KHS Band Color Guard?
              </div>
              <input
                class="print:text-xs text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                type="checkbox"
                v-model="KHSBandMemberColorGuard"
                @input="makeDirty()"
              />
            </div>
            <div class="textInput group">
              <input
                type="text"
                name="bandInstrument"
                id="orderDate"
                class="block py-2.5 px-0 w-full print:text-xs text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required=""
                v-model="bandInstrument"
                @input="makeDirty()"
              />
              <label
                for="bandInstrument"
                class="peer-focus:font-medium absolute print:text-xs text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >Band instrument</label
              >
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
    wearerGrade: {
      get() {
        return this.customer['wearerGrade']
      },
      set(newVal) {
        this.setCustomer({ key: 'wearerGrade', value: newVal })
      },
    },
    bandInstrument: {
      get() {
        return this.customer['bandInstrument']
      },
      set(newVal) {
        this.setCustomer({ key: 'bandInstrument', value: newVal })
      },
    },
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
    email: {
      get() {
        return this.customer['email']
      },
      set(newVal) {
        this.setCustomer({ key: 'email', value: newVal })
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
    gradeOptions() {
      const options = [
        { name: 'Freshman', colors: 'red/silver/white' },
        { name: 'Sophomore', colors: 'red/silver/white' },
        { name: 'Junior', colors: 'silver/white' },
        { name: 'Senior', colors: 'gold/white' },
      ]
      return options
    },
  },
  methods: {
    ...mapMutations({
      setCustomer: 'order/updateCustomer',
    }),
    makeDirty() {
      return true
    },
    findMyOrder() {
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
    },
  },
})
</script>
