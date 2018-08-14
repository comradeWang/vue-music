/**
 * @author: Wang.X.Y/comrade.wang.cn@gmail.com
 * @Date: 2018/8/13
 * @Time: 17:08
 * @Description: $
 */
export default {
  install (Vue, options) {
    Vue.prototype.url = 'http://www.baidu.com/'
    Vue.prototype.musicJsonCallback = (data) => {
      let returnData = JSON.parse(data.replace(/MusicJsonCallback\((.*)\)/, '$1'))
      return returnData
    }
  }
}
