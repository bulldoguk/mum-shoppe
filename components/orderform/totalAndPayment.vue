<template>
  <div class="totalSection">
    <div class="grid md:grid-cols-2 gap-6">
      <div>
        <div class="flex flex-row justify-between">
          <div>Subtotal:</div>
          <div><UtilsCurrency :price="subtotal" /></div>
        </div>
        <div class="flex flex-row justify-between">
          <div>Discount:</div>
          <div><UtilsCurrency :price="discount" /></div>
        </div>
        <div class="flex flex-row justify-between border-t-2 border-b-2">
          <div>Total:</div>
          <div><UtilsCurrency :price="finalTotal" /></div>
        </div>
      </div>
      <div>
        <h2>Make checks payable to</h2>
        <p>We reserve the right to substitute if items are not available</p>
        <p><strong>*** Payment due upon ordering ***</strong></p>
        <p>XXX discount available until XXXth</p>
        <p><strong>No refunds after Mum or Garter is made</strong></p>
        <form>
            <strong>Payment notes here</strong>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from '@vue/composition-api'
import { mapGetters } from 'vuex'

export default defineComponent({
  setup() {},
  computed: {
    ...mapGetters({
      subtotal: 'order/orderTotal',
    }),
    discount () {
        return this.subtotal * -0.15
    },
    finalTotal () {
        return this.subtotal + this.discount
    }
  },
})
</script>
