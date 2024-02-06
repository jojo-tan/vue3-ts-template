import axios from "axios"
import { PostResponse } from './type.ts'

// 创建实例
const instance = axios.create({
  baseURL: '/sw-kap-html/sw-kap',
  timeout: 10000,
  headers: {}
})

// 添加请求拦截器
instance.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  config.headers['Authentication'] = '96f6ef6c-4ca8-446c-bf0f-4296d2f4ab782'
  return config
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error)
})

// 添加响应拦截器
instance.interceptors.response.use(function (response) {
  // 2xx 范围内的状态码都会触发该函数。
  // 对响应数据做点什么
  return response.data
}, function (error) {
  // 超出 2xx 范围的状态码都会触发该函数。
  // 对响应错误做点什么
  return Promise.reject(error)
})

// Post请求
function post<T>(url: string, config: any):Promise<PostResponse<T>> {
  return instance.post(url, config)
}

// Get请求
// function post<T>(url: string, config: any):Promise<T> {
//   return instance.post(url, config)
// }

export default { post }


