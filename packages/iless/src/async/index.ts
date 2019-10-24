/**
 *
 * @param {number} ms
 * @returns {Promise}
 */
export function timeout(ms: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

/**
 * sleep方法
 * @param func 沉睡之后执行的方法
 * @param args 参数数组
 * @param ms
 * @returns {Promise<void>}
 */
async function sleep(func: (x: object)=>{}, args: object, ms: number) {
  await timeout(ms);
  func(args);
}

export default {
  sleep,
};

