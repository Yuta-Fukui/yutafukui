<template>
  <div id="aboutSection">
    <div class="aboutTitle">
      About me
    </div>
    <div class="aboutExplain">
      aaaaaaaaaaaaaaaaa
    </div>
  </div>
</template>

<script>
  export default {
    name: 'About',
  }
</script>

<style lang="scss" scoped>
  #aboutSection {
    background-color: #f5f5f5;
    width: 100%;
    height: auto;
    margin: 0 auto;
    text-align: center;
  }

  .aboutTitle {
    color: #20879f;
    font-family: 'Noto Sans JP', sans-serif;
    font-weight: bold;
    font-size: 18px;
    text-shadow: 2px 2px 3px #7d8079;
    padding-bottom: 10px;
    padding-top: 10px;
  }

  .aboutExplain {
    color: #707070;
    font-family: 'Noto Sans JP', sans-serif;
    font-weight: bold;
    font-size: 12px;
    word-break: break-all;
    line-height: 0.25px;
  }
</style>
