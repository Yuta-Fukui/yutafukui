<template>
  <div id="app">
    <div id="header">
      <Header />
    </div>
    <div id="main">
      <Main />
    </div>
    <div>{{ this.skills }}</div>
    <div id="about">
      <About />
    </div>
    <div id="skill">
      <Skill />
      <p>{{ functionAPI }}</p>
    </div>
    <div id="vision">
      <Vision />
    </div>
    <div id="footer">
      <Footer />
    </div>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Main from './components/Main.vue'
import About from './components/About.vue'
import Skill from './components/Skill.vue'
import Vision from './components/Vision.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    Header,
    Main,
    About,
    Skill,
    Vision,
    Footer
  },
  data() {
    return {
      skills: []
    }
  },
  computed: {
    functionAPI() {
      return this.$store.getters.api
    }
  },
  mounted () {
    this.getSkills();
  },
  methods: {
    getSkills() {
      // dataのスキルを初期化する
      this.skills = [];
      // this.skillsを一時変数のitemsに参照コピーする
      let items = this.skills;
      // axios.getを用いてデプロイ済のfunctionにアクセスする
      this.axios.get('https://us-central1-portfolio-249d8.cloudfunctions.net/skills')
        .then((response) => {
          response.data.forEach(function(skill) {
            // 取得したデータを１件ずつ配列に設定する
            items.push(skill);
          })
        })
        .catch((e) => {
          alert(e);
        });
       console.log(items)
    },
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;700&display=swap');

* {
  font-family: 'Noto Sans JP', sans-serif;
}

#app {
  width: 100%;
  height: auto;
  box-sizing: border-box;
}

.title {
  color: #20879f;
  font-family: 'Noto Sans JP', sans-serif;
  font-weight: bold;
  font-size: 22px;
  text-shadow: 2px 2px 3px #7d8079;
  padding-bottom: 10px;
  padding-top: 10px;
  text-align: center;
}

.explain {
  color: #707070;
  font-size: 12px;
  font-weight: bold;
  flex-wrap: wrap;
  line-height: 20px;
  padding-bottom: 20px;
  width: 80%;
  margin: auto;
}
</style>
