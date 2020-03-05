
/**
 * 预加载图片
 * @param url
 */
export const preloadImg = (url?: string) => {
  if(!url) return;
  const imgTemp = new Image();
  imgTemp.src = url;
}

/**
 * 预加载且获取图片大小
 * @param url
 */
export const getImgInfo = (url?: string) => {
  return new Promise((resolve, reject) => {
    if (!url) return resolve({ width: 0, height: 0 });
    const img = new Image();
    img.src = url;
    if (img.complete) {
      return resolve({ width: img.width, height: img.height });
    }
    img.onload = () => {
      return resolve({ width: img.width, height: img.height });
    };
  });
};
