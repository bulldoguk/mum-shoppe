<template>
    <div class="border-2 rounded-lg m-2 p-2">
        <div>
            <div class="w-full flex">
                <a class="mx-auto cursor-pointer text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    @click="addBundle">
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
                                placeholder=" " required="" v-model="bundle.type" @input="dirty.push(bundle.guid)" />
                            <label for="title"
                                class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Type</label>
                        </div>
                    </div>
                    <div class="col-span-2">
                        <div class="relative z-0 mb-6 w-full group">
                            <input type="text" name="title" id="title"
                                class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                placeholder=" " required="" v-model="bundle.size" @input="dirty.push(bundle.guid)" />
                            <label for="title"
                                class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Size</label>
                        </div>
                    </div>
                    <div class="">
                        <div class="relative z-0 mb-6 w-full group">
                            <input type="text" name="title" id="title"
                                class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                placeholder=" " required="" v-model="bundle.price" @input="dirty.push(bundle.guid)" />
                            <label for="title"
                                class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Price</label>
                        </div>
                    </div>
                    <div class="col-span-7">
                        <div class="relative z-0 mb-6 w-full group">
                            <input type="text" name="title" id="title"
                                class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                placeholder=" " required="" v-model="bundle.description" @input="dirty.push(bundle.guid)" />
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
                if (l.type > r.type) return 1
                if (l.type === r.type) return 0
                if (l.type < r.type) return -1
            }).sort((l, r) => {
                if (l.size > r.size) return 1
                if (l.size === r.size) return 0
                if (l.size < r.size) return -1
            })
        }
    },
    methods: {
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
            const uri = '/bundles/guid'
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
                })
                .catch((e) => {
                    console.log('Failed to update bundle', e)
                })
        }
    }
})
</script>
