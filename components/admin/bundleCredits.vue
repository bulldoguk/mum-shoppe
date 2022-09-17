<template>
  <div class="border-2 rounded-lg m-2 p-2">
    <div>
      <div class="w-full flex flex-row mb-6 justify-between">
        <a
          class="flex flex-row gap-4 mx-auto cursor-pointer text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          @click="addCredit"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 9V12M12 12V15M12 12H15M12 12H9M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
              stroke="#4A5568"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          Add
        </a>
      </div>
    </div>
    <div v-for="(credit, index) in creditList" :key="index">
      <form>
        <div class="grid md:grid-cols-12 md:gap-6">
          <div class="col-span-5">
            <div class="relative z-0 mb-6 w-full group">
              <select
                name="section"
                id="section"
                class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                v-model="credit.sectionguid"
                @change="makeDirty(bundle.guid)"
              >
                <option
                  v-for="section in allsections"
                  :key="section.guid"
                  :value="section.guid"
                >
                  {{ section.title }}
                </option>
              </select>
              <label
                for="section"
                class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >Section</label
              >
            </div>
          </div>
          <div class="col-span-5">
            <div class="relative z-0 mb-6 w-full group">
              <select
                name="section"
                id="section"
                class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                v-model="credit.default"
                @change="makeDirty(bundle.guid)"
              >
                <option
                  v-for="option in sectionOptions(credit.sectionguid)"
                  :key="option.optionguid"
                  :value="option.optionguid"
                >
                  {{ option.name }}
                </option>
              </select>
              <label
                for="section"
                class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >Default</label
              >
            </div>
          </div>
          <div class="col-span-2">
            <div class="relative z-0 mb-6 w-full group">
              <input
                type="number"
                name="credits"
                id="credits"
                class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                v-model="credit.credits"
                @input="makeDirty(bundle.guid)"
              />
              <label
                for="credits"
                class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >Credits</label
              >
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
/*
    So we need an array of credit objects
    Each object needs:
        Section GUID => displayed as selected section title
        Section default option GUID => displayed as selected option name
        Total credits for that section => integer (number) input
*/
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  setup() {},
  props: {
    bundle: {
      type: Object,
      required: true,
    },
    optionsList: {
        type: Array,
        required: true
    }
  },
  computed: {
    allsections(){
        return this.optionsList.sort((l, r) => {
            if (l.position > r.position) { return 1 }
            if (l.position === r.position) { return 0 }
            if (l.position < r.position) { return -1 }
        })
    },
    creditList() {
      return this.bundle.credits
    },
  },
  methods: {
    sectionOptions(sectionguid) {
        try {
            return this.allsections.find(e => e.guid === sectionguid).options
        } catch {
            return []
        }
    },
    makeDirty (guid) {
        this.$emit('makeDirty', guid)
    },
    addCredit () {
        const newCredit = {
            sectionguid: '',
            default: '',
            credits: 0
        }
        this.bundle.credits.unshift(newCredit)
    }
  }
})
</script>
