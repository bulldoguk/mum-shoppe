<template>
  <div class="flex flex-col gap-4 justify-center">
    <AdminHeader @selectStore="selectStore"/>
    <AdminDetailStore :shoppe="selectedStore" v-if="showStoreDetail" />
  </div>
</template>

<script>
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  setup() {},
  data () {
    return {
        selectedStore: {}
    }
  },
  computed: {
    showStoreDetail () {
        if (this.selectedStore.guid && this.selectedStore.guid.length > 1) {
            return true
        }
        if (this.selectedStore.mode === 'new') {
            return true
        }
        return false
    }
  },
  methods: {
    selectStore(event) {
      this.selectedStore = { ...event }
    },
  },
})
</script>
