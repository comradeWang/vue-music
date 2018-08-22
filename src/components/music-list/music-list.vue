<template>
  <div class="music-list">
    <div class="back-title">
      <div class="back" @click="backToSinger">
        <i class="fa fa-chevron-left" aria-hidden="true"></i>
      </div>
      <div class="title">{{title}}</div>
    </div>
    <div class="bg-image" :style="backgroundImg" ref="bgImage">
      <div class="play-wrapper" v-show="playShow">
        <div class="play">
          <i class="fa fa-play" aria-hidden="true"></i>
          <span class="text">随机播放全部</span>
        </div>
      </div>
      <div class="filter" ref="filter"></div>
    </div>
    <div class="bg-layer" ref="layer"></div>
    <Scroll
      :probe-type="probeType"
      :listen-scroll="listenScroll"
      :data="songList" class="list"
      ref="list"
      @scroll="scroll">
      <div class="song-list-wrapper">
        <SongList :songs="songList"></SongList>
      </div>
      <div class="loading-container" v-show="!songList.length">
        <Loading></Loading>
      </div>
    </Scroll>
  </div>
</template>

<script>
import Scroll from '../../base/scroll/scroll'
import SongList from '../song-list/song-list'
import * as dom from '~common/js/dom'
import Loading from '@/base/loading/loading.vue'
const REHEIGHT = 40
const TRANSFORM = dom.prefixStyle('transform')
export default {
  name: 'music-list',
  components: {SongList, Scroll, Loading},
  data () {
    return {
      probeType: 3,
      listenScroll: true,
      scrollY: 0, // y轴方向滚动的距离
      playShow: true
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
  watch: {
    scrollY (newY) {
      let translateY = Math.max(this.minTranlateY, newY) // 判断最小
      let zIndex = -1 // 图片的zIndex变量
      let scale = 1 // 图片transform scale 变量
      const percent = Math.abs(newY / this.imageHeight)
      this.$refs.layer.style[TRANSFORM] = `translate3d(0,${translateY}px,0)`
      if (newY > 0) {
        scale = scale + percent
        zIndex = 10
      }
      if (this.minTranlateY === translateY) {
        zIndex = 10
        this.$refs.bgImage.style.paddingTop = '0px'
        this.$refs.bgImage.style.height = '40px'
        this.playShow = false
      } else {
        this.$refs.bgImage.style.paddingTop = '70%'
        this.$refs.bgImage.style.height = 0
        this.playShow = true
      }
      this.$refs.bgImage.style.zIndex = zIndex
      this.$refs.bgImage.style[TRANSFORM] = `scale(${scale})`
    }
  },
  computed: {
    backgroundImg () {
      return `background-image: url(${this.bgImage})`
    }
  },
  methods: {
    backToSinger () {
      this.$router.back()
    },
    scroll (pos) {
      this.scrollY = pos.y
    }
  },
  mounted () {
    this.imageHeight = this.$refs.bgImage.clientHeight
    this.$refs.list.$el.style.top = `${this.imageHeight}px`
    this.minTranlateY = -this.imageHeight + REHEIGHT
  }
}
</script>

<style scoped lang="scss">
  @import "~common/scss/variable";

  .music-list {
    position: relative;
    height: 100vh;
    .back-title {
      padding: 10px 15px;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      z-index: 11;
    }
    .back {
      color: $color-theme;
      font-size: 1.5rem;
      float: left;
    }
    .title {
      text-align: center;
      font-size: 1.2rem;
    }
    .bg-image {
      width: 100%;
      height: 0;
      padding-top: 70%;
      background-size: cover;
      background-repeat: no-repeat;
      position: relative;
      transform-origin: top;
      /*z-index: -1;*/
      .play-wrapper{
        position: absolute;
        bottom: 20px;
        left: 0;
        right: 0;
        color: $color-theme;
        z-index: 50;
        .play{
          display: inline-block;
          border: 1px solid $color-theme;
          padding: 15px;
          border-radius: 30px;
          font-size: $font-size-14;
        }
      }
      .filter {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(7, 17, 27, 0.4);
      }
    }
    .list {
      position: fixed;
      top: 0;
      bottom: 0;
      width: 100%;
      background-color: $color-background;
      /*overflow: hidden;*/
      .song-list-wrapper {
      }
    }
    .bg-layer {
      position: relative;
      height: 100%;
      background: #222222;
    }
  }
</style>
