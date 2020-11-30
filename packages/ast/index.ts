// babel核心库，实现核心的转换引擎
let babel = require('babel-core');
// 可以实现类型判断，生成AST节点等
let types = require('babel-types');

let code = `let sum = (a, b) => a + b`;
// let sum = function(a, b) {
//   return a + b
// }

// 这个访问者可以对特定类型的节点进行处理
let visitor = {
  ArrowFunctionExpression(path) {
    console.log(path.type);
    let node = path.node;
    let expression = node.body;
    let params = node.params;
    let returnStatement = types.returnStatement(expression);
    let block = types.blockStatement([
      returnStatement
    ]);
    let func = types.functionExpression(null,params, block,false, false);
    path.replaceWith(func);
  }
}

let arrayPlugin = { visitor }
// babel内部会把代码先转成AST， 然后进行遍历
let result = babel.transform(code, {
  plugins: [
    arrayPlugin
  ]
})
console.log(result.code);
