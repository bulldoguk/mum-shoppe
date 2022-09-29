export default {
  isSelected: (state) => (checkid) => {
    return state.bundle && state.bundle.guid === checkid
  },
  hasSelected(state) {
    if (state.bundle) {
      return true
    } else {
      return false
    }
  },
  selectedBundle(state) {
    return state.bundle
  },
  bundleTotal(state) {
    return state.bundle ? state.bundle.price : 0
  },
  orderTotal(state) {
    let total = state.bundle ? state.bundle.price : 0
    // Need to iterate over list of unique sections
    // Then check for # credits from bundle
    // Order the list so the most expensive get credits first
    // Then add up the rest
    const sectionList = [...new Set(state.options.map((item) => item.section))]
    for (const section of sectionList) {
      const itemList = [...state.options.filter((e) => e.section === section)]
      itemList.sort((l, r) => (l.price < r.price ? 1 : -1))
      let idx = 1
      let credits = 0
      try {
        credits =
          state.bundle.credits.find((e) => e.sectionguid === section).credits || 0
      } catch {
        credits = 0
      }
      for (const item of itemList) {
        if (idx > credits) {
          total += item.price
        }
        idx++
      }
    }
    return total
  },
  getDefault: (state) => (sectionid, itemid) => {
    try {
      return (
        state.bundle.credits.find((e) => e.sectionguid === sectionid)
          .default === itemid
      )
    } catch {
      return false
    }
  },
  getCredits: (state) => (sectionid) => {
    try {
      return state.bundle.credits.find((e) => e.sectionguid === sectionid)
        .credits
    } catch {
      return 0
    }
  },
  checkOptions: (state) => (option) => {
    const index = state.options.findIndex(
      (e) => e.section === option.section && e.optionguid === option.optionguid
    )
    return index >= 0
  },
  getCustomerDetails: (state) => (key) => {
    try {
      return state.customer(key)
    } catch {
      return ''
    }
  },
  getRibbonNames: (state) => (key) => {
    try {
      return state.ribbonNames(key)
    } catch {
      return ''
    }
  },
  orderToSend: (state) => {
    return {...state}
  }
}
