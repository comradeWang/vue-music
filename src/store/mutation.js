/**
 * @author: Wang.X.Y/comrade.wang.cn@gmail.com
 * @Date: 2018/8/17
 * @Time: 11:23
 * @Description: $
 */
import * as types from './mutation-types'
const mutations = {
  [types.SET_SINGER] (state, singer) {
    state.singer = singer
  },
  [types.SET_DISS] (state, diss) {
    state.diss = diss
  }
}
export default mutations
