<template>
    <div class="recommend">
      recommend页面
      <div class="loading-container">
        <Loading :show="!descList.length"></Loading>
      </div>
    </div>
</template>

<script>
import Loading from '../../base/loading/loading'
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
  }
}
</script>

<style scoped lang="scss">
  .recommend{
    .loading-container{
      position: absolute;
      width: 100%;
      top: 50%;
      transform: translateY(-50%);
    }
  }
</style>
