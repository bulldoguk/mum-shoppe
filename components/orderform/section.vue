<template>
  <div class="border-b-2">
    <pre>{{ section }}</pre>
  </div>
</template>

<script>
import { defineComponent } from '@vue/composition-api'
import { mapGetters } from 'vuex'

export default defineComponent({
  setup() {},
  props: {
    section: {
      type: Object,
      required: true,
    },
  },
  computed: {
    ...mapGetters({
      default: 'bundles/getDefault',
      credits: 'bundles/getCredits',
    }),
    creditCount() {
      return this.credits(this.section.id)
    },
    isDefault() {
      return this.default(this.section.id)
    }
  },
})
</script>
