import { createStore } from 'vuex'

export default createStore({
  state: {
    users: [
      { id:0, name: 'marcel' },
      { id:1, name: 'roger' }
    ],
    notifDisplay: false,
    notifMessage: ''
  },
  getters: {
    getMarcel(state){
      return state.users[0].name
    },
    //getUser(state, id)
    getUser: (state) => (id) => {
      return state.users[id].name
    },
    getNotif: (state) => {
      return state.notifDisplay
    },
    getNotifMessage: (state) => {
      return state.notifMessage
    }
  },
  mutations: {
    changeMarcel(state, payload){
      state.users[0].name = payload.name
    },
    displayNotif(state, payload){
      state.notifDisplay = payload.d
      state.notifMessage = payload.mes
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
