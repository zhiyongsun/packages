/**
 * @description type is what type you want to check. It can ben one of 'Arguments', 'Function', 'String', 'Number', 'Date', 'RegExp', 'Error','Window','Undefined','Array','Null','Data'
 * @param data
 * @param {string} type
 * @returns {boolean}
 */
export function getType(data: any, type: string): boolean | string {
  if (typeof type !== "string") {
    return "type must be a string";
  }
  return Object.prototype.toString.call(data).slice(8, -1).toLowerCase() === type.toLowerCase();
}


