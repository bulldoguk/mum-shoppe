export default {
  sizes(state) {
    return [...new Set(state.list.map((item) => item.size))]
  },
  listBySize: (state) => (size) => {
    return state.list.filter((e) => e.size === size)
  },
  getTotal(state) {
    try {
      return state.list.find((e) => e.id === state.selected).price
    } catch {
      return 0
    }
  },
  getDefault: (state) => (sectionid) => {
    try {
      return state.list
        .find((e) => e.id === state.selected)
        .credits.find((e) => e.optionid === sectionid).default
    } catch {
      return false
    }
  },
  getCredits: (state) => (sectionid) => {
    try {
      return state.list
        .find((e) => e.id === state.selected)
        .credits.find((e) => e.optionid === sectionid).credits
    } catch {
      return 0
    }
  },
}
