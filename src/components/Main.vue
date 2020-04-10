<template>
  <div class="mainSection">
    <div
      class="userName"
    >
      Y.FUKUI
    </div>
    <hr>
    <div
      class="companyName"
    >
      Seattleconsulting
    </div>
    <img
      class="profilePicture"
      src="../assets/menu.png"
    >
  </div>
</template>

<script>
  export default {
  name: 'Main',
  }
</script>

<style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;700&display=swap');

  .mainSection {
    background: linear-gradient(-135deg, #06e1c6, #06c1e6);
    padding-bottom: 30px;
    padding-top: 10px;
    text-align: center;
  }

  hr {
    width: 300px;
    size: 20px;
    margin: auto;
    padding-bottom: 30px;
  }

  .userName {
    color: #fff;
    font-family: 'Noto Sans JP', sans-serif;
    font-weight: bold;
    font-size: 18px;
    height: auto;
    width: 100%;
    padding-bottom: 30px;
    padding-top: 10px;
  }

  .companyName {
    color: #fff;
    font-family: 'Noto Sans JP', sans-serif;
    font-weight: bold;
    font-size: 18px;
    padding-bottom: 30px;
  }

  .profilePicture {
    border-radius: 50%;
    width: 64px;
    height: 64px;
  }
</style>
