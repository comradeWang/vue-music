<template>
  <div class="recommend">
    <div class="recommend-content">
      <div class="slider-wrapper" v-if="sliderList.length">
        <div class="swiper-container">
          <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="(item,$index) in sliderList" :key="$index">
              <a :href="item.linkUrl">
                <img :src="item.picUrl" :alt="item.id" width="100%" height="200px">
              </a>
            </div>
            <!--<div class="swiper-slide"><img :src="sliderList[0].picUrl" :alt="sliderList[0].id" width="100%" height="200px"></div>-->
            <!--<div class="swiper-slide"><img :src="sliderList[1].picUrl" :alt="sliderList[1].id" width="100%" height="200px"></div>-->
          </div>
          <div class="swiper-pagination"></div>
        </div>
      </div>
      <div class="recommend-list">
        <h1 class="list-title">热门歌单推荐</h1>
        <ul></ul>
      </div>
    </div>
    <div class="loading-container">
      <Loading :show="!descList.length"></Loading>
    </div>
  </div>
</template>

<script>
import Loading from '../../base/loading/loading'
import { getRecommend, getDiscList } from '../../api/recommend'
import { ERR_OK } from '../../api/config'
import Slider from '../../base/slider/slider'

import Swiper from 'swiper'
import 'swiper/dist/css/swiper.min.css'
export default {
  name: 'recommend',
  components: {
    Loading,
    Slider
  },
  data () {
    return {
      descList: [],
      sliderList: [],
      mySwiper: ''
    }
  },
  methods: {
    _getRecommend () {
      getRecommend().then((res) => {
        if (res.code === ERR_OK) {
          this.sliderList = res.data.slider
        }
      })
    },
    initSwiper () {
      this.mySwiper = new Swiper('.swiper-container', {
        autoplay: {
          delay: 4000 // 等待时间
        },
        loop: true,
        speed: 1000, // 运动的时间
        // effect: 'flip' // 效果
        pagination: {
          el: '.swiper-pagination',
          bulletActiveClass: 'swiper-pagination-bullet-active'
        }
      })
    },
    _getDiscList () {
      getDiscList().then((res) => {
        // let result = this.musicJsonCallback(res)
        console.log(res)
        if (res.code === ERR_OK) {
          console.log(res.data)
        }
      })
    }
  },
  created () {
    this._getRecommend()
    this._getDiscList()
  },
  mounted () {
    let _this = this
    setTimeout(function () {
      _this.initSwiper()
    }, 500)
  }
}
</script>

<style scoped lang="scss">
  @import "../../common/scss/variable";
  .recommend {
    my-bullet-active
    .loading-container {
      position: absolute;
      width: 100%;
      top: 50%;
      transform: translateY(-50%);
    }
  }
</style>
