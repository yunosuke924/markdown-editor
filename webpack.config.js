const path = require('path')

module.exports = {
  // 最初に読み込むファイルを指定
  entry: './src/index.tsx',
  module: {
    rules: [
      {
        test: /\.tsx$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  // モジュールとして解決する、つまり外部ファイルやライブラリ（node_modules 以下のファイル）を使うファイルの拡張子
  resolve: {
    extensions: ['.js', '.ts', '.tsx'],
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
    publicPath: 'dist/',
  }
}
