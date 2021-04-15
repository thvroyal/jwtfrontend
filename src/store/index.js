import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const state = {
  user: null,
  role: 0,
};
export default new Vuex.Store({
  state,
  getters: {
    user: (state) => {
      return state.user;
    },
    role: (state) => {
      return state.role;
    },
  },
  mutations: {
    user(state, user) {
      state.user = user;
    },
    role(state, role) {
      state.role = role;
    },
  },
  actions: {
    user(context, user) {
      context.commit("user", user);
    },
    role(context, role) {
      context.commit("role", role);
    },
  },
  modules: {},
});
