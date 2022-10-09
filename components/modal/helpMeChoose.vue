<template>
  <div class="modal-content">
    <div class="modal-header">
      <h1>Help Me Choose</h1>
      <button
        type="button"
        class="btn-close box-content h-4 w-4 rounded-none border-none p-1 text-black opacity-50 hover:text-black hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none"
        data-bs-dismiss="modal"
        aria-label="Close"
      ></button>
    </div>
    <div class="modal-body">
      <ProgressBar />
    </div>
    <div class="modal-footer">
      <a class="button button-green" @click="saveOrder">Save order</a>
      <a class="button button-gray" @click="resetModal">Close</a>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
import ProgressBar from './helpMeChoose/progressBar.vue'
export default {
  data() {
    return {
    }
  },
  methods: {
    ...mapMutations({
      resetModal: 'MODAL_RESET',
      fireModal: 'MODAL_INIT',
    }),
    saveOrder() {
      this.fireModal('saveMyOrder')
    },
  },
  components: { ProgressBar },
}
</script>
