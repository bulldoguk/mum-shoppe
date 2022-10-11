<template>
  <div class="formSection">
    <div class="flex flex-row justify-between">
      <div>
        <h2 class="capitalize">{{ section.title }}</h2>
        <h3 v-if="subsection.length > 0" class="capitalize">{{ subsection }}</h3>
        <div class="hidden">{{ section.guid }}</div>
      </div>
      <div class="text-xs print:hidden">({{ remainingCreditCount }}) credits</div>
    </div>
    <div
      class="grid grid-cols-12 mx-4 px-4"
      :class="
        checkDefault(section.guid, item.optionguid)
          ? 'bg-yellow-200 text-gray-800 rounded-lg'
          : ''
      "
      v-for="(item, index2) of filteredList"
      :key="index2"
    >
      <div class="col-span-5">
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
    subsection: {
      type: String,
      default: ''
    }
  },
  computed: {
    ...mapGetters({
      checkDefault: 'order/getDefault',
      credits: 'order/getCredits',
      checkOptions: 'order/checkOptions',
    }),
    subsections() {
      const ourList = [...this.section.options]
      return [...new Set(ourList.map((item) => item.subsection))]
    },
    filteredList() {
      return this.section.options.filter(e => e.subsection === this.subsection || (this.subsection === '' && !e.subsection))
    },
    creditCount() {
      return this.credits(this.section.guid)
    },
    remainingCreditCount() {
      const count = this.credits(this.section.guid) - this.selectedList.length
      return count > 0 ? count : 0
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
