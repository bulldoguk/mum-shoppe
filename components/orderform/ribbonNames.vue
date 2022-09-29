<template>
  <div class="customerSection">
    <div class="flex flex-row justify-between">
      <div>
        <h1 class="capitalize">Ribbon Names</h1>
      </div>
    </div>
    <div>
      <form>
        <div class="grid print:grid-cols-12 print:gap-2 md:grid-cols-12 md:gap-6">
          <div class="col-span-6">
            <div class="w-full"><h2>Ribbon 1</h2></div>
            <div class="textInput group">
              <input
                type="text"
                name="ribbonName1"
                id="ribbonName1"
                class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required=""
                v-model="ribbonName1"
                @input="makeDirty()"
              />
              <label
                for="ribbonName1"
                class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >Name</label
              >
            </div>
            <div class="textInput group">
              <input
                type="text"
                name="grade1"
                id="grade1"
                class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required=""
                v-model="grade1"
                @input="makeDirty()"
              />
              <label
                for="grade1"
                class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >Grade</label
              >
            </div>
            <div class="textInput group">
              <input
                type="text"
                name="activity1"
                id="activity1"
                class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required=""
                v-model="activity1"
                @input="makeDirty()"
              />
              <label
                for="activity1"
                class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >Sport / Activity</label
              >
            </div>
            <div class="textInput group">
              <input
                type="text"
                name="school1"
                id="school1"
                class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required=""
                v-model="school1"
                @input="makeDirty()"
              />
              <label
                for="school1"
                class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >School (if different)</label
              >
            </div>
          </div>
          <div class="col-span-6">
            <div class="w-full"><h2>Ribbon 2</h2></div>
            <div class="textInput group">
              <input
                type="text"
                name="ribbonName2"
                id="ribbonName2"
                class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required=""
                v-model="ribbonName2"
                @input="makeDirty()"
              />
              <label
                for="ribbonName2"
                class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >Name</label
              >
            </div>
            <div class="textInput group">
              <input
                type="text"
                name="grade2"
                id="grade2"
                class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required=""
                v-model="grade2"
                @input="makeDirty()"
              />
              <label
                for="grade2"
                class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >Grade</label
              >
            </div>
            <div class="textInput group">
              <input
                type="text"
                name="activity2"
                id="activity2"
                class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required=""
                v-model="activity2"
                @input="makeDirty()"
              />
              <label
                for="activity2"
                class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >Sport / Activity</label
              >
            </div>
            <div class="textInput group">
              <input
                type="text"
                name="school2"
                id="school2"
                class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required=""
                v-model="school2"
                @input="makeDirty()"
              />
              <label
                for="school2"
                class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >School (if different)</label
              >
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { defineComponent } from '@vue/composition-api'
import { mapGetters, mapMutations } from 'vuex'

export default defineComponent({
  setup() {},
  computed: {
    ...mapGetters({
      ribbonNames: 'order/getRibbonNames',
    }),
    ribbonName1: {
      get() {
        return this.ribbonNames.ribbonName1
      },
      set(newVal) {
        this.setRibbonName({ key: 'ribbonName1', value: newVal })
      },
    },
    ribbonName2: {
      get() {
        return this.ribbonNames.ribbonName2
      },
      set(newVal) {
        this.setRibbonName({ key: 'ribbonName2', value: newVal })
      },
    },
    grade1: {
      get() {
        return this.ribbonNames.grade1
      },
      set(newVal) {
        this.setRibbonName({ key: 'grade1', value: newVal })
      },
    },
    grade2: {
      get() {
        return this.ribbonNames.grade2
      },
      set(newVal) {
        this.setRibbonName({ key: 'grade2', value: newVal })
      },
    },
    activity1: {
      get() {
        return this.ribbonNames.activity1
      },
      set(newVal) {
        this.setRibbonName({ key: 'activity1', value: newVal })
      },
    },
    activity2: {
      get() {
        return this.ribbonNames.activity2
      },
      set(newVal) {
        this.setRibbonName({ key: 'activity2', value: newVal })
      },
    },
    school1: {
      get() {
        return this.ribbonNames.school1
      },
      set(newVal) {
        this.setRibbonName({ key: 'school1', value: newVal })
      },
    },
    school2: {
      get() {
        return this.ribbonNames.school2
      },
      set(newVal) {
        this.setRibbonName({ key: 'school2', value: newVal })
      },
    },
  },
  methods: {
    ...mapMutations({
      setRibbonName: 'order/updateRibbonNames',
    }),
    makeDirty() {
      return true
    },
  },
})
</script>
