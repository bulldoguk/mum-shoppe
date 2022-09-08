<template>
  <div>
    <div class="w-full">
      <form class="flex flex-row gap-4 justify-around">
        <select v-model="selectedStore" @change="loadBundles">
          <option
            v-for="(store, index) of selectStoreList"
            :key="index"
            :value="store"
            :selected="!selectedStore && store.mode === 'new' ? 'selected' : ''"
          >
            {{ store.title }}
          </option>
        </select>
        <select v-model="selectedBundle">
          <option
            v-for="(bundle, index) of bundlesList"
            :key="index"
            :value="bundle"
          >
            {{ bundle.size }}: {{ bundle.type }}
          </option>
        </select>
      </form>
    </div>
  </div>
</template>

<script>
import { defineComponent } from '@vue/composition-api'
import { mapGetters } from 'vuex'

export default defineComponent({
  setup() {},
  data() {
    return {
      selectedStore: { guid: '', title: 'Select store', mode: 'select' },
      selectedBundle: { guid: '' },
      bundlesList: [],
      optionsList: [],
    }
  },
  computed: {
    ...mapGetters({
      storeList: 'shoppes/list',
    }),
    selectStoreList() {
      const options = [
        { guid: '', title: 'Select store', mode: 'select' },
        { guid: '', title: 'Add new store', mode: 'new' },
      ]
      return options.concat(this.storeList)
    },
  },
  methods: {
    loadBundles() {
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
  },
})
</script>
