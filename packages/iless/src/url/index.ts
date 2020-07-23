// @ts-ignore
import QueryString from "anima-querystring";

/**
 * 获取 URL 上指定的 Query 参数值
 * @param  {String} name query name
 * @return {Object}      如果 name 对应的值不存在则返回 null，如果没有传入 name 则返回解析后的整个对象
 */
export const parse = function (name?: string) {
  const query = QueryString.parse(window.location.search.slice(1)) || {};
  return name ? query[name] : query;
};
