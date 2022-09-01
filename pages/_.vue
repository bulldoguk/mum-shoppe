<template>
  <div>
    <Public v-if="!userstate" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'IndexPage',
  computed: {
    ...mapGetters({
      userstate: 'userstate',
    }),
  },
}
</script>
