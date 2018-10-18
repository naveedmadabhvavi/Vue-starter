import Vuex from 'vuex'

const store = new Vuex.Store({
    state: {
        currentUser: null
    },
    getters: {
        getCurrentUser (state) {
            return state.currentUser
        }
    },
    mutations: {
        installCurrentUser (state, currentUser) {
            if (!currentUser) {
                throw new Error('user is empty')
            }
            state.currentUser = currentUser
        }
    }
})

export default store

