<template>
  <div class="loading" v-show="show">
    <!--<img src="./loading.gif" alt="" width="48" height="48">-->
    <p><i class="el-icon-loading loading-icon"></i></p>
    <p class="desc">{{title}}</p>
  </div>
</template>

<script>
export default {
  name: 'loading',
  props: {
    title: {
      type: String,
      default: '正在加载中...'
    },
    show: {
      type: Boolean,
      default: true
    }
  }
}
</script>

<style scoped lang="scss">
  @import "../../common/scss/variable";
  .loading{
    width: 100%;
    text-align: center;
    .desc{
      line-height: 30px;
      font-size: $font-size-10;
      color: $color-text-l;
    }
    .loading-icon{
      font-size: 24px;
    }
  }
</style>
