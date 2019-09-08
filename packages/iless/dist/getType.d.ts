/**
 * @description str is what type you want to check. It can ben one of 'Arguments', 'Function', 'String', 'Number', 'Date', 'RegExp', 'Error','Window','Undefined','Array','Null','Data'
 * @param data
 * @param {string} type
 * @returns {boolean}
 */
export declare function getType(data: any, type: string): boolean | string;
