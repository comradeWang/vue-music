<template>
  <transition name="slide">
    <div class="singer-detail"></div>
  </transition>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  name: 'singer-detail',
  data () {
    return {

    }
  },
  computed: {
    ...mapGetters([
      'singer',
      'diss'
    ])
  },
  mounted () {
    console.log(this.singer)
    console.log(this.diss)
  }
}
</script>

<style scoped lang="scss">
  @import "../../common/scss/variable";
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
