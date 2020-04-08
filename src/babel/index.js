const fs = require('fs');
const babel = require('@babel/core');
const traverse = require('@babel/traverse').default;    // 遍历
const gen = require('@babel/generator').default;        // 生成
// 读取 source.js内容
let source = fs.readFileSync('./source.js').toString();


// 使用 babel.parse方法
babel.parse(source, (err, ast) => {
    // ast就是树
    // console.log(ast);
    let indent = '';
    traverse(ast, {
        // 进入节点
        enter(path) {
            // console.log(indent + '<' + path.node.type + '>');
            indent += '  ';
        },
        /**
         *<Program>
  <FunctionDeclaration>
    <Identifier>
    </Identifier>
    <Identifier>
    </Identifier>
    <BlockStatement>
      <ReturnStatement>
        <BinaryExpression>
          <Identifier>
          </Identifier>
          <Identifier>
          </Identifier>
        </BinaryExpression>
      </ReturnStatement>
    </BlockStatement>
  </FunctionDeclaration>
</Program>
         *
         * @param {*} path
         */
        exit(path) {
            indent = indent.slice(0, -2);
            // console.log(indent + '<' + '/' + path.node.type + '>');

        }
    });
    /** 
     * function square(n) {
        return n * n;
        }
    */
    console.log(gen(ast).code);
});