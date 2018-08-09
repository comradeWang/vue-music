/**
 * @auther: Wang.X.Y/comrade.wang.cn@gmail.com
 * @Date: 2018/8/9
 * @Time: 09:36
 * @Description: 配置jsonp请求的参数
 */
export const commonParams = {
  g_tk: 5381,
  inCharset: 'utf-8',
  outCharset: 'utf-8',
  format: 'jsonp',
  notice: 0
}
export const options = {
  param: 'jsonpCallback'
}

export const ERR_OK = 0

// export const data = Object.assign({}, commonParams, {
//   uin: 0,
//   platform: 'h5',
//   needNewCode: 1
// })
