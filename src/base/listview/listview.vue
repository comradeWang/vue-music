<template>
  <Scroll
    class="listView"
    :data="data"
    ref="listView"
    :listen-scroll="true"
    :probe-type="probeType"
    @scroll="scroll">
    <ul>
      <li class="list-group" v-for="(group,index) in data" :key="index" ref="listGroup">
        <h2 class="list-group-title">{{group.title}}</h2>
        <ul>
          <li class="list-group-item" v-for="(item,$index) in group.items" :key="$index" @click="clickItem(item)">
            <img v-lazy="item.avatar" alt="" class="avatar">
            <span class="name">{{item.name}}</span>
          </li>
        </ul>
      </li>
    </ul>
    <div class="list-shortcut" @touchstart="onShortCutTouchStart" @touchmove.stop.prevent="onShortCutTouchMove">
      <ul>
        <li v-for="(item,index) in shortcutList"
            :key="index"
            class="item"
            :class="{current: currentIndex === index}"
            :data-index="index">
          {{item}}
        </li>
      </ul>
    </div>
    <div class="list-fixed" v-show="scrollY < 0" ref="fixed">
      <h1 class="fixed-title">{{fixedTitle}}</h1>
    </div>
    <div class="loading-container" v-show="!data.length">
      <Loading></Loading>
    </div>
  </Scroll>
</template>

<script>
import Scroll from '../scroll/scroll'
import {getData} from '../../common/js/dom'
import Loading from '../loading/loading'
const ANCHOR_HEIGHT = 21
const TITLE_HEIGHT = 30
export default {
  name: 'listview',
  components: {
    Scroll,
    Loading
  },
  data () {
    return {
      touch: {},
      scrollY: -1,
      currentIndex: 0,
      listHeight: [],
      probeType: 3,
      diff: -1, // 固定标题平滑滚动变量
      fixedTop: -1
    }
  },
  props: {
    data: {
      type: Array,
      default: null
    }
  },
  computed: {
    shortcutList () {
      return this.data.map((group) => {
        return group.title.substr(0, 1)
      })
    },
    fixedTitle () {
      return this.data[this.currentIndex] ? this.data[this.currentIndex].title : ''
    }
  },
  methods: {
    clickItem (item) {
      this.$emit('select', item)
    },
    onShortCutTouchStart (e) {
      let anchorIndex = getData(e.target, 'index')
      let firstTouch = e.touches[0]
      this.touch.y1 = firstTouch.pageY
      this.touch.anchorIndex = anchorIndex
      this._scrollTo(anchorIndex)
    },
    onShortCutTouchMove (e) {
      let firstTouch = e.touches[0]
      this.touch.y2 = firstTouch.pageY
      let delta = (this.touch.y2 - this.touch.y1) / ANCHOR_HEIGHT | 0 // 偏移量
      let anchorIndex = parseInt(this.touch.anchorIndex) + delta
      this._scrollTo(anchorIndex)
    },
    scroll (pos) {
      this.scrollY = pos.y
    },
    _scrollTo (index) {
      if (!index && index !== 0) {
        return
      }
      if (index < 0) {
        index = 0
      } else if (index > this.listHeight.length - 2) {
        index = this.listHeight.length - 2
      }
      this.scrollY = -this.listHeight[index]
      this.$refs.listView.scrollToElement(this.$refs.listGroup[index], 0)
    },
    /**
       * 获取到每个A-Z每个模块到页面顶部的距离
       * @private
       */
    _calcHeight () {
      this.listHeight = []
      const list = this.$refs.listGroup
      let height = 0
      this.listHeight.push(height)
      for (let i = 0; i < list.length; i++) {
        let item = list[i]
        height += item.clientHeight
        this.listHeight.push(height)
      }
    }
  },
  watch: {
    data () {
      setTimeout(() => {
        this._calcHeight()
      }, 20)
    },
    scrollY (newY) {
      const listHeight = this.listHeight
      // 当滚动到顶部 newY > 0
      if (newY > 0) {
        this.currentIndex = 0
        return
      }
      // 当滚动到中部
      for (let i = 0; i < listHeight.length; i++) {
        let height1 = listHeight[i]
        let height2 = listHeight[i + 1]
        if (!height2 || (-newY > height1 - 10 && -newY < height2 - 10)) {
          this.currentIndex = i
          this.diff = height2 + newY // 获取diff 判断固定标题高度
          return
        }
      }
      // 当滚动到底部 -newY要大于最后一个元素的上限
      this.currentIndex = listHeight.length - 2
    },
    diff (newVal) {
      let fixedTop = (newVal > 0 && newVal < TITLE_HEIGHT) ? newVal - TITLE_HEIGHT : 0
      if (this.fixedTop === fixedTop) {
        return
      }
      this.fixedTop = fixedTop
      this.$refs.fixed.style.transform = `translate3d(0,${fixedTop}px,0)`
    }
  },
  created () {
    console.log(this.url)
  }
}
</script>

<style scoped lang="scss">
  @import "../../common/scss/variable";

  .listView {
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
    background: $color-background;
    .list-group {
      padding-bottom: 10px;
      .list-group-title {
        height: 30px;
        line-height: 30px;
        padding-left: 20px;
        font-size: $font-size-12;
        color: $color-text-l;
        background: $color-highlight-background;
      }
      .list-group-item {
        padding: 10px 0;
        display: flex;
        align-items: center;
        .avatar {
          width: 60px;
          height: 60px;
          border-radius: 60px;
          margin-left: 20px;
        }
        .name {
          flex: 1;
          text-align: left;
          padding-left: 20px;
        }
      }
    }
    .list-shortcut {
      position: absolute;
      z-index: 30;
      right: 0;
      top: 50%;
      transform: translate(0, -50%);
      width: 20px;
      padding: 20px 0;
      text-align: center;
      background: $color-background-d;
      border-radius: 10px;
      .item {
        color: $color-text-l;
        padding: 4px;
        line-height: 1;
        font-size: 14px;
      }
      .current {
        color: $color-theme;
      }
    }
    .list-fixed {
      position: absolute;
      top: -1px;
      left: 0;
      width: 100%;
      .fixed-title {
        height: 30px;
        line-height: 30px;
        padding-left: 20px;
        font-size: $font-size-12;
        color: $color-text-l;
        background: $color-highlight-background;
      }
    }
  }
</style>
