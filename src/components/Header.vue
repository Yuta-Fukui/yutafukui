<template>
  <div id="headerSection">
    <button
      class="headerButton"
      @click="toggle"
    >
      <img
        src="../assets/menu.png"
        width="30px"
        weight="30px"
      >
    </button>
    <Drawer
      align="left"
      :closeable="true"
      @close="toggle"
    >
      <div v-if="open">
        <Menu />
      </div>
    </Drawer>
  </div>
</template>

<script>
import Drawer from "vue-simple-drawer"
import Menu from '../components/Menu';


export default {
  name: "Header",
  components: {
    Drawer,
    Menu
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
<style scoped>
  #headerSection {
    background-color: #f3f3f3;
    height: auto;
    width: 100%;
  }

  .headerButton {
    box-shadow: none;
    border-style: none;
    background-color: #f3f3f3;
  }
</style>
