<template>
  <transition name="slide">
    <div class="singer-detail">
      <MusicList :title="title" :bgImage="bgImage" :songList="songList"></MusicList>
    </div>
  </transition>
</template>

<script>
import {mapGetters} from 'vuex'
import {ERR_OK} from '../../api/config'
import {getSingerInfo} from '../../api/singer'
import {createSong} from '../../common/js/song'
import MusicList from '@components/music-list/music-list'
export default {
  name: 'singer-detail',
  data () {
    return {
      songList: []
    }
  },
  components: {
    MusicList
  },
  computed: {
    ...mapGetters([
      'singer',
      'diss'
    ]),
    title () {
      // if (this.singer !== undefined) {
      return this.singer.name
      // }
      // return ''
    },
    bgImage () {
      // if (this.singer !== undefined) {
      return this.singer.avatar
      // }
      // return ''
    }
  },
  methods: {
    /**
     * 获取歌手详情
     * @private
     */
    _getSingerInfo () {
      if (!this.singer) {
        this.$router.push('/singer')
        return
      }
      getSingerInfo(this.singer.id).then((res) => {
        if (res.code === ERR_OK) {
          this.songList = this._normalizeSongs(res.data.list)
        }
      })
    },
    _normalizeSongs (list) {
      let ret = []
      list.forEach((item) => {
        let {musicData} = item
        if (musicData.songid && musicData.albummid) {
          ret.push(createSong(musicData))
        }
      })
      return ret
    }
  },
  mounted () {
    this._getSingerInfo()
  }
}
</script>

<style scoped lang="scss">
  @import "~common/scss/variable";
  .singer-detail{
    position: fixed;
    z-index: 100;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: $color-background;
  }
  .slide-enter-active,.slide-leave-active {
    -webkit-transition: all 0.3s;
    -moz-transition: all 0.3s;
    -ms-transition: all 0.3s;
    -o-transition: all 0.3s;
    transition: all 0.3s;
  }
  .slide-enter,.slide-leave-to{
    transform: translate3d(0, 100%, 0);
  }
</style>
