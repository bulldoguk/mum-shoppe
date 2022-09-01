<template>
  <div>
    <div v-if="isMainIndex">
      <CardsShoppe
        v-for="shoppe of shoppeList"
        :key="shoppe.id"
        :shoppe="shoppe"
      />
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
      shoppeList: 'shoppes/list',
    }),
    isMainIndex() {
      return (this.$route.params.pathMatch.length === 0)
    },
  },
})
</script>
