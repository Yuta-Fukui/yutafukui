<template>
  <div id="visionSection">
    <div class="visionTitle">
      Vision
    </div>
    <div class="visionExplain">
      将来の目標としている人物は「ドラえもん」ののび太くんです。彼のもつ優しさは誰にも勝るものだと思い、憧れてきました。
      <br>
      そのために必要なことは誰よりも余裕のある人物になることだと思っています。それには自分のキャパシティを大きくすることが必要です。
      <br>
      なので、自分の能力を高め、キャパシティを大きくしていくために、どんどん出来ないことにチャレンジしていきます。IT技術は0からのスタートなので、トライ＆エラーを繰り返していくことで能力を高めていこうと思います。
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
    padding-top: 20px;
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
    line-height: 20px;
    padding-bottom: 20px;
    width: 80%;
    margin: auto;
  }
</style>
