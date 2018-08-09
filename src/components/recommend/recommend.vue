<template>
  <div class="recommend">
    recommend页面
    <div class="recommend-content">
      <div class="slider-wrapper">
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
import { getRecommend } from '../../api/recommend'
import { ERR_OK} from '../../api/config'

export default {
  name: 'recommend',
  components: {
    Loading
  },
  data () {
    return {
      descList: []
    }
  },
  methods: {
    // testAxios () {
    //   this.$axios.get('https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg', {
    //     params: data
    //   })
    //     .then(function (response) {
    //       console.log(response)
    //     })
    //     .catch(function (err) {
    //       console.log(err)
    //     })
    // },
    _getRecommond () {
      getRecommend().then((res) => {
        if (res.code === ERR_OK) {
          console.log(res.data)
        }
      })
    }
  },
  mounted () {
    this._getRecommond()
  }
}
</script>

<style scoped lang="scss">
  .recommend {
    .loading-container {
      position: absolute;
      width: 100%;
      top: 50%;
      transform: translateY(-50%);
    }
  }
</style>
