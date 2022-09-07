export default {
  updateSelected(state, id) {
    if (id === state.selected) {
      state.selected = null
    } else {
      state.selected = id
    }
  },
  SET_BUNDLES(state, bundles) {
    console.log('Got bundles', bundles)
    state.list = bundles
  }
}
