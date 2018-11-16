import Vuex from 'vuex'
import ApolloClient from "apollo-boost"

const createStore = () => {
  return new Vuex.Store({
    state: () => ({
      client: new ApolloClient({
        uri: process.env.drp_graphql_URL
      }),
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
      galleries: {},
      title: {},
      info: {}
    }),
    mutations: {
      add (state, payload) {
        state.menus = payload
      },
      update (state, payload) {
        state.title = payload.title
        state.info = payload.body.value
      }
    },
    actions: {
      add (context, payload) {
        context.commit('add', payload)
      },
      update (context,payload) {
        context.commit('update', payload)
      }
    }
  })
}

export default createStore
