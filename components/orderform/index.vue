<template>
  <div class="orderform">
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
    <TotalAndPayment @saveOrder="saveOrder" ref="totalAndPayment" />
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
      fireModal: 'MODAL_INIT',
    }),
    saveOrder() {
      this.fireModal('saveMyOrder')
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
