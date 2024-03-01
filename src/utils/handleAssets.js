// 获得图片地址

export function handleImg(path) {
  return new URL(`../assets/img/${path}`, import.meta.url).href
}
