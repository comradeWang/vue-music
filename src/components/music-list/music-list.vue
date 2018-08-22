<template>
  <div class="music-list">
    <div class="back-title">
      <div class="back" @click="backToSinger">
        <i class="fa fa-chevron-left" aria-hidden="true"></i>
      </div>
      <div class="title">{{title}}</div>
    </div>
    <div class="bg-image" :style="backgroundImg" ref="bgImage">
      <div class="filter"></div>
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
    </Scroll>
  </div>
</template>

<script>
import Scroll from '../../base/scroll/scroll'
import SongList from '../song-list/song-list'
const REHEIGHT = 40
export default {
  name: 'music-list',
  components: {SongList, Scroll},
  data () {
    return {
      probeType: 3,
      listenScroll: true,
      scrollY: 0 // y轴方向滚动的距离
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
      let translateY = Math.max(this.minTranlateY, newY)
      let zIndex = -1
      this.$refs.layer.style['transform'] = `translate3d(0,${translateY}px,0)`
      this.$refs.layer.style['webkitTransform'] = `translate3d(0,${translateY}px,0)`
      if (this.minTranlateY === translateY) {
        zIndex = 10
        this.$refs.bgImage.style.paddingTop = '0'
        this.$refs.bgImage.style.height = '40px'
      } else {
        this.$refs.bgImage.style.paddingTop = '70%'
        this.$refs.bgImage.style.height = 0
      }
      this.$refs.bgImage.style.zIndex = zIndex
    }
  },
  computed: {
    backgroundImg () {
      return `background-image: url(${this.bgImage})`
    }
  },
  methods: {
    backToSinger () {
      this.$router.push('/singer')
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
      background-position: center;
      background-repeat: no-repeat;
      position: relative;
      z-index: -1;
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
