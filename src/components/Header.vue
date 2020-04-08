<template>
  <div id="headerSection">
    <button @click="toggle" class="btn btn-success"><img src="sozai_cman_jp_20200408124046.png"></button>
    <Drawer @close="toggle" align="left" :closeable="true">
      <div v-if="open"></div>
    </Drawer>
  </div>
</template>
 
<script>
import Drawer from "vue-simple-drawer";
 
export default {
  name: "App",
  components: {
    Drawer
  },
  data() {
    return {
      open: false
    }
  },
  methods: {
    toggle() {
      this.open = !this.open
    }
  }
};
</script>
<style lang="scss">
@import "~bootstrap/scss/bootstrap-reboot",
"~bootstrap/scss/buttons";
</style>
<style lang="scss" scoped>
    #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #f3f3f3;
  margin: 0 auto;
  width: 800px;
}
</style>
