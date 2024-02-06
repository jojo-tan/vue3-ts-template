// Post接口返回类型
export interface PostResponse<T> {
  code: number,
  message: string,
  data: T
}