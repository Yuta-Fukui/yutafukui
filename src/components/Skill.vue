<template>
  <div id="skillSection">
    <div class="skillTitle">
      Skill Set
    </div>
    <div class="skillExplain">
      自分の能力を高めるために、どんどん出来ないことにチャレンジしていきます。IT技術は0からのスタートなので、トライ＆エラーを繰り返していくことで力を蓄えていき、困難なことにも挑戦し続ける事の出来る人間を目指します。
    </div>
    <label class="gitHubLabel">GitHub:<a
      href="https://github.com/Yuta-Fukui/"
      class="gitHubLink"
    >https://github.com/Yuta-Fukui/</a></label>
    <div class="skillCategories">
      <a class="Frontend">Frontend</a>
      <a class="Backend">Backend</a>
      <a class="DevOps">DevOps</a>
    </div>
    <div class="skillList">
      <p class="Frontends">
        skill
      </p>
      <p class="Backends">
        skill
      </p>
      <p class="DevOpses">
        skill
      </p>
    </div>
    <div class="skillGraph" />
  </div>
</template>

<script>
export default {
  name: 'Skill',
}
</script>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;700&display=swap');

  #skillSection {
    background-color: #fff;
    width: 100%;
    height: auto;
    text-align: center;
  }

  .skillTitle {
    color: #20879f;
    font-family: 'Noto Sans JP', sans-serif;
    font-weight: bold;
    font-size: 18px;
    text-shadow: 2px 2px 3px #7d8079;
    padding-bottom: 10px;
    padding-top: 10px;
  }

  .skillExplain {
    color: #707070;
    font-family: 'Noto Sans JP', sans-serif;
    font-size: 12px;
    flex-wrap: wrap;
    line-height: 16px;
    padding-bottom: 10px;
    width: 75%;
    margin: auto;
  }

  .gitHubLabel {
    color: #20879f;
    font-family: 'Noto Sans JP', sans-serif;
    font-size: 12px;
  }

  .gitHubLink {
    color: #20879f;
    font-family: 'Noto Sans JP', sans-serif;
    font-size: 12px;
  }

  .skillCategories {
    padding-top: 10px;
  }

  .Frontend {
    color: rgba(181, 26, 26, 0.75);
    padding-right: 5px;
  }

  .Backend {
    color: rgba(15, 136, 57, 0.75);
    padding-right: 5px;
  }

  .DevOps {
    color: rgba(87, 16, 131, 0.75);
  }

  .skillList {
    height: 30px;
    margin-top: 10px;
    margin-bottom: 10px;
    display: flex;
    width: 75%;
  }

  .Frontends {
    color: rgba(181, 26, 26, 0.75);
    background-color: rgba(181, 26, 26, 0.25);
    list-style: none;
    margin-right: 10px;
    padding: 5px;
    box-shadow: 2px 2px 3px #7d8079;
    border: 5px, solid, #fff;
  }

  .Backends {
    color: rgba(15, 136, 57, 0.75);
    background-color: rgba(15, 136, 57, 0.25);
    list-style: none;
    margin-right: 10px;
    box-shadow: 2px 2px 3px #7d8079;
    border: 5px, solid, #fff;
    padding: 5px;
  }

  .DevOpses {
    color: rgba(87, 16, 131, 0.75);
    background-color: rgba(87, 16, 131, 0.25);
    list-style: none;
    margin-right: 10px;
    box-shadow: 2px 2px 3px #7d8079;
    border: 5px, solid, #fff;
    padding: 5px;
  }

  .skillGraph {
    color: rgba(181, 26, 26, 0.75);
    background-color: rgba(181, 26, 26, 0.25);
  }
</style>
