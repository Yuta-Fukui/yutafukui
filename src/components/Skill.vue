<template>
  <div id="skillSection">
    <div class="title skillTitle">
      Skill Set
    </div>
    <div class="explain skillExplain">
      スキルについてまとめました。Front-Endに関しては、未経験というのもあってまだまだ慣れていない部分も多々ありますが、少しずつ仕組みを理解できていると思います。Back-Endに関しては研修で触れたものもありますが、まだまだ自走できる状態にはありません。これからどんどん経験を積んでいきたいと思います。
      <br>
      グラフは五段階で自分を評価しました。Front-Endに関しては、これまでの研修でどれだけ知識が入って今回のポートフォリオ実装で活かすことが出来たかで判断しています。Back-End、DevOpsに関しては、これまでの研修でどれだけ知識が入ったかで判断しています。
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
        v-if="isFrontActive && loaded"
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
    },
    loaded() {
      return this.$store.state.loaded
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
    padding-top: 40px;
    padding-bottom: 30px;
  }

  .skillExplain {
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

  .gitHubLink :hover {
    border-bottom-color: transparent;
    transform: translateY(0.1875em);
  }

  #skillCategories {
    padding-top: 20px;
    cursor: pointer;
    font-size: 18px;
    text-shadow: 1px 1px 1px #7d8079;
    transition: all 0.3s ease 0s;
  }

  #skillCategories :hover {
    border-bottom-color: transparent;
    transform: translateY(0.1875em);
  }

  .front {
    color: rgba(181, 26, 26, 0.75);
    padding-right: 10px;
    transition: all 0.3s ease 0s;
  }

  .back {
    color: rgba(15, 136, 57, 0.75);
  }

  .dev {
    color: rgba(87, 16, 131, 0.75);
    padding-left: 10px;
  }

  #skillList {
    height: 50px;
    margin: 20px 20px 0 20px;
    width: auto;
    display: inline-block;
    cursor: default;
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
    margin-bottom: 10px;
  }

  #skillList li {
    list-style: none;
    margin: 5px 5px 10px 5px;
    box-shadow: 2px 2px 3px #7d8079;
    border: 1px, solid, #fff;
    border-radius: 10%;
    padding: 5px;
    display: inline-block;
  }

  #skillchart {
    width: 300px;
    height: 300px;
    margin: 0 auto;
    padding-top: 50px;
  }
</style>
