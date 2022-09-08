<template>
  <div class="border-b-2">
    <h1 class="capitalize">{{ section.title }}</h1>
    <div
      class="grid grid-cols-12 mx-4 px-4"
      :class="
        checkDefault(section.id, item.id)
          ? 'bg-yellow-200 text-gray-800 rounded-lg'
          : ''
      "
      v-for="(item, index2) of section.options"
      :key="index2"
    >
      <div class="col-span-5">
        <span
          class="capitalize"
          :class="checkDefault(section.guid, item.guid) ? 'text-gray-800' : ''"
          >{{ item.name }}</span
        >
      </div>
      <div class="col-span-2 capitalize">{{ item.type }}</div>
      <div
        class="col-span-2"
        @click="selectOption({ section: section.guid, ...item })"
      >
        <SvgDynamicCheck
          :isChecked="checkOptions({ section: section.guid, ...item })"
        />
      </div>
      <div class="col-span-2">
        <UtilsCurrency
          :useclass="checkDefault(section.guid, item.optionguid) ? 'text-gray-800' : ''"
          :price="isFree(item) ? 0 : item.price"
          :showfree="true"
        />
      </div>
      <div class="col-span-1 flex w-full justify-end">
        <UtilsCurrency
          v-if="
            selectedList.length > 0 && index2 === section.options.length - 1
          "
          :price="subtotal"
          :showfree="true"
        />
      </div>
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
      checkOptions: 'order/checkOptions',
    }),
    creditCount() {
      return this.credits(this.section.guid)
    },
    selectedList() {
      const mylist = [
        ...this.section.options.filter((e) =>
          this.checkOptions({ section: this.section.guid, ...e })
        ),
      ]
      mylist.sort((l, r) => (l.price < r.price ? 1 : -1)) // This gives them the most expensive item for free
      return mylist
    },
    subtotal() {
      let subtotal = 0
      for (const item of this.selectedList) {
        if (!this.isFree(item)) {
          subtotal += item.price
        }
      }
      return subtotal
    },
  },
  methods: {
    ...mapMutations({
      selectOption: 'order/addOption',
    }),
    isFree(item) {
      try {
        const index = this.selectedList.findIndex((e) => e.guid === item.guid)
        return index >= 0 && index + 1 <= this.creditCount
      } catch {
        return false
      }
    },
  },
})
</script>
