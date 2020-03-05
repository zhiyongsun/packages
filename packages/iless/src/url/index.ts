// @ts-ignore
import QueryString from "anima-querystring";

// 转义函数
export const htmlEncodeAll = function (e: string) {
  return e === null ? '' : e.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/'/g, '&quot;')
    .replace(/'/g, '&apos;');
};
/**
 * 获取 URL 上指定的 Query 参数值
 * @param  {String} name query name
 * @return {Object}      如果 name 对应的值不存在则返回 null，如果没有传入 name 则返回解析后的整个对象
 */
export const parse = function (name?: string) {
  const query = QueryString.parse(window.location.search.slice(1));
  for (let k in query) {
    if (typeof query[k] === 'string') {
      query[k] = htmlEncodeAll(query[k]);
    }
  }
  return name ? query[name] : query;
};
