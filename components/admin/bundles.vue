<template>
    <div class="border-2 rounded-lg m-2 p-2">
        <div>
            <div class="w-full flex flex-row mb-6">
                <a class="flex flex-row gap-4 mx-auto cursor-pointer text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    @click="addBundle">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M12 9V12M12 12V15M12 12H15M12 12H9M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
                            stroke="#4A5568" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    Add
                </a>
            </div>
        </div>
        <div v-for="(bundle, index) in sortedBundlesList" :key=" index">
            <form>
                <div class="grid md:grid-cols-12 md:gap-6">
                    <div class="">
                        <div class="relative z-0 mb-6 w-full group">
                            <input type="text" name="title" id="title"
                                class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                placeholder=" " required="" v-model="bundle.position" @input="makeDirty(bundle.guid)" />
                            <label for="title"
                                class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Position</label>
                        </div>
                    </div>
                    <div class="">
                        <div class="relative z-0 mb-6 w-full group">
                            <input type="text" name="title" id="title"
                                class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                placeholder=" " required="" v-model="bundle.type" @input="makeDirty(bundle.guid)" />
                            <label for="title"
                                class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Type</label>
                        </div>
                    </div>
                    <div class="col-span-2">
                        <div class="relative z-0 mb-6 w-full group">
                            <input type="text" name="title" id="title"
                                class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                placeholder=" " required="" v-model="bundle.size" @input="makeDirty(bundle.guid)" />
                            <label for="title"
                                class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Size</label>
                        </div>
                    </div>
                    <div class="">
                        <div class="relative z-0 mb-6 w-full group">
                            <input type="text" name="title" id="title"
                                class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                placeholder=" " required="" v-model="bundle.price" @input="makeDirty(bundle.guid)" />
                            <label for="title"
                                class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Price</label>
                        </div>
                    </div>
                    <div class="col-span-6">
                        <div class="relative z-0 mb-6 w-full group">
                            <input type="text" name="title" id="title"
                                class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                placeholder=" " required="" v-model="bundle.description"
                                @input="makeDirty(bundle.guid)" />
                            <label for="title"
                                class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Description</label>
                        </div>
                    </div>
                    <div>
                        <div class="relative z-0 mb-6 w-full group">
                            <div class="flex flex-row justify-around">
                                <div class="cursor-pointer" @click="saveBundle(bundle)"
                                    v-if="dirty.includes(bundle.guid)">Save</div>
                                <div class="cursor-pointer" @click="deleteBundle(bundle.guid)">Delete</div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
    setup() {

    },
    props: {
        bundlesList: {
            type: Array,
            required: true
        },
        storeGuid: {
            type: String,
            required: true
        }
    },
    data() {
        return {
            dirty: []
        }
    },
    computed: {
        sortedBundlesList() {
            return this.bundlesList.sort((l, r) => {
                if (l.position > r.position) return 1
                if (l.position === r.position) return 0
                if (l.position < r.position) return -1
            })
        }
    },
    methods: {
        makeDirty(guid) {
            const index = this.dirty.findIndex(e => e === guid)
            if (index < 0) {
                this.dirty.push(guid)
            }
        },
        addBundle() {
            const uri = '/bundles'
            const payload = {
                // guid: 'string', // No GUID when adding a new bundle
                shoppe_guid: this.storeGuid,
                type: '',
                size: '',
                description: '',
                price: 0,
                credits: []
            }
            this.$api.post(uri, payload)
                .then((resp) => {
                    this.$emit('addBundle', resp.data)
                })
                .catch((e) => {
                    console.log('Failed to create new bundle', e)
                })
        },
        deleteBundle(guid) {
            const uri = `/bundles/${guid}`
            this.$api.delete(uri)
                .then((resp) => {
                    this.$emit('deleteBundle', guid)
                })
                .catch((e) => {
                    console.log('Unable to delete bundle', e)
                })
        },
        saveBundle(bundle) {
            const uri = `/bundles/${bundle.guid}`
            const payload = { ...bundle }
            this.$api.patch(uri, payload)
                .then((resp) => {
                    this.$emit('updateBundle', resp.data)
                    const index = this.dirty.findIndex(e => e === bundle.guid)
                    this.dirty.splice(index, 1)
                })
                .catch((e) => {
                    console.log('Failed to update bundle', e)
                })
        }
    }
})
</script>
