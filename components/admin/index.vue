<template>
  <div class="flex flex-col gap-4 justify-center">
    <AdminHeader @selectStore="selectStore" @loadBundles="loadBundles" />
    <AdminDetailStore :shoppe="selectedStore" v-if="showStoreDetail" />
    <AdminBundles :bundlesList="bundlesList" :storeGuid="selectedStore.guid" @addBundle="addBundle"
      @deleteBundle="deleteBundle" />
  </div>
</template>

<script>
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  setup() { },
  data() {
    return {
      selectedStore: {
        guid: '',
        mode: '',
      },
      bundlesList: [],
    }
  },
  computed: {
    showStoreDetail() {
      if (this.selectedStore.guid && this.selectedStore.guid.length > 1) {
        return true
      }
      if (this.selectedStore.mode === 'new') {
        return true
      }
      return false
    },
  },
  methods: {
    selectStore(event) {
      this.selectedStore = { ...event }
    },
    loadBundles(event) {
      Object.assign(this.selectedStore, event)
      if (this.selectedStore.mode !== 'select') {
        this.$emit('selectStore', this.selectedStore)
        // Pulls all the bundles for the current store
        if (this.selectedStore.guid) {
          const uri = `bundles/list/${this.selectedStore.guid}`
          this.$api
            .get(uri)
            .then((resp) => {
              this.bundlesList = [...resp.data]
            })
            .catch((e) => {
              console.log('Failed to get bundles', e)
            })
        }
      } else {
        this.bundlesList = []
        this.optionsList = []
      }
    },
    addBundle(event) {
      const bundle = {}
      this.bundlesList.unshift(bundle)
    },
    deleteBundle(guid) {
      console.log('Deleting', guid)
      const index = this.bundlesList.findIndex(e => e.guid === guid)
      this.bundlesList.splice(index, 1)
    }
  },
})
</script>
