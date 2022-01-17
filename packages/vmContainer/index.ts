import vm from 'vm';

interface Params {
  context?: any;
  codeFilePath?: string;
  code?: string;
}

async function lessContainer(params: Params) {
  const {context= {
  }, codeFilePath, code} = params || {};
  let codeResult = code;
  if (codeFilePath) {
    const code = await this.ctx.curl(codeFilePath, {
      dataType: 'text',
    });
    console.log(code);
    codeResult = 'x = 40; result = {x};';
    debugger
  }
  if (codeResult) {
    try {
      vm.createContext(context); // 上下文隔离化对象。
      vm.runInContext(codeResult, context);
    } catch (e) {

    }
  }
  return {result: context.result}
}
