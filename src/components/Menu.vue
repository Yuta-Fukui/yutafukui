<template>
  <div id="drawerSection">
    <label
      for="nav-input"
      class="drawerButton"
    >
      <img src="../assets/close.png">
    </label>
    <ul class="drawerMenuSection">
      <li class="drawerMenuItem">
        <a
          href="#app"
          class="drawerMenuItemLink"
          @click="clickSmoothScroll('#mainSection')"
        >Home</a>
      </li>
      <li class="drawerMenuItem">
        <a
          href="#about"
          class="drawerMenuItemLink"
          @click="clickSmoothScroll('#aboutSection')"
        >About me</a>
      </li>
      <li class="drawerMenuItem">
        <a
          href="#skill"
          class="drawerMenuItemLink"
          @click="clickSmoothScroll('#skillSection')"
        >Skill Sets</a>
      </li>
      <li class="drawerMenuItem">
        <a
          href="#vision"
          class="drawerMenuItemLink"
          @click="clickSmoothScroll('#visionSection')"
        >Vision</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  methods: {
    clickSmoothScroll (Section) {
      event.preventDefault()
      this.$SmoothScroll(
        document.querySelector(Section),
        400,
        null,
        null,
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
    cursor: pointer;
  }

  .drawerMenuItem {
    background-color: #fff;
    width: 100%;
    height: auto;
    padding: 20px 10px;
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
