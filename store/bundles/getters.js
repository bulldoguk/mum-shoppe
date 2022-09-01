export default {
  sizes(state) {
    return [...new Set(state.list.map((item) => item.size))]
  },
  listBySize: (state) => (size) => {
    return state.list.filter(e => e.size === size)
  }
}
