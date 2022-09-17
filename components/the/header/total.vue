<template>
  <div class="flex flex-row justify-end" v-if="runningTotal > 0">
    <div>Subtotal:&nbsp;</div>
    <UtilsCurrency :price="runningTotal" />
  </div>
</template>

<script>
import { defineComponent } from '@vue/composition-api'
import { mapGetters } from 'vuex'

export default defineComponent({
  setup() {},
  computed: {
    ...mapGetters({
      runningTotal: 'order/orderTotal',
    }),
  },
})
</script>
