export default {
    userstate (state) {
        if (state.auth && state.auth.loggedIn) {
            // Return logged in user status
            return state.auth.user.adminstatus
        } else {
            return null
        }
    },
    modalMode (state) {
        return state.modalMode
    }
}