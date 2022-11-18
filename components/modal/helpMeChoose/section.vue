<template>
  <div class="mb-4">
    <div class="flex flex-row justify-between">
      <div>
        <h2 class="capitalize">{{ section.title }}</h2>
        <h3 v-if="subsectionTitle.length > 0" class="capitalize">{{subsectionTitle}}</h3>
        <div class="hidden">{{ section.guid }}</div>
      </div>
      <div v-if="remainingCreditCount > 0" class="text-xs print:hidden">
        ({{ remainingCreditCount }}) credits
      </div>
    </div>
    <div
      class="grid grid-cols-12 px-2"
      :class="
        checkDefault(section.guid, item.optionguid)
          ? 'bg-yellow-200 text-gray-800 rounded-lg'
          : ''
      "
      v-for="(item, index2) of filteredList"
      :key="index2"
    >
      <div class="col-span-4">
        <span
          class="capitalize"
          :class="
            checkDefault(section.guid, item.optionguid) ? 'text-gray-800' : ''
          "
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
          :useclass="
            checkDefault(section.guid, item.optionguid) ? 'text-gray-800' : ''
          "
          :price="isFree(item) ? 0 : item.price"
          :showfree="true"
        />
      </div>
      <div class="col-span-2 flex w-full justify-end">
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
    sectionIndex: {
      type: Number,
      required: true,
    },
    panels: {
      type: Array,
      required: true
    }
  },
  computed: {
    ...mapGetters({
      sectionList: 'options/list',
      checkDefault: 'order/getDefault',
      credits: 'order/getCredits',
      checkOptions: 'order/checkOptions',
    }),
    creditCount() {
      return this.credits(this.section.guid)
    },
    remainingCreditCount() {
      const count = this.credits(this.section.guid) - this.selectedList.length
      return count > 0 ? count : 0
    },
    filteredList() {
      const subsection = this.panels[this.sectionIndex].subsection
      return this.section.options.filter(e => e.subsection === subsection)
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
    correctedSectionIndex() {
      return this.sectionIndex - 2
    },
    section() {
      return this.sectionList.find(e => e.guid === this.panels[this.sectionIndex].guid)
    },
    subsectionTitle() {
      return this.panels[this.sectionIndex].subsection || ''
    }
  },
  methods: {
    ...mapMutations({
      selectOption: 'order/addOption',
    }),
    isFree(item) {
      try {
        const index = this.selectedList.findIndex(
          (e) => e.optionguid === item.optionguid
        )
        return index >= 0 && index + 1 <= this.creditCount
      } catch {
        return false
      }
    },
  },
})
</script>
