/**
 * @author: Wang.X.Y/comrade.wang.cn@gmail.com
 * @Date: 2018/8/17
 * @Time: 11:25
 * @Description: $
 */
// let singer = state => state.singer
// let diss = state => state.diss
export default {
  singer (state) {
    return state.state.singer
  },
  playing (state) { return state.state.playing },
  fullScreen (state) { return state.state.fullScreen },
  playingList (state) { return state.state.playingList },
  sequenceList (state) { return state.state.sequenceList },
  mode (state) { return state.state.mode },
  cIndex (state) { return state.state.cIndex },
  currentSong (state) {
    return state.state.playingList[state.state.cIndex]
  }
}
