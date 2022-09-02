<template>
  <div :class="useclass">{{ formattedPrice }}</div>
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
    useclass: {
      type: String,
      default: ''
    }
  },
  computed: {
    formattedPrice() {
      if (this.price === 0 && this.showfree) {
        return 'FREE'
      }
      return this.price.toLocaleString("en-US", {style:"currency", currency:"USD"})
    },
  },
})
</script>
