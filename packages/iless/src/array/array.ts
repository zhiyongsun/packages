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

/**
 * 判断是否是数组，通过 instanceof
 * @param obj
 * @returns {Boolean}
 */
export function isArrayByInstanceof(obj: any) {
  return obj instanceof Array
}

/**
 * 判断是否是数组，通过 constructor
 * @param obj
 * @returns {Boolean}
 */
export function isArrayByConstructor(obj: any) {
  return obj && obj.constructor == Array
}

/**
 * 判断是否是数组，通过 object.toString
 * @param obj
 * @returns {Boolean}
 */
export function isArrayByToString(obj: any) {
  return Object.prototype.toString.call(obj).slice(8,-1) === 'Array';
}

/**
 * 判断是否是数组，通过 Array.isArray
 * @param obj
 * @returns {Boolean}
 */
export function isArrayByIsArray(obj: any) {
  return Array.isArray && Array.isArray(obj);
}

/**
 * 判断是否是数组，通过 Array.prototype.isPrototypeOf
 * @param obj
 * @returns {Boolean}
 */
export function isArrayByIsPrototypeOf(obj: any) {
  return Array.prototype.isPrototypeOf(obj);
}

/**
 * 判断是否是数组，通过 __proto__
 * @param obj
 * @returns {Boolean}
 */
export function isArrayByProto(obj: any) {
  return obj.__proto__ === Array.prototype;
}

export default {
  dedupe,
  union,
  difference,
  isArrayByInstanceof,
  isArrayByConstructor,
  isArrayByToString,
  isArrayByIsArray,
  isArrayByProto,
}
