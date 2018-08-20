<template>
  <div class="music-list">
    <div class="back-title">
      <div class="back">
        <i class="fa fa-chevron-left" aria-hidden="true"></i>
      </div>
      <div class="title">{{title}}</div>
    </div>
    <div class="bg-image" :style="backgroundImg"></div>
  </div>
</template>

<script>
export default {
  name: 'music-list',
  data () {
    return {
    }
  },
  props: {
    title: {
      type: String,
      default: null
    },
    bgImage: {
      type: String,
      default: null
    },
    songList: {
      type: Array,
      default: null
    }
  },
  watch: {},
  computed: {
    backgroundImg () {
      return `background-image: url(${this.bgImage})`
    }
  },
  methods: {},
  mounted () {}
}
</script>

<style scoped lang="scss">
@import "~common/scss/variable";
  .music-list{
    position: relative;
    .back-title{
      padding: 10px 15px;
    }
    .back{
      color: $color-theme;
      font-size: 1.5rem;
      float: left;
    }
    .title{
      text-align: center;
      font-size: 1.2rem;
    }
    .bg-image{
      width: 100%;
      height: 300px;
      background-size: 100% 100%  ;
      background-position: center;
      background-repeat: no-repeat;
      position: fixed;
      top: 0;
      left: 0;
      z-index: -1;
    }
  }
</style>
