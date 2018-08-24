<template>
    <div class="player">
      <div class="normal-player" v-show="fullScreen">
        <div class="background"></div>
        <div class="top">
          <div class="back"><i class="fa fa-chevron-down clearFix" aria-hidden="true"></i></div>
          <h1 class="title">烟花易冷</h1>
          <h2 class="subtitle">周杰伦</h2>
        </div>
        <div class="middle">
          <div class="middle-l">
            <div class="cd-wrapper">
              <div class="cd">
                <img src="" class="image" alt="">
              </div>
            </div>
          </div>
        </div>
        <div class="bottom"></div>
      </div>
      <div class="mini-player" v-show="!fullScreen"></div>
    </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  name: 'player',
  data () {
    return {}
  },
  props: {},
  components: {},
  computed: {
    ...mapGetters([
      'fullScreen',
      'playList'
    ])
  },
  watch: {},
  methods: {},
  created () {
  },
  mounted () {
  }
}
</script>

<style scoped lang="scss">
  @import "~common/scss/variable";
    .player {
      .normal-player{
        position: fixed;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        background-color: $color-background;
        .background{}
        .top{
          color: $color-theme;
          padding: 10px 15px;
          position: relative;
          .back{
            position: absolute;
            top: 0;
            left: 6px;
            font-size: $font-size-large-x;
            i{
              padding: 9px
            }
          }
          .title{
            font-size: $font-size-20;
            color: #ffffff;
          }
          .subtitle{
            font-size: $font-size-16;
            color: $color-text-l;
            padding: 10px ;
          }
        }
        .middle{}
        .bottom{}
      }
    }
</style>
