<template>
  <div class="border-b-2">
    <h1 class="capitalize">{{ section.title }}</h1>
    <div
      class="grid grid-cols-12 mx-4 px-4"
      :class="
        checkDefault(section.id, item.id) ? 'bg-yellow-200  rounded-lg' : ''
      "
      v-for="(item, index2) of section.options"
      :key="index2"
    >
      <div class="col-span-6">
        <span class="capitalize">{{ item.name }}</span>
      </div>
      <div class="col-span-2 capitalize">{{ item.type }}</div>
      <div class="col-span-2" @click="selectOption({ section: section.id, ...item })">
        <SvgDynamicCheck :isChecked="checkOptions({ section: section.id, ...item })" />
      </div>
      <div class="col-span-2"><UtilsCurrency :price="item.price" /></div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from '@vue/composition-api'
import { mapGetters, mapMutations } from 'vuex'

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
      checkDefault: 'order/getDefault',
      credits: 'order/getCredits',
      checkOptions: 'order/checkOptions'
    }),
    creditCount() {
      return this.credits(this.section.id)
    },
  },
  methods: {
    ...mapMutations({
      addOption: 'order/addOption'
    }),
    selectOption (option) {
      this.addOption(option)
      console.log(option)
    }
  }
})
</script>
