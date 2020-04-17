<template>
  <div id="mainSection">
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
      src="../assets/yuta.png"
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

  #mainSection {
    background: linear-gradient(-135deg, #06e1c6, #06c1e6);
    padding-top: 50px;
    padding-bottom: 25px;
    text-align: center;
    border-bottom: solid 1px #cbcbcb;
  }

  hr {
    width: 300px;
    size: 20px;
    margin: auto;
    padding-bottom: 15px;
  }

  .userName {
    color: #fff;
    font-family: 'Noto Sans JP', sans-serif;
    font-weight: bold;
    font-size: 18px;
    height: auto;
    width: 100%;
    padding-bottom: 15px;
    padding-top: 10px;
  }

  .companyName {
    color: #fff;
    font-family: 'Noto Sans JP', sans-serif;
    font-weight: bold;
    font-size: 18px;
    padding-bottom: 15px;
  }

  .profilePicture {
    border-radius: 50%;
    width: 64px;
    height: 64px;
  }
</style>
