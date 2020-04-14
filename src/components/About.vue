<template>
  <div id="aboutSection">
    <div class="aboutTitle">
      About me
    </div>
    <div class="aboutExplain">
      滋賀県の国立大学で経済学（主に国際貿易）について学びつつ、主に課外活動を中心に大学生活を送る。キングコング西野亮廣さんの講演会に行き、これからの新しいことに挑戦する事の大切さに気づき、全く知識のないIT技術に興味を持つ。就活を通して、様々な価値観に触れる事の大切さ、面白さと自分の価値を上げる事の大切さを再確認した。さらに自分の価値を高めるために様々なことに挑戦している。
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
  }

  .aboutTitle {
    color: #20879f;
    font-family: 'Noto Sans JP', sans-serif;
    font-weight: bold;
    font-size: 18px;
    text-shadow: 2px 2px 3px #7d8079;
    padding-bottom: 10px;
    padding-top: 10px;
    text-align: center;
  }

  .aboutExplain {
    color: #707070;
    font-family: 'Noto Sans JP', sans-serif;
    font-weight: bold;
    font-size: 12px;
    flex-wrap: wrap;
    line-height: 16px;
    padding-bottom: 20px;
    width: 75%;
    margin: auto;
  }
</style>
