<template>
  <div class="orderform">
    <a class="cursor-pointer" @click="validateForm">Validate form</a>
    <div class="customerSections">
      <Customer ref="customer" />
      <RibbonNames ref="ribbonNames" />
    </div>
    <Instructions ref="instructions" />
    <Bundles ref="bundles" />
    <div class="formSections">
      <Section
        v-for="section of options"
        :key="section.id"
        :section="section"
      />
    </div>
    <TotalAndPayment @submitOrder="submitOrder" ref="totalAndPayment" />
  </div>
</template>

<script>
import { defineComponent } from '@vue/composition-api'
import { mapGetters, mapMutations } from 'vuex'
import RibbonNames from './ribbonNames.vue'
import Instructions from './instructions.vue'
import Customer from './customer.vue'
import Bundles from './bundles.vue'
import Section from './section.vue'
import TotalAndPayment from './totalAndPayment.vue'

export default defineComponent({
  setup() {},
  mounted() {
    if (this.$route.query.orderid) {
      const uri = `/orders/byId?orderid=${this.$route.query.orderid}`
      this.$api
        .get(uri)
        .then((resp) => {
          this.newOrder(resp.data)
        })
        .catch((e) => {
          console.log('Failed to load order', e)
        })
    }
  },
  computed: {
    ...mapGetters({
      options: 'options/list',
      shoppeGuid: 'shoppes/getShoppeGuid',
      order: 'order/orderToSend',
    }),
    shopSlug() {
      const parts = this.$route.params.pathMatch.split('/')
      return parts[0]
    },
    thisShoppeGuid() {
      return this.shoppeGuid(this.shopSlug)
    },
  },
  methods: {
    ...mapMutations({
      // addShoppes: 'shoppes/shoppesList',
      newOrder: 'order/newOrder',
    }),
    submitOrder() {
      // TODO: validate all forms before submitting
      const uri = `/orders/`
      const payload = { ...this.order }
      if (!payload.shoppe_guid) {
        payload.shoppe_guid = this.thisShoppeGuid
      }
      console.log('Sending ', payload)
      this.$api
        .patch(uri, payload)
        .then((resp) => {
          console.log(resp.data)
        })
        .catch((e) => {
          console.log('Failed to update order', e)
        })
    },
    validateForm() {
      for (const ref of Object.keys(this.$refs)) {
        console.log('Checking ', this.$refs[ref].validate)
      }
      return true
    },
  },
  components: {
    RibbonNames,
    Instructions,
    Customer,
    Bundles,
    Section,
    TotalAndPayment,
  },
})
</script>
