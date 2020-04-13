<template>
  <div id="drawerSection">
    <button class="drawerButton">
      <img src="../assets/close.png">
    </button>
    <ul class="drawerMenuSection">
      <li class="drawerMenuItem">
        <a
          href="../components/Main.vue"
          class="drawerMenuItemLink"
        >
          Home
        </a>
      </li>
      <li class="drawerMenuItem">
        <a
          href="../components/About.vue"
          class="drawerMenuItemLink"
        >
          About me
        </a>
      </li>
      <li class="drawerMenuItem">
        <a
          href="../components/Skill.vue"
          class="drawerMenuItemLink"
        >
          Skill Sets
        </a>
      </li>
      <li class="drawerMenuItem">
        <a
          href="../components/Vision.vue"
          class="drawerMenuItemLink"
        >
          Vision
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Menu',
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
    list-style: none;
  }

  .drawerButton {
    float: right;
    box-shadow: none;
    border-style: none;
  }

  .drawerMenuItemLink {
    color: #707070;
    font-size: 12px;
    font-family: 'Noto Sans JP', sans-serif;
    display: inline;
  }
</style>
