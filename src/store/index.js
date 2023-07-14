import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    baseUnit:0,
    timer:null
  },
  getters: {
  },
  mutations: {
    setBaseUnit(state,data){
      if(state.timer){
        clearTimeout(state.timer)
        state.timer = null
      }
      state.timer = setTimeout(()=>{
        state.baseUnit = data
      },30)
    }
  },
  actions: {
  },
  modules: {
  }
})
