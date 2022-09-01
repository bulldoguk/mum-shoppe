export default {
  sizes(state) {
    return [...new Set(state.list.map((item) => item.size))]
  },
  listBySize: (state) => (size) => {
    return state.list.filter(e => e.size === size)
  },
  isSelected: (state) => (checkid) => {
    if (!state.selected) { return false }
    return checkid === state.selected
  }
}
