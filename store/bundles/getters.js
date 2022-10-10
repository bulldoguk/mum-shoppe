export default {
  sizes(state) {
    const ourList = [...state.list]
    ourList.sort((l, r) => {
      if (l.position > r.position) { return 1 }
      if (l.position === r.position) { return 0 }
      if (l.position < r.position) { return -1 }
    })
    // return [...new Set(state.list.map((item) => item.size))]
    return [...new Set(ourList.map((item) => item.size))]
  },
  listBySize: (state) => (size) => {
    try {
      return state.list.filter((e) => e.size.toLowerCase() === size.toLowerCase())
    } catch {
      return []
    }
  },
  getTotal(state) {
    try {
      return state.list.find((e) => e.id === state.selected).price
    } catch {
      return 0
    }
  },
}
