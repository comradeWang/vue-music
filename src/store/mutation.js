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
  }
}
export default mutations
