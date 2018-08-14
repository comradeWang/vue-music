<template>
  <div class="recommend">
    <Scroll class="recommend-content" :data="discList">
      <div class="content">
        <div class="slider-wrapper" v-if="sliderList.length">
          <div class="swiper-container">
            <div class="swiper-wrapper">
              <div class="swiper-slide" v-for="(item,$index) in sliderList" :key="$index">
                <a :href="item.linkUrl">
                  <img :src="item.picUrl" :alt="item.id" width="100%" height="200px">
                </a>
              </div>
            </div>
            <div class="swiper-pagination"></div>
          </div>
        </div>
        <div class="recommend-list">
          <h1 class="list-title">热门歌单推荐</h1>
          <ul>
            <li v-for="(item,index) in discList" :key="index">
              <div class="disc-container">
                <div class="icon">
                  <img :src="item.imgurl" alt="" width="60" height="60">
                </div>
                <div class="text">
                  <h2 class="name"> {{item.creator.name}}</h2>
                  <p class="desc"> {{item.dissname}}</p>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div class="loading-container">
          <Loading :show="!discList.length"></Loading>
        </div>
      </div>
    </Scroll>
  </div>
</template>

<script>
import Loading from '../../base/loading/loading'
import { getRecommend, getDiscList } from '../../api/recommend'
import { ERR_OK } from '../../api/config'
import Slider from '../../base/slider/slider'
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.min.css'
import Scroll from '../../base/scroll/scroll'
export default {
  name: 'recommend',
  components: {
    Loading,
    Slider,
    Scroll
  },
  data () {
    return {
      discList: [],
      sliderList: [],
      mySwiper: ''
    }
  },
  methods: {
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
    _getRecommend () {
      getRecommend().then((res) => {
        if (res.code === ERR_OK) {
          this.sliderList = res.data.slider
        }
      })
    },
    /**
     * 获取歌单信息
     * @private
     */
    _getDiscList () {
      getDiscList().then((res) => {
        if (res.code === ERR_OK) {
          this.discList = res.data.list
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
    .loading-container {
      position: absolute;
      width: 100%;
      top: 50%;
      transform: translateY(-50%);
    }
    .recommend-content{
      height: 100%;
      overflow: hidden;
      .recommend-list {
        .list-title {
          color: $color-theme;
          padding: 10px 20px;
          font-size: $font-size-16;
        }
        .disc-container {
          display: flex;
          padding: 10px 20px;
          align-items: center;
          box-sizing: border-box;
          position: relative;
          .icon {
            flex: 0 0 60px;
          }
          .text {
            flex: 1;
            text-align: left;
            padding-left: 10px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            line-height: 20px;
            .name {
              font-size: 1rem;
              margin-bottom: 15px;
            }
            .desc {
              font-size: .6rem;
              color: $color-text-l;
            }
          }
        }
      }
    }
  }
</style>
