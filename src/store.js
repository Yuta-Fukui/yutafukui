import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    skills: [],
    loaded: false
  },

  getters: {
    getSkills: (state) => (category) => {
      if (state.skills.length > 0) {
        return state.skills.find((skill) => skill.category===category);
      }
      return [];
    },
  },

  mutations: {
    setSkills(state,payload) {
      state.skills = payload.skills
      state.loaded = true;
    }
  },

  actions: {
    async updateSkills({commit}) {
      const skills = [];
      const functionsUrl = 'https://us-central1-' + process.env.VUE_APP_FUNCTIONS_API + '.cloudfunctions.net/skillCategories';
      /* eslint-disable no-debugger */
      debugger
      const res = await axios.get(functionsUrl)
      res.data.forEach((skill) => {
        skills.push(skill);
      });
      commit('setSkills' , {skills});
    }
  },
})
export default store
