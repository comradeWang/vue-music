/**
 * @author: Wang.X.Y/comrade.wang.cn@gmail.com
 * @Date: 2018/8/17
 * @Time: 11:23
 * @Description: $
 */
import * as types from './mutation-types'
const mutations = {
  [types.SET_SINGER] (state, singer) {
    state.state.singer = singer
  },
  [types.SET_PLAYING_STATE] (state, playing) {
    state.state.playing = playing
  },
  [types.SET_FULL_SCREEN] (state, fullScreen) {
    state.state.fullScreen = fullScreen
  },
  [types.SET_PLAYLIST] (state, playingList) {
    state.state.playingList = playingList
  },
  [types.SET_SEQUNECELIST] (state, sequenceList) {
    state.state.sequenceList = sequenceList
  },
  [types.SET_MODE] (state, mode) {
    state.state.mode = mode
  },
  [types.SET_CINDEX] (state, cIndex) {
    state.state.cIndex = cIndex
  }
}
export default mutations
