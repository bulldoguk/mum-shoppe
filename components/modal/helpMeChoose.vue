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
      <Introduction v-if="panelIndex == 0" />
      <Bundle v-if="panelIndex == 1" />
      <Section v-if="panelIndex > 1" :sectionIndex="panelIndex" :panels="panels" />
      <div class="flex flex-row justify-between items-center px-2">
        <a @click="goBack" class="button button-gray"><<</a>
        <a @click="goOn" class="button button-gray">>></a>
      </div>
    </div>
    <ProgressBar :currentPosition="panelIndex" :targetPosition="panels.length"/>
    <div class="modal-footer">
      <a class="button button-green" @click="saveOrder">Save order</a>
      <a class="button button-gray" @click="resetModal">Close</a>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex'
import ProgressBar from './helpMeChoose/progressBar.vue'
import Introduction from './helpMeChoose/introduction.vue'
import Section from './helpMeChoose/section.vue'
import Bundle from './helpMeChoose/bundle.vue'
export default {
  data() {
    return {
      panelIndex: 0,
    }
  },
  computed: {
    ...mapGetters({
      sectionList: 'options/list',
    }),
    panels() {
      const panelArray = [
        { guid: '', title: 'Introduction', notes: '' },
        { guid: '', title: 'Pick a starting bundle', notes: '' },
      ]
      for (const section of this.sectionList) {
        let ourList = [...section.options]
        for (const subsection of [...new Set(ourList.map((item) => item.subsection))]) {
          panelArray.push({ guid: section.guid, title: section.title, notes: '', subsection })
        }
      }
      return panelArray
    },
  },
  methods: {
    ...mapMutations({
      resetModal: 'MODAL_RESET',
      fireModal: 'MODAL_INIT',
    }),
    saveOrder() {
      this.fireModal('saveMyOrder')
    },
    goBack() {
      this.panelIndex = Math.max(0, this.panelIndex - 1)
    },
    goOn() {
      this.panelIndex = Math.min(this.panelIndex + 1, this.panels.length)
    },
  },
  components: { ProgressBar, Introduction, Section, Bundle },
}
</script>
