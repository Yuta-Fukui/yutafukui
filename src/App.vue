<template>
  <div id="app">
    <div id="header">
      <Header />
    </div>
    <div id="main">
      <Main />
    </div>
    <div id="about">
      <About />
    </div>
    <div id="skill">
      <Skill />
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
}
</style>
