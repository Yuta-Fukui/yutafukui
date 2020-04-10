<template>
  <div id="drawerSection">
    <button class="drawerButton">
      <img src="../assets/close.png">
    </button>
    <ul class="drawerMenuSection">
      <li class="drawerMenuItem">
        <a
          herf=""
          class="drawerMenuItemLink"
        >Home</a>
      </li>
      <li class="drawerMenuItem">
        <a
          herf=""
          class="drawerMenuItemLink"
        >About Me</a>
      </li>
      <li class="drawerMenuItem">
        <a
          herf=""
          class="drawerMenuItemLink"
        >Skill Sets</a>
      </li>
      <li class="drawerMenuItem">
        <a
          herf=""
          class="drawerMenuItemLink"
        >Vision</a>
      </li>
      <li class="drawerMenuItem">
        <a
          herf=""
          class="drawerMenuItemLink"
        >Custmoize Item1</a>
      </li>
      <li class="drawerMenuItem">
        <a
          herf=""
          class="drawerMenuItemLink"
        >Custmoize Item2</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
  #drawerSection {
    background-color: #f3f3f3;
    width: 100%;
    height: auto;
  }

  .drawerMenuSection {
    background-color: #fff;
    width: 100%;
    height: auto;
  }

  .drawerMenuItem {
    background-color: #fff;
    width: 100%;
    height: 50px;
  }

  .drawerButton {
    float: right;
    box-shadow: none;
    border-style: none;
  }

  .drawerMenuItemLink {
    color: #707070;
    font-size: 12px;
    display: inline;
  }
</style>
