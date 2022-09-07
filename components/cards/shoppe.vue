<template>
  <div class="shoppe">
    <a @click="selectShoppe">
      <SvgOutlineMusicnote class="image"/>
      <div>
        <h4>{{ shoppe.title }}</h4>
        <h5>{{ shoppe.school }}</h5>
        <p>{{ shoppe.notes }}</p>
      </div>
    </a>
  </div>
</template>

<script>
import { defineComponent } from '@vue/composition-api'
import { mapGetters } from 'vuex'

export default defineComponent({
  setup() {},
  props: {
    shoppe: {
      type: Object,
      required: true,
    },
  },
  methods: {
    selectShoppe () {
      this.$router.push(this.shoppe.slug)
    }
  }
})
</script>
