<template>
  <div class="footerSection">
    <a
      href="#header"
      @click="clickSmoothScroll()"
    ><img
      class="footerScroll"
      src="@/assets/go_to_top.png"
      alt="footer"
    ></a>
    <div class="footerCopyright">
      ©︎ Seattleconsulting
    </div>
  </div>
</template>

<script>
export default {
  name: 'Footer',
  methods: {
    clickSmoothScroll () {
      event.preventDefault()
      this.$SmoothScroll(
        document.querySelector('#headerSection'),
        400,
        null,
        null,
        'y'
      )
    }
  }
}
</script>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;700&display=swap');

  .footerSection {
    background: linear-gradient(-135deg, #06e1c6, #06c1e6);
    padding-bottom: 15px;
    padding-top: 5px;
    text-align: center;
  }

  .footerCopyright {
    color: #fff;
    font-family: 'Noto Sans JP', sans-serif;
    font-size: 12px;
    font-weight: bold;
  }

  .footerScroll {
    width: 25px;
    height: 25px;
    border: 1px solid #06c1e6;
    border-radius: 50%;
    top: -10px;
    position: relative;
  }
</style>
