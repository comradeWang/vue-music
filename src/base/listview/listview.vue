<template>
  <Scroll class="listView" :data="data" ref="listView">
    <ul>
      <li class="list-group" v-for="(group,index) in data" :key="index" ref="listGroup">
        <h2 class="list-group-title">{{group.title}}</h2>
        <ul>
          <li class="list-group-item" v-for="(item,$index) in group.items" :key="$index">
            <img v-lazy="item.avatar" alt="" class="avatar">
            <span class="name">{{item.name}}</span>
          </li>
        </ul>
      </li>
    </ul>
    <div class="list-shortcut" @touchstart="onShortCutTouchStart" @touchmove.stop.prevent="onShortCutTouchMove">
      <ul>
        <li v-for="(item,index) in shortcutList" :key="index" class="item" :data-index="index">
          {{item}}
        </li>
      </ul>
    </div>
  </Scroll>
</template>

<script>
import Scroll from '../scroll/scroll'
import {getData} from '../../common/js/dom'

const ANCHOR_HEIGHT = 18
export default {
  name: 'listview',
  components: {Scroll},
  data () {
    return {
      touch: {}
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
    }
  },
  methods: {
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
      let anchorIndex = this.touch.anchorIndex + delta
      this._scrollTo(anchorIndex)
    },
    _scrollTo (index) {
      this.$refs.listView.scrollToElement(this.$refs.listGroup[index], 0)
    }
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
      .list-group-item{
        padding: 10px 0;
        display: flex;
        align-items: center;
        .avatar{
          width: 60px;
          height: 60px;
          border-radius: 60px;
          margin-left: 20px;
        }
        .name{
          flex: 1;
          text-align: left;
          padding-left: 20px;
        }
      }
    }
    .list-shortcut{
      position: absolute;
      z-index: 30;
      right: 0;
      top: 50%;
      transform: translate(0,-50%);
      width: 20px;
      padding: 20px 0;
      text-align: center;
      background: $color-background-d;
      border-radius: 10px;
      .item{
        color: $color-text-l;
        padding: 3px;
        line-height: 1;
        font-size: 15px;
      }
    }
  }
</style>
