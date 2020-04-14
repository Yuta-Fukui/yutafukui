<template>
  <div id="drawerSection">
    <div class="drawerButton">
      <img src="../assets/close.png">
    </div>
    <ul class="drawerMenuSection">
      <li class="drawerMenuItem">
        <a
          href="#app"
          class="drawerMenuItemLink"
          @click="clickSmoothScroll()"
        >Home</a>
      </li>
      <li class="drawerMenuItem">
        <a
          href="#about"
          class="drawerMenuItemLink"
          @click="clickSmoothScroll()"
        >About me</a>
      </li>
      <li class="drawerMenuItem">
        <a
          href="#skill"
          class="drawerMenuItemLink"
          @click="clickSmoothScroll()"
        >Skill Sets</a>
      </li>
      <li class="drawerMenuItem">
        <a
          href="#vision"
          class="drawerMenuItemLink"
          @click="clickSmoothScroll()"
        >Vision</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  methods: {
    clickSmoothScroll () {
      event.preventDefault()
      this.$SmoothScroll(
        document.querySelector('#app'),
        400,
        'y'
      )
    }
  }
}
</script>

<style scoped>
  #drawerSection {
    background-color: #f3f3f3;
    width: 100%;
    height: auto;
  }

  .drawerButton {
    background-color: #f3f3f3;
    width: 100%;
    height: 30px;
  }

  img {
    float: right;
    padding: 10px;
  }

  .drawerMenuItem {
    background-color: #fff;
    width: 100%;
    height: auto;
    padding: 20px 10px;
    padding-bottom: 10px;
    border: 1px solid  #f3f3f3;
  }

  .drawerMenuItemLink {
    color: #707070;
    font-size: 12px;
    font-family: 'Noto Sans JP', sans-serif;
    display: inline;
    text-decoration: none;
  }
</style>
