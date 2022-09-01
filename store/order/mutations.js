export default {
  updateBundle(state, bundle) {
    if (state.bundle && state.bundle.id === bundle.id) {
      state.bundle = null
    } else {
      state.bundle = bundle
    }
  },
}
