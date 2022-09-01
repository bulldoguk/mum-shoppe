export default {
  updateSelected(state, id) {
    if (id === state.selected) {
      state.selected = null
    } else {
      state.selected = id
    }
  },
}
