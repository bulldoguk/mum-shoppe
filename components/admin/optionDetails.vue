<template>
    <div class="border-2 rounded-lg m-2 p-2">
        <div>
            <div class="w-full flex flex-row mb-6 justify-between">
                <a class="flex flex-row gap-4 mx-auto cursor-pointer text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    @click="addDetail">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M12 9V12M12 12V15M12 12H15M12 12H9M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
                            stroke="#4A5568" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    Add
                </a>
            </div>
        </div>
        <div v-for="(optionDetail, index) in sortedOptionsList" :key="index">
            <form>
                <div class="grid md:grid-cols-12 md:gap-6">
                    <div class="">
                        <div class="relative z-0 mb-6 w-full group">
                            <input type="number" name="position" id="position"
                                class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                v-model="optionDetail.position"
                                @input="makeDirty(option.guid)" />
                            <label for="title"
                                class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Position</label>
                        </div>
                    </div>
                    <div class="col-span-5">
                        <div class="relative z-0 mb-6 w-full group">
                            <input type="text" name="name" id="name"
                                class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                placeholder=" " required="" v-model="optionDetail.name"
                                @input="makeDirty(option.guid)" />
                            <label for="title"
                                class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Name</label>
                        </div>
                    </div>
                    <div class="col-span-4">
                        <div class="relative z-0 mb-6 w-full group">
                            <input type="text" name="subsection" id="subsection"
                                class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                placeholder=" " required="" v-model="optionDetail.subsection"
                                @input="makeDirty(option.guid)" />
                            <label for="subsection"
                                class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Subsection</label>
                        </div>
                    </div>
                    <div class="col-span-1">
                        <div class="relative z-0 mb-6 w-full group">
                            <input type="number" name="price" id="price"
                                class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                v-model="optionDetail.price"
                                @input="makeDirty(option.guid)" />
                            <label for="price"
                                class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Price</label>
                        </div>
                    </div>
                    <div>
                        <div class="relative z-0 mb-6 w-full group">
                            <div class="flex flex-row justify-around">
                                <div class="cursor-pointer" @click="deleteDetail(optionDetail, option.guid)">
                                    Delete
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        option: {
            type: Object,
            required: true,
        },
    },
    data() {
        return {
            dirty: [],
        }
    },
    computed: {
        sortedOptionsList() {
            return this.option.options.sort((l, r) => {
                if (parseInt(l.position) > parseInt(r.position)) return 1
                if (parseInt(l.position) === parseInt(r.position)) return 0
                if (parseInt(l.position) < parseInt(r.position)) return -1
            })
        },
    },
    methods: {
        makeDirty(guid) {
            console.log('Making dirty', guid)
            this.$emit('makeDirtyOptionDetail', guid)
        },
        addDetail() {
            const payload = {
                optionguid: '',
                parentGuid: this.option.guid,
                name: '',
                subsection: '',
                price: 0,
                position: 0
            }
            this.$emit('addOptionDetail', payload)
        },
        deleteDetail(detail, guid) {
            const payload = {
                optionGuid: detail.optionguid,
                parentGuid: guid
            }
            this.$emit('deleteOptionDetail', payload)
        }
    },
}
</script>
