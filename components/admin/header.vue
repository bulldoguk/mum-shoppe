<template>
  <div>
    <div class="w-full">
      <form class="flex flex-row gap-4 justify-around">
        <select
          v-model="selectedStore"
          @change="loadBundles"
          class="dark:text-gray-700"
        >
          <option
            v-for="(store, index) of selectStoreList"
            :key="index"
            :value="store"
            :selected="!selectedStore && store.mode === 'new' ? 'selected' : ''"
          >
            {{ store.title }}
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
    loadBundles(event) {
      this.$emit('loadBundles', { ...event.target.selectedOptions[0]._value })
    }
  },
})
</script>
