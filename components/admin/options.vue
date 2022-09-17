<template>
  <div class="border-2 rounded-lg m-2 p-2">
    <div v-if="!showOptions" class="cursor-pointer" @click="showOptions = true">
      Show options
    </div>
    <div v-else>
      <div>
        <div class="w-full flex flex-row mb-6 justify-between">
          <div @click="showOptions = false" class="cursor-pointer">
            Hide Options
          </div>
          <a
            class="flex flex-row gap-4 mx-auto cursor-pointer text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            @click="addOption"
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
      <div v-for="(option, index) in sortedOptionsList" :key="index">
        <form>
          <div class="grid md:grid-cols-12 md:gap-6">
            <div class="">
              <div class="relative z-0 mb-6 w-full group">
                <input
                  type="text"
                  name="title"
                  id="title"
                  class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required=""
                  v-model="option.position"
                  @input="makeDirty(option.guid)"
                />
                <label
                  for="title"
                  class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >Position</label
                >
              </div>
            </div>
            <div class="col-span-4">
              <div class="relative z-0 mb-6 w-full group">
                <input
                  type="text"
                  name="title"
                  id="title"
                  class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required=""
                  v-model="option.title"
                  @input="makeDirty(option.guid)"
                />
                <label
                  for="title"
                  class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >Title</label
                >
              </div>
            </div>
            <div class="col-span-6">
              <div class="relative z-0 mb-6 w-full group">
                <input
                  type="text"
                  name="title"
                  id="title"
                  class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required=""
                  v-model="option.notes"
                  @input="makeDirty(option.guid)"
                />
                <label
                  for="title"
                  class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >Notes</label
                >
              </div>
            </div>
            <div>
              <div class="relative z-0 mb-6 w-full group">
                <div class="flex flex-row justify-around">
                  <div
                    class="cursor-pointer"
                    @click="saveOption(option)"
                    v-if="dirty.includes(option.guid)"
                  >
                    Save
                  </div>
                  <div
                    class="cursor-pointer"
                    @click="deleteOption(option.guid)"
                  >
                    Delete
                  </div>
                  <div
                    class="cursor-pointer"
                    @click="toggleDetails(option.guid)"
                  >
                    Details
                  </div>
                </div>
              </div>
            </div>
          </div>
          <AdminOptionDetails
            v-if="showDetails === option.guid"
            :option="option"
            @makeDirtyOptionDetail="makeDirtyOptionDetail"
            @addOptionDetail="addOptionDetail"
            @deleteOptionDetail="deleteOptionDetail"
          />
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  setup() {},
  props: {
    optionsList: {
      type: Array,
      required: true,
    },
    storeGuid: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      dirty: [],
      showOptions: false,
      showDetails: '',
    }
  },
  computed: {
    sortedOptionsList() {
      return this.optionsList.sort((l, r) => {
        if (parseInt(l.position) > parseInt(r.position)) return 1
        if (parseInt(l.position) === parseInt(r.position)) return 0
        if (parseInt(l.position) < parseInt(r.position)) return -1
      })
    },
  },
  methods: {
    makeDirtyOptionDetail(guid) {
      this.makeDirty(guid)
    },
    deleteOptionDetail(payload) {
      console.log('Deleting', payload)
      try {
        const optionIndex = this.optionsList.findIndex(
          (e) => e.guid === payload.parentGuid
        )
        const detailIndex = this.optionsList[optionIndex].options.findIndex(
          (e) => e.optionguid === payload.optionGuid
        )
        this.optionsList[optionIndex].options.splice(detailIndex, 1)
        this.makeDirty(payload.parentGuid)
      } catch {
        console.log('Failed to delete option detail')
      }
    },
    addOptionDetail(payload) {
      console.log('Adding detail', payload)
      const index = this.optionsList.findIndex(
        (e) => e.guid === payload.parentGuid
      )
      this.makeDirty(payload.parentGuid)
      delete payload.parentGuid
      this.optionsList[index].options.unshift(payload)
    },
    toggleDetails(guid) {
      if (this.showDetails === guid) {
        this.showDetails = ''
      } else {
        this.showDetails = guid
      }
    },
    makeDirty(guid) {
      const index = this.dirty.findIndex((e) => e === guid)
      if (index < 0) {
        this.dirty.push(guid)
      }
    },
    addOption() {
      const uri = '/options'
      const payload = {
        // "guid": "string",
        shoppe_guid: this.storeGuid,
        title: '',
        notes: '',
        options: [],
      }
      console.log('Payload', payload)
      this.$api
        .post(uri, payload)
        .then((resp) => {
          console.log('Response', resp.data)
          this.$emit('addOption', resp.data)
        })
        .catch((e) => {
          console.log('Failed to create new option', e)
        })
    },
    deleteOption(guid) {
      const uri = `/options/${guid}`
      this.$api
        .delete(uri)
        .then((resp) => {
          this.$emit('deleteOption', guid)
        })
        .catch((e) => {
          console.log('Unable to delete option', e)
        })
    },
    saveOption(option) {
      const uri = `/options/${option.guid}`
      const payload = { ...option }
      console.log('Saving payload', payload)
      this.$api
        .patch(uri, payload)
        .then((resp) => {
          this.$emit('updateOption', resp.data)
          const index = this.dirty.findIndex((e) => e === option.guid)
          this.dirty.splice(index, 1)
        })
        .catch((e) => {
          console.log('Failed to update option', e)
        })
    },
  },
})
</script>
