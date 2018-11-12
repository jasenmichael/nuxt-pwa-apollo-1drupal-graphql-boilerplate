import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: () => ({
      currentPath: "/",
      pages: {
          home: {
              path: "/home"
          },
          about: {
              path: "/about"
          }
      },
      menus: {},
      galleries: {}
    }),
    mutations: {
      add (state, payload) {
        state.menus = payload
      }
    },
    actions: {}
  })
}

export default createStore
