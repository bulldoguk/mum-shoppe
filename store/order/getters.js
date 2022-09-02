export default {
  isSelected: (state) => (checkid) => {
    return state.bundle && state.bundle.id === checkid
  },
  bundleTotal (state) {
    return state.bundle ? state.bundle.price : 0
  },
  orderTotal (state) {
    let total = state.bundle ? state.bundle.price : 0
    for (const option of state.options) {
      total += option.total
    }
    return total
  }
}
