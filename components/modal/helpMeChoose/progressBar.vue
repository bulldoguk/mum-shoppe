<template>
  <div>
    <div class="progressBarWrapper">
      <div class="barDetail" :style="progressStyle">{{ progressLabel }}%</div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  setup() {},
  props: {
    bundleCount: {
      type: Number,
      default: 0,
    },
    sectionCount: {
      type: Number,
      default: 0,
    },
    currentPosition: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
    }
  },
  computed: {
    progress() {
        try {
            return this.currentPosition / (this.bundleCount + this.sectionCount)
        } catch {
            return 0
        }
    },
    progressStyle() {
      return `width: ${this.progressLabel}%`
    },
    progressLabel() {
      return (this.progress * 100).toFixed(0)
    },
  },
})
</script>
