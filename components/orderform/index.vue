<template>
  <div>
    <OrderformBundles />
    <OrderformSection
      v-for="section of options"
      :key="section.id"
      :section="section"
    />
  </div>
</template>

<script>
import { defineComponent } from '@vue/composition-api'
import { mapGetters, mapMutations } from 'vuex'

export default defineComponent({
  setup() {},
  mounted() {},
  computed: {
    ...mapGetters({
      options: 'options/list',
      shoppeGuid: 'shoppes/getShoppeGuid',
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
  },
})
</script>
