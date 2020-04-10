<template>
  <div id="app">
    <Header />
    <Main />
    <About />
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Main from './components/Main.vue'
import About from './components/About.vue'

export default {
  name: 'App',
  components: {
    Header,
    Main,
    About

  }
}
</script>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;700&display=swap');
</style>
