export default {
    MODAL_INIT (state, mode) {
        state.modalMode = mode
    },
    MODAL_RESET (state) {
        state.modalMode = ''
    }
}