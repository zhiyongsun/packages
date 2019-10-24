/**
 * 利用Set数据结构不能包含重复的值,Array.from可以把Set结构转换成数组
 * @param array
 * @returns {[*]}
 */
export function dedupe(array: any[]) {
  return Array.from(new Set(array))
}

/**
 * 数组的并集
 * @param a
 * @param b
 * @returns {Set}
 */
export function union(a: any[], b: any[]) {
  return Array.from(new Set([...a, ...b]));
}

/**
 * 数组的差集
 * @param a
 * @param b
 * @returns {Set}
 */
export function difference(a: any[], b: any[]) {
  return Array.from(new Set([...a].filter(x => !b.find(x))));
}

export default {
  dedupe,
  union,
  difference,
}
