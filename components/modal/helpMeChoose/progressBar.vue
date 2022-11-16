<template>
  <div>
    <div class="progressBarWrapper">
      <div class="barDetail" :style="progressStyle">{{ progressLabel }}%</div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from '@vue/composition-api'
import { mapGetters } from 'vuex'

export default defineComponent({
  setup() {},
  props: {
    currentPosition: {
      type: Number,
      default: 0,
    },
    targetPosition: {
      type: Number,
      default: 1
    }
  },
  data() {
    return {
    }
  },
  computed: {
    ...mapGetters({
      sectionList: 'options/list'
    }),
    bundleCount () {
      return 1
    },
    sectionCount () {
      return this.sectionList.length
    },
    targetCount () {
      return Math.max(this.bundleCount + this.sectionCount, this.targetPosition, 1)
    },
    progress() {
        try {
            return Math.min(this.currentPosition / this.targetCount, 1)
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
