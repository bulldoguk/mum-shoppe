<template>
  <div>
    <Admin />
  </div>
</template>

<script>
import { defineComponent } from '@vue/composition-api'
import { mapGetters } from 'vuex'

export default defineComponent({
  setup() {},
  data() {
    return {
      selectedStore: { guid: '', title: 'Select store', mode: 'select' },
      selectedBundle: { guid: '' },
      selectedOption: { guid: '' },
    }
  },
  computed: {
    ...mapGetters({
      storeList: 'shoppes/list',
    }),
  },
  methods: {
  },
})
</script>
