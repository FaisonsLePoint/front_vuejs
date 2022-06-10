import { createStore } from 'vuex'

export default createStore({
  state: {
    users: [
      { id:0, name: 'marcel' },
      { id:1, name: 'roger' }
    ]
  },
  getters: {
    getMarcel(state){
      return state.users[0].name
    },
    //getUser(state, id)
    getUser: (state) => (id) => {
      return state.users[id].name
    }
  },
  mutations: {
    changeMarcel(state, payload){
      state.users[0].name = payload.name
    }
  },
  actions: {
    modify(context, payload){
    //modify({commit}, payload){
      console.log(context)
      context.commit('changeMarcel', {name: payload.name})
      //commit('changeMarcel', {name: payload.name})
    }
  },
  modules: {
  }
})
