export default {
  list(state) {
    const sortedList = [...state.list]
    return sortedList.sort((l, r) => {
      if (l.position > r.position) { return 1 }
      if (l.position === r.position) { return 0 }
      if (l.position < r.position) { return -1 }
    })
  },
}
