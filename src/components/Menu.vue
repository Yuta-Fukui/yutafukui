<template>
  <div id="drawerSection">
    <label
      id="drawerButton"
      for="nav-input"
    >
      <div class="btn">
        <img src="../assets/close.png">
      </div>

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
        >Skill Set</a>
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
    clickSmoothScroll (section) {
      event.preventDefault()
      this.$SmoothScroll(
        document.querySelector(section),
        400,
        null,
        null,
        'y',
      );
      this.$emit('close')
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

  #drawerButton {
    width: 100px;
  }

  .btn {
    height: 40px;
    transition: all 0.3s ease 0s;
  }

  .btn :hover {
    border-bottom-color: transparent;
    transform: translateY(0.1875em);
  }

  .btn :active {
    text-decoration: none;
    position: relative;
    top: 1px;
    left: 1px;
  }

  img {
    float: right;
    padding: 10px;
    cursor: pointer;
  }

  .drawerMenuItem {
    background-color: #fff;
    width: 100%;
    height: 20px;
    padding: 20px 0;
    border: 1px solid  #f3f3f3;
  }

  a {
    color: #707070;
    font-size: 12px;
    text-decoration: none;
    padding-left: 10px;
    transition: all 0.3s ease 0s;
  }

  a:active {
    text-decoration: none;
    position: relative;
    top: 1px;
    left: 1px;
  }
</style>
