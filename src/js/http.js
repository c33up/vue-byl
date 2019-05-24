import axios from 'axios' // 引用axios
import {
  Promise
} from 'es6-promise' // 引入Promise
import qs from 'qs'

// axios 配置
axios.defaults.timeout = 30000
// 设置超时时间
axios.defaults.baseURL = ''
// 设置请求头
// axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8'
axios.defaults.withCredentials = true
/**
 * post 请求方法
 * @param url
 * @param data
 * @param selfResolve 自行处理resolve响应
 * @param selfReject  自行处理 reject 响应
 * @returns {Promise}
 */
export function post (url, data = {}, selfResolve = false, selfReject = false) {
  return new Promise((resolve, reject) => {
    axios.post(url, qs.stringify(data))
      .then(response => {
        resolve(response.data)
      }, err => {
        reject(err)
      })
  })
}

export function get (url, data = {}) {
  return new Promise((resolve, reject) => {
    let urlparam = url + '?' + qs.stringify(data)
    axios.get(urlparam)
      .then(response => {
        resolve(response.data)
      }, err => {
        reject(err)
      })
  })
}
