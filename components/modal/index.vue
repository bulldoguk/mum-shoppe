<template>
  <div v-if="showModal" class="screen">
    <div class="modal">
      <div class="modal-dialog">
        <FindMyOrder v-if='modalMode==="findMyOrder"'/>
        <SaveOrder v-if='modalMode==="saveMyOrder"'/>
      </div>
    </div>
    <div class="mask"></div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
import FindMyOrder from './findMyOrder.vue'
import SaveOrder from './saveOrder.vue'
export default {
  computed: {
    ...mapGetters({
      modalMode: 'modalMode',
    }),
    showModal() {
      return this.modalMode && this.modalMode.length > 0
    },
  },
  components: { FindMyOrder, FindMyOrder, SaveOrder },
  methods: {
    ...mapMutations({
      resetModal: 'MODAL_RESET',
    }),
  },
}
</script>
