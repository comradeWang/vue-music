<template>
  <div class="singer">
    <Listview @select="selectSinger" :data="singerList"></Listview>
    <router-view></router-view>
  </div>
</template>

<script>
import {getSingerList} from '../../api/singer'
import {ERR_OK} from '../../api/config'
import Singer from '../../common/js/singer'
import Listview from '../../base/listview/listview'
import {mapMutations} from 'vuex'
const HOT_NAME = '热门'
const HOT_SINGER_LENGTH = 10
export default {
  name: 'singer',
  components: {Listview},
  data () {
    return {
      singerList: []
    }
  },
  methods: {
    /**
     * 获取歌手信息
     * @param singer
     */
    selectSinger (singer) {
      this.$router.push({
        path: `/singer/${singer.id}`
      })
      this.setSinger(singer)
      this.setDiss('你看这个面，宽又长；你看这个碗，圆又圆')
    },
    _getSingerList () {
      getSingerList().then((res) => {
        if (res.code === ERR_OK) {
          this.singerList = this._normalizeSinger(res.data.list)
        }
      })
    },
    _normalizeSinger (list) {
      let map = {
        hot: {
          title: HOT_NAME,
          items: []
        }
      }
      list.forEach((item, index) => {
        if (index < HOT_SINGER_LENGTH) {
          map.hot.items.push(new Singer({
            id: item.Fsinger_mid,
            name: item.Fsinger_name
          }))
        }
        const key = item.Findex
        if (!map[key]) {
          map[key] = {
            title: key,
            items: []
          }
        }
        map[key].items.push(
          new Singer({
            id: item.Fsinger_mid,
            name: item.Fsinger_name
          })
        )
      })
      // 为了得到有序列表 处理map
      let hot = []
      let ret = []
      for (let key in map) {
        let val = map[key]
        if (val.title.match(/[a-zA-Z]/)) {
          ret.push(val)
        } else if (val.title === HOT_NAME) {
          hot.push(val)
        }
      }
      ret.sort((a, b) => {
        return a.title.charCodeAt(0) - b.title.charCodeAt(0)
      })
      return hot.concat(ret)
    },
    ...mapMutations({
      setSinger: 'SET_SINGER',
      setDiss: 'SET_DISS'
    })
  },
  mounted () {
    this._getSingerList()
  }
}
</script>

<style scoped lang="scss">
  .singer{
    position: fixed;
    top: 87px;
    bottom: 0;
    width: 100%;
  }
</style>
