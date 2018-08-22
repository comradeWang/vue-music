/**
 * @author: Wang.X.Y/comrade.wang.cn@gmail.com
 * @Date: 2018/8/17
 * @Time: 11:22
 * @Description: $
 */
import {playMode} from '../common/js/config'

let state = {
  singer: undefined,
  playing: false, // 播放状态
  fullScreen: false, // 是否全屏播放
  playingList: [], // 播放列表
  sequenceList: [], // 顺序播放
  mode: playMode.sequence, // 播放模式
  cIndex: -1 // 当前播放的哪首歌
}

export default {
  state
}
