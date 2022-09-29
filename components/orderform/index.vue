<template>
  <div class="orderform">
    <div class="customerSections">
      <Customer />
      <RibbonNames />
    </div>
    <Instructions />
    <Bundles />
    <div class="formSections">
      <Section
        v-for="section of options"
        :key="section.id"
        :section="section"
      />
    </div>
    <TotalAndPayment @submitOrder="submitOrder" />
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
  mounted() {},
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
    }),
    submitOrder() {
      // TODO: validate all forms before submitting
      const uri = `/orders/`
      const payload = { ...this.order }
      this.$api
        .patch(uri, payload)
        .then((resp) => {
          console.log(resp.data)
        })
        .catch((e) => {
          console.log('Failed to update order', e)
        })
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
