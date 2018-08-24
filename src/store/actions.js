/**
 * @author: Wang.X.Y/comrade.wang.cn@gmail.com
 * @Date: 2018/8/17
 * @Time: 11:24
 * @Description: $
 */
import * as types from './mutation-types'
export const selectPlay = function ({commit, state}, {list, index}) {
  commit(types.SET_SEQUNECELIST, list)
  commit(types.SET_PLAYLIST, list)
  commit(types.SET_CINDEX, index)
  commit(types.SET_FULL_SCREEN, true)
  commit(types.SET_PLAYING_STATE, true)
}
