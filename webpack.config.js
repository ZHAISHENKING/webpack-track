/**
 * describe: webpack.config.js 实质上是个nodeJS模块，支持CommonJS规范
 * @type {path.PlatformPath | path}
 */
const path = require('path')

/**
 * 方式也是灵活多样，支持json格式，也支持函数传参，或者多配置数组，包括异步Promise支持
 * @type {{mode: string, output: {path: string, filename: string}, entry: string}}
 */
module.exports = {
  "mode": "development",
  "entry": "./src/index.js",
  "output": {
    "path": path.resolve(__dirname, "dist"),
    "filename": "index.bundle.js"
  }
}