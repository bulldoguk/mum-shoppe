<template>
  <div>
    <OrderformBundles />
    <OrderformSection v-for="section of options" :key="section.id" :section="section" />
  </div>
</template>

<script>
import { defineComponent } from '@vue/composition-api'
import { mapGetters } from 'vuex'

export default defineComponent({
  setup() {},
  computed: {
    ...mapGetters({
      options: 'options/list'
    })
  }
})
</script>
