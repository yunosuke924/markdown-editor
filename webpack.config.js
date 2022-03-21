const path = require('path')

module.exports = {
  // 最初に読み込むファイルを指定
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
    publicPath: 'dist/',
  }
}
