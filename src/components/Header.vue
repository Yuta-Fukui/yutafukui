<template>
  <div id="headerSection">
    <input
      id="nav-input"
      type="checkbox"
      class="nav-unshown"
    >
    <label
      id="nav-open"
      for="nav-input"
    ><img
      src="../assets/menu.png"
      width="25px"
      height="25px"
      @click="openMenu"
    >
    </label>
    <label
      id="nav-close"
      class="nav-unshown"
      for="nav-input"
    />
    <div
      id="nav-content"
      :class="{'nav-unshown' : isActive}"
    >
      <Menu @close="closedMenu" />
    </div>
  </div>
</template>

<script>
import Menu from '../components/Menu.vue'

export default {
  name: "Header",
   components: {
    Menu
  },
  data() {
    return{
      isActive: false
    }
  },
   methods: {
     closedMenu() {
      this.isActive= true
     },
    openMenu() {
      this.isActive= false
    }
  }
};
</script>

<style scoped>
#headerSection {
  background-color: #f3f3f3;
  height: auto;
  width: 100%;
  position: fixed;
  top: 0;
}

img {
  cursor: pointer;
}

#nav-drawer {
  position: relative;
}

/* チェックボックス等は非表示に */
.nav-unshown {
  display: none;/* はじめは隠しておく */
}

/* アイコンのスペース */
#nav-open {
  display: inline-block;
  width: 30px;
  height: 22px;
  vertical-align: middle;
  padding: 10px;
}

/* 閉じる用の薄黒カバー */
#nav-close {
  display: none;/* はじめは隠しておく */
  position: fixed;
  z-index: 99;
  top: 0;/* 全体に広がるように */
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  transition: 0.3s ease-in-out;
}

/* 中身 */
#nav-content {
  overflow: auto;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;/* 最前面に */
  width: 30%;/* 右側に隙間を作る（閉じるカバーを表示） */
  height: auto;
  transition: 0.3s ease-in-out;/* 滑らかに表示 */
  -webkit-transform: translateX(-105%);
  transform: translateX(-105%);/* 左に隠しておく */
}

/* チェックが入ったらもろもろ表示 */
#nav-input:checked ~ #nav-close {
  display: block;/* カバーを表示 */
  opacity: 0.5;
}

#nav-input:checked ~ #nav-content {
  -webkit-transform: translateX(0%);
  transform: translateX(0%);/* 中身を表示（右へスライド） */
  box-shadow: 6px 0 25px rgba(0, 0, 0, 0.15);
}
</style>
