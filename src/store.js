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
      const res = await axios.get('https://us-central1-portfolio-249d8.cloudfunctions.net/skillCategories');
      res.data.forEach((skill) => {
        skills.push(skill);
      });
      commit('setSkills' , {skills});
    }
  },
})
export default store
