/**
 * Created by zhiyong on 5/9/17.
 */
/**
 * 阶乘时间复杂度为O(1),尾调用优化
 * @param n
 * @param total
 * @returns {*}
 */
export function factorial(n: number, total = 1): number {
  if (n === 1) return total;
  return factorial(n- 1, n * total);
}

export default {
  factorial
}
