/**
 * @author: Wang.X.Y/comrade.wang.cn@gmail.com
 * @Date: 2018/8/15
 * @Time: 09:24
 * @Description: $
 */
import jsonp from '../common/js/jsonp'
import {commonParams, options} from './config'
import axios from 'axios'

export function getSingerList () {
  const url = 'https://c.y.qq.com/v8/fcg-bin/v8.fcg'
  const commonParam = Object.assign({},commonParams,{
    channel: 'singer',
    page: 'list',
    key: 'all_all_all',
    pageszie: 100,
    pagenum: 1,
    hostUin: 0,
    needNewCode: 0,
    platform: 'yqq',
    g_tk: 1664029744,
  })

  return jsonp(url, commonParam, options)
}

export function getSingerInfo (singerId) {
  const url = 'https://c.y.qq.com/v8/fcg-bin/fcg_v8_singer_track_cp.fcg'
  const data = Object.assign({},commonParams,{
    singermid: singerId,
    hostUin: 0,
    needNewCode: 0,
    platform: 'yqq',
    order: 'listen',
    begin: 0,
    num: 100,
    g_tk: 1664029744,
    songstatus: 1
  })
  return jsonp(url, data, options)
}
