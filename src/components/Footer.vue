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
    <p>{{ sample }}</p>
  </div>
</template>

<script>
export default {
  name: 'Footer',
  computed: {
     sample(){
      return this.$store.getters.function
   }
  },
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
  .footerSection {
    background: linear-gradient(-135deg, #06e1c6, #06c1e6);
    padding-bottom: 15px;
    padding-top: 5px;
    text-align: center;
  }

  .footerCopyright {
    color: #fff;
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
    transition: all 0.3s ease 0s;
  }

  .footerScroll :hover {
    border-bottom-color: transparent;
    transform: translateY(0.1875em);
  }
</style>
