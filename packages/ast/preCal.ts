// 预计算简单表达式的插件
let code = `const result = 1000 * 60 * 60`;
let babel = require('babel-core');
let types= require('babel-types');

let visitor = {
  BinaryExpression(path) {
    let node = path.node;
    if (!isNaN(node.left.value) && ! isNaN(node.right.value)) {
      let result = eval(node.left.value + node.operator + node.right.value);
      result = types.numericLiteral(result);
      path.replaceWith(result);
      let parentPath = path.parentPath;
      // 如果此表达式的parent也是一个表达式的话，需要递归计算
      if (path.parentPath.node.type == 'BinaryExpression') {
        visitor.BinaryExpression.call(null, path.parentPath)
      }
    }
  }
}

let cal = babel.transform(code, {
  plugins: [
    {visitor}
  ]
});

console.log(cal)

