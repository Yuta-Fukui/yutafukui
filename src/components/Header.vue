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
        menu
      </div>
    </Drawer>
  </div>
</template>

<script>
import Drawer from "vue-simple-drawer"


export default {
  name: "Header",
  components: {
    Drawer,
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
    margin-top: 5px;
    background-color: #f3f3f3;
  }
</style>
