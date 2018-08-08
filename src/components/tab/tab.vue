<template>
  <div class="tab">
    <router-link tag="div" class="tab-item" :to="item.path" v-for="(item,index) in routerList" :key="index">
      <span class="tab-link">{{item.name}}</span>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'tab',
  data () {
    return {
      routerList: [
        {
          name: '推荐',
          path: '/recommend'
        },
        {
          name: '歌手',
          path: '/singer'
        },
        {
          name: '排行',
          path: '/rank'
        },
        {
          name: '搜索',
          path: '/search'
        }
      ]
    }
  }
}
</script>

<style scoped lang="scss">
  @import "../../common/scss/variable";
  .tab{
    display: flex;
    height: 44px;
    line-height: 44px;
    font-size: $font-size-16;
    .tab-item{
      flex: 1;
      text-align: center;
      .tab-link{
        padding-bottom: 5px;
        color: $color-text-l;
      }
      &.router-link-active{
        .tab-link{
          color: $color-theme;
          border-bottom: 2px solid $color-theme;
        }
      }
    }
  }
</style>
