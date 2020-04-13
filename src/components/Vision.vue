<template>
  <div id="visionSection">
    <div class="visionTitle">
      Vision
    </div>
    <div class="visionExplain">
      自分の能力を高めるために、どんどん出来ないことにチャレンジしていきます。IT技術は0からのスタートなので、トライ＆エラーを繰り返していくことで力を蓄え、困難なことにも挑戦し続ける事の出来る人間を目指します。
    </div>
  </div>
</template>

<script>
export default {
  name: 'Vision',
}
</script>

<style>
  #visionSection {
    background-color: #f5f5f5;
    width: 100%;
    height: auto;
  }

  .visionTitle {
    color: #20879f;
    font-family: 'Noto Sans JP', sans-serif;
    font-weight: bold;
    font-size: 18px;
    text-shadow: 2px 2px 3px #7d8079;
    padding-bottom: 10px;
    padding-top: 10px;
    text-align: center;
  }

  .visionExplain {
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
