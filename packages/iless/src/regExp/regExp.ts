/**
 * Created by zhiyong on 1/20/17.
 */
//所有收集的正则表达式方法

/**
 * ^ 匹配输入的开始。如果多行标志被设置为true，那么也匹配换行符后紧跟的位置。
 * 例如，/^A/ 并不会匹配 "an A" 中的 'A'，但是会匹配 "An E" 中的 'A'。
 * @type {RegExp}
 */
const re = /^\$/;

/**
 * 匹配输入的结束。如果多行标示被设置为true，那么也匹配换行符前的位置。
 * 例如，/t$/ 并不会匹配 "eater" 中的 't'，但是会匹配 "eat" 中的 't'
 * @type {RegExp}
 */
const re2 = /t$/;


export default {
  re,
  re2,
}
