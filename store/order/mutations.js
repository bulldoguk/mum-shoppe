export default {
  updateBundle(state, bundle) {
    if (state.bundle && state.bundle.id === bundle.id) {
      state.bundle = null
    } else {
      state.bundle = bundle
    }
  },
  addOption(state, option) {
    const index = state.options.findIndex(
      (e) => e.section === option.section && e.id === option.id
    )
    if (index >= 0) {
      state.options.splice(index, 1)
    } else {
      state.options.push(option)
    }
  },
}
