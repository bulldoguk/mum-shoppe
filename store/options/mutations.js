export default {
  SET_OPTIONS(state, options) {
    console.log('Got options', options)
    state.list = options
  },
}
