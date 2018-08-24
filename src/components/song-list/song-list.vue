<template>
  <div class='song-list'>
    <ul>
      <li v-for="(song,$index) in songs" :key="$index" class="item" @click="selectItem(song,$index)">
        <div class="content">
          <h2 class="name">{{song.name}}</h2>
          <p class="desc">{{getDesc(song)}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'song-list',
  data () {
    return {}
  },
  props: {
    songs: {
      type: Array,
      default: null
    }
  },
  components: {},
  computed: {},
  watch: {},
  methods: {
    selectItem (item, index) {
      this.$emit('select', item, index)
    },
    getDesc (song) {
      return `${song.singer} - ${song.album}`
    }
  },
  created () {},
  mounted () {}
}
</script>

<style scoped lang="scss">
  @import "~common/scss/variable";
  .song-list {
    height: 100%;
    .item{
      display: flex;
      align-items:center;
      box-sizing: border-box;
      height: 64px;
      font-size: $font-size-16;
      text-align: left;
      padding: 0 15px;
    }
    .content{
      flex: 1;
      line-height: 20px;
      font-size: $font-size-16 !important;
      overflow: hidden;
      .name{
        font-size: $font-size-16 !important;
      }
      .desc{
        color: $color-text-l;
      }
    }
  }
</style>
