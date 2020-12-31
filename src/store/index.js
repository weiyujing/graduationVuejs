import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isSignIn: 0,
    username:'',
    nickname:'',
    token:''
  },
  mutations: {
    changIsSignIn (state,n) {
      state.isSignIn = n
    },
    setUsername(state,val){
        state.username=val
    },
    setToken(state,val) {
      state.token = val
    }
  },
});