<template>
    <div class="slider" ref="slider">
      <div class="slider-group" ref="sliderGroup">
        <slot></slot>
      </div>
      <div class="dots">
        <span class="dot" v-for="(item,$index) in dots" :key="$index" :class="{active: currPageIndex === $index}"></span>
      </div>
    </div>
</template>

<script>
import BScroll from 'better-scroll'
import { addClass } from '../../common/js/dom'
export default {
  name: 'slider',
  data () {
    return {
      dots: [],
      currPageIndex: 0,
      timer: ''
    }
  },
  props: {
    loop: {
      type: Boolean,
      default: true
    },
    autoPlay: {
      type: Boolean,
      default: true
    },
    delay: {
      type: Number,
      default: 4000
    }
  },
  methods: {
    _setSliderWidth () {
      this.children = this.$refs.sliderGroup.children
      let width = 0
      let sliderWidth = this.$refs.slider.clientWidth
      for (let i = 0; i < this.children.length; i++) {
        let child = this.children[i]
        addClass(child, 'slider-item')
        child.style.width = sliderWidth + 'px'
        width += sliderWidth
      }
      if (this.loop) {
        width += 2 * sliderWidth
      }
      this.$refs.sliderGroup.style.width = width + 'px'
    },
    _initSlider () {
      this.slider = new BScroll(this.$refs.slider, {
        scrollX: true,
        scrollY: false,
        momentum: false,
        snap: {
          loop: this.loop,
          threshold: 0.3,
          speed: 500
        },
        click: true
      })
      this.slider.on('scrollEnd', () => {
        let pageIndex = this.slider.getCurrentPage().pageX
        if (this.loop) {
          // pageIndex -= 1
        }
        this.currPageIndex = pageIndex
        if (this.autoPlay) {
          clearTimeout(this.timer)
          this._play()
        }
      })
    },
    _initDots () {
      this.dots = new Array(this.children.length)
    },
    _play () {
      let pageIndex = this.currPageIndex
      if (this.loop) {
        pageIndex += 1
      }
      this.timer = setTimeout(() => {
        this.slider.goToPage(pageIndex, 0, 500)
      }, 1000)
    }
  },
  mounted () {
    setTimeout(() => {
      this._setSliderWidth()
      this._initDots()
      this._initSlider()
      if (this.autoPlay) {
        this._play()
      }
    }, 20)
  }
}
</script>

<style scoped lang="scss">
  @import "../../common/scss/variable";
  .slider{
    min-height: 1px;
    position: relative;
    .slider-group{
      position: relative;
      overflow: hidden;
      white-space: nowrap;
      .slider-item{
        float: left;
        box-sizing: border-box;
        overflow: hidden;
        text-align: center;
        a{
          display: block;
          width: 100%;
          overflow: hidden;
          text-decoration: none;
        }
        img{
          display: block;
          width: 100%;
        }
      }
    }
    .dots{
      position: absolute;
      right: 0;
      left: 0;
      bottom: 12px;
      .dot{
        display: inline-block;
        margin: 0 4px;
        border-radius: 50%;
        width: 8px;
        height: 8px;
        background-color: $color-text-l;
      }
      .active{
        background-color: $color-theme;
      }
    }
  }
</style>
