<template>
  <div class="m-header">
    <div class="icon"></div>
    <h1 class="text"></h1>
  </div>
</template>

<script>
export default {
  name: 'm-header'
}
</script>

<style lang="scss">
@import "../../common/scss/variable";
/*@import "../../common/stylus/mixin.styl";*/
  .m-header {
    position: relative;
    height: 44px;
    text-align: center;
    color: $color-theme;
    font-size: 0;
    background-color: #000000;
    .icon{
      display: inline-block;
      vertical-align: top;
      margin-top: 6px;
      width: 30px;
      height: 32px;
      margin-right: 9px;
      background-image: url("logo.png");
      background-size: 30px 32px;
    }
    .text{
      display: inline-block;
      vertical-align: top;
      line-height: 44px;
      font-size: $font-size-20;
    }
  }

</style>
