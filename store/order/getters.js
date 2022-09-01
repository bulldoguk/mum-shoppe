export default {
  isSelected: (state) => (checkid) => {
    return state.bundle && state.bundle.id === checkid
  },
  bundleTotal (state) {
    return state.bundle ? state.bundle.price : 0
  }
}
