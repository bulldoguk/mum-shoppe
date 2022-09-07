<template>
  <div>
    <div v-if="isMainIndex">
      <CardsShoppe
        v-for="shoppe of shoppeList"
        :key="shoppe.id"
        :shoppe="shoppe"
      />
    </div>
    <div v-else>
      <Orderform :shoppe="selectedShoppe" />
    </div>
  </div>
</template>

<script>
import { defineComponent } from '@vue/composition-api'
import { mapGetters, mapMutations } from 'vuex'

export default defineComponent({
  setup() {},
  fetch() {
  },
  computed: {
    ...mapGetters({
      shoppeList: 'shoppes/list',
    }),
    isMainIndex() {
      return this.$route.params.pathMatch.length === 0
    },
    selectedShoppe() {
      return this.$route.params.pathMatch
    },
  },
  methods: {
    ...mapMutations({
      // addShoppes: 'shoppes/shoppesList',
    }),
  },
})
</script>
