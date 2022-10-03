<template>
  <div v-if="showModal" class="screen">
    <div class="modal">
      <div class="modal-dialog">
        <FindMyOrder />
      </div>
    </div>
    <div class="mask"></div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
import FindMyOrder from './findMyOrder.vue'
export default {
  computed: {
    ...mapGetters({
      modalMode: 'modalMode',
    }),
    showModal() {
      return this.modalMode && this.modalMode.length > 0
    },
  },
  components: { FindMyOrder, FindMyOrder },
  methods: {
    ...mapMutations({
      resetModal: 'MODAL_RESET',
    }),
  },
}
</script>
