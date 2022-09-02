<template>
  <div v-if="runningTotal > 0">
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
