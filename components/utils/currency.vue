<template>
  <div>{{ formattedPrice }}</div>
</template>

<script>
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  setup() {},
  props: {
    price: {
      type: Number,
      required: true,
    },
    showfree: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    formattedPrice() {
      return this.price.toLocaleString("en-US", {style:"currency", currency:"USD"})
    },
  },
})
</script>
