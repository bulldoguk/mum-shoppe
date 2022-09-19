<template>
  <div class="formSection">
    <template v-if="hasSelected">
      <h1>Your bundle</h1>
      <div v-if="selectedBundle" class="grid grid-cols-12 mx-4">
        <div class="col-span-8">
          <span class="capitalize">{{ selectedBundle.type }}</span
          >: {{ selectedBundle.description }}
        </div>
        <div class="col-span-1 capitalize">{{ selectedBundle.size }}</div>
        <div class="col-span-2 justify-around flex" @click="selectBundle(selectedBundle)">
          <SvgDynamicCheck :isChecked="isSelected(selectedBundle.guid)" />
        </div>
        <div class="col-span-1 flex w-full justify-end">
          <UtilsCurrency :price="total" />
        </div>
      </div>
    </template>
    <template v-else>
      <h1>Pick your bundle</h1>
      <div v-for="(size, index) of sizes" :key="index">
        <h2 class="capitalize">{{ size }}</h2>
        <div
          class="grid grid-cols-12 mx-4"
          v-for="(item, index2) of list(size)"
          :key="index2"
        >
          <div class="col-span-8">
            <span class="capitalize">{{ item.type }}</span
            >: {{ item.description }}
          </div>
          <div class="col-span-1" @click="selectBundle(item)">
            <SvgDynamicCheck :isChecked="isSelected(item.guid)" />
          </div>
          <div class="col-span-2"><UtilsCurrency :price="item.price" /></div>
          <div class="col-span-1">&nbsp;</div>
        </div>
      </div>
      <div class="grid grid-cols-12 mx-4 px-4">
        <div class="col-span-11">&nbsp;</div>
        <div class="col-span-1 flex w-full justify-end">
          <UtilsCurrency :price="total" />
        </div>
      </div>
    </template>
  </div>
</template>

<script>
import { defineComponent } from '@vue/composition-api'
import { mapGetters, mapMutations } from 'vuex'
import Currency from '../utils/currency.vue'

export default defineComponent({
  setup() {},
  fetch() {
    // Find the shoppe GUID
    // From that GUID - prompt the bundles store to load
    // That should then also load the store's sections
  },
  mounted() {
    this.$store.dispatch('bundles/fetchBundles')
  },
  computed: {
    ...mapGetters({
      sizes: 'bundles/sizes',
      list: 'bundles/listBySize',
      isSelected: 'order/isSelected',
      hasSelected: 'order/hasSelected',
      total: 'order/bundleTotal',
      selectedBundle: 'order/selectedBundle',
    }),
  },
  methods: {
    ...mapMutations({
      selectBundle: 'order/updateBundle',
    }),
  },
  components: { Currency },
})
</script>
