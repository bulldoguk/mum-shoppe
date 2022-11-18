<template>
  <div class="mb-4">
    <h2>Bundle</h2>
    <div class="w-full">
      <div class="relative z-0 mb-6 w-full group">
        <select
          name="size"
          id="size"
          class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          v-model="size"
          @change="makeDirty(6)"
        >
          <option value="">Select flower size:</option>
          <option
            v-for="(option, index) in allSizes"
            :key="index"
            :value="option"
          >
            {{ option }}
          </option>
        </select>
      </div>
    </div>
    <div class="bundleChoices">
      <div class="choice">
        <div
          class="grid grid-cols-12 mx-4"
          v-for="(item, index2) of listBySize"
          :key="index2"
        >
          <div class="col-span-8">
            <span class="capitalize">{{ item.type }}</span
            >: {{ item.description }}
          </div>
          <div class="col-span-1" @click="selectBundle(item)">
            <SvgDynamicCheck :isChecked="isSelected(item.guid)" />
          </div>
          <div class="col-span-2">
            <UtilsCurrency :price="item.price" />
          </div>
          <div class="col-span-1">&nbsp;</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from '@vue/composition-api'
import { get } from 'http'
import { mapGetters, mapMutations } from 'vuex'

export default defineComponent({
  setup() {},
  data() {
    return {
      size: '',
    }
  },
  mounted() {
    try {
      this.size = this.selectedBundle.size.toUpperCase()
    } catch {
      this.size = ''
    }
  },
  computed: {
    ...mapGetters({
      sizes: 'bundles/sizes',
      list: 'bundles/listBySize',
      selectedBundle: 'order/selectedBundle',
      isSelected: 'order/isSelected',
    }),
    allSizes() {
      const sizesArray = []
      for (const size of this.sizes) {
        sizesArray.push(size.toUpperCase())
      }
      return sizesArray
    },
    listBySize() {
      return this.list(this.size)
    },
  },
  methods: {
    ...mapMutations({
      selectBundle: 'order/updateBundle',
    }),
    makeDirty(guid) {
      console.log('Making dirty')
    },
  },
})
</script>
