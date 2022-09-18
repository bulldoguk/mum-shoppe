export default {
  updateBundle(state, bundle) {
    if (state.bundle && state.bundle.guid === bundle.guid) {
      state.bundle = null
    } else {
      state.bundle = bundle
    }
  },
  addOption(state, option) {
    const index = state.options.findIndex(
      (e) => e.section === option.section && e.optionguid === option.optionguid
    )
    if (index >= 0) {
      state.options.splice(index, 1)
    } else {
      state.options.push(option)
    }
  },
  updateCustomer(state, object) {
    state.customer[object.key] = object.value
  },
  updateRibbonNames(state, object) {
    state.ribbonNames[object.key] = object.value
  }
}
