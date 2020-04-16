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
    <div id="skillCategories">
      <span
        class="front"
        @click="setCurrentChart('front')"
      >Frontend</span>
      <span
        class="back"
        @click="setCurrentChart('back')"
      >Backend</span>
      <span
        class="dev"
        @click="setCurrentChart('dev')"
      >DevOps</span>
    </div>
    <div id="skillList">
      <ul
        class="frontend"
        :class="{ 'frontend-change' : isFrontActive}"
      >
        <li>HTML</li>
        <li>CSS</li>
        <li>Javascript</li>
        <li>SCSS</li>
        <li>Vue</li>
      </ul>
      <ul
        class="backend"
        :class="{ 'backend-change' : isBackActive}"
      >
        <li>java</li>
        <li>Ruby</li>
        <li>RubyonRails</li>
        <li>MySQL</li>
      </ul>
      <ul
        class="devOps"
        :class="{ 'devOps-change' : isDevActive}"
      >
        <li>Linux</li>
        <li>Node</li>
        <li>Git</li>
        <li>GitHub</li>
        <li>Firebase</li>
      </ul>
    </div>
    <div id="skillchart">
      <Frontend
        v-if="isFrontActive"
        id="frontchart"
      />
      <Backend
        v-if="isBackActive"
        id="backchart"
      />
      <DevOps
        v-if="isDevActive"
        id="devchart"
      />
    </div>
  </div>
</template>

<script>
import Frontend from '../components/Frontend.vue'
import Backend from '../components/Backend.vue'
import DevOps from '../components/DevOps.vue'

export default {
  name: 'Skill',
  components: {
    Frontend,
    Backend,
    DevOps
  },
  data() {
    return {
      currentChart: 'front'
   }
  },
  computed: {
    isFrontActive() {
      return this.currentChart == 'front';
    },
    isBackActive() {
      return this.currentChart == 'back';
    },
    isDevActive() {
      return this.currentChart == 'dev';
    }
  },
    methods: {
      setCurrentChart(chart) {
        this.currentChart = chart;
      }
    }
}
</script>

<style>
  #skillSection {
    background-color: #fff;
    width: 100%;
    height: auto;
    text-align: center;
  }

  .skillTitle {
    color: #20879f;
    font-weight: bold;
    font-size: 18px;
    text-shadow: 2px 2px 3px #7d8079;
    padding-bottom: 10px;
    padding-top: 10px;
  }

  .skillExplain {
    color: #707070;
    font-size: 12px;
    flex-wrap: wrap;
    line-height: 16px;
    padding-bottom: 10px;
    width: 75%;
    margin: auto;
    text-align: left;
  }

  .gitHubLabel {
    color: #20879f;
    font-size: 12px;
  }

  .gitHubLink {
    color: #20879f;
    font-size: 12px;
  }

  #skillCategories {
    padding-top: 10px;
  }

  .front {
    color: rgba(181, 26, 26, 0.75);
    padding-right: 10px;
    cursor: pointer;
  }

  .back {
    color: rgba(15, 136, 57, 0.75);
    cursor: pointer;
  }

  .dev {
    color: rgba(87, 16, 131, 0.75);
    padding-left: 10px;
    cursor: pointer;
  }

  #skillList {
    height: 30px;
    margin: 10px 20px 10px 20px;
    width: auto;
    text-align: center;
  }

  li {
    margin: 10px 10px;
    display: inline-block;
  }

  .frontend-change li {
    background-color: rgba(181, 26, 26, 0.25);
  }

  .backend-change li {
    background-color: rgba(15, 136, 57, 0.25);
  }

  .devOps-change li {
    background-color: rgba(87, 16, 131, 0.25);
  }

  .frontend li {
    color: rgba(181, 26, 26, 0.75);
  }

  .backend li {
    color: rgba(15, 136, 57, 0.75);
  }

  .devOps li {
    color: rgba(87, 16, 131, 0.75);
  }

  #skillList li {
    list-style: none;
    margin: 5px 5px 10px 5px;
    box-shadow: 2px 2px 3px #7d8079;
    border: 5px, solid, #fff;
    padding: 5px;
  }

  #skillchart {
    width: 300px;
    height: 300px;
    margin: 100px auto 20px auto;
  }
</style>
