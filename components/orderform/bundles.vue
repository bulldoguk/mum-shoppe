<template>
  <div class="border-b-2">
    <h1>Pick your bundle</h1>
    <div v-for="(size, index) of sizes" :key="index">
      <h2 class="capitalize">{{ size }}</h2>
      <div
        class="grid grid-cols-12 mx-4"
        v-for="(item, index2) of list(size)"
        :key="index2"
      >
        <div class="col-span-5">
          <span class="capitalize">{{ item.type }}</span
          >: {{ item.description }}
        </div>
        <div class="col-span-2 capitalize">{{ item.type }}</div>
        <div class="col-span-2" @click="selectBundle(item)">
          <SvgDynamicCheck :isChecked="isSelected(item.id)" />
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
  </div>
</template>

<script>
import { defineComponent } from '@vue/composition-api'
import { mapGetters, mapMutations } from 'vuex'
import Currency from '../utils/currency.vue'

export default defineComponent({
  setup() {},
  computed: {
    ...mapGetters({
      sizes: 'bundles/sizes',
      list: 'bundles/listBySize',
      isSelected: 'order/isSelected',
      total: 'order/bundleTotal',
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
