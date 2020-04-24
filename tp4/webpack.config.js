const path = require('path');

module.exports = {
  entry: './src/main.js',

  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'scripts/bundle.js'
  },

  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist'
  },

  performance: {
    hints: "warning", // 枚举
    maxAssetSize: 30000000, // 整数类型（以字节为单位）
    maxEntrypointSize: 50000000, // 整数类型（以字节为单位）
    assetFilter: function(assetFilename) {
    // 提供资源文件名的断言函数
    return assetFilename.endsWith('.css') || assetFilename.endsWith('.js');

    }
  },

  module: {
   rules: [
     {
       test: /\.js$/,
       exclude: (/node_modules/),
       loader: ['babel-loader']
     },
     {
        test: /\.css$/,
        use: [
          { loader: 'style-loader'},
          { loader: 'css-loader'}
        ]
      },
     {
       test: /\.(png|jpg|gif)$/,
       use: [
         {
           loader: 'file-loader',
           options: {outputPath : 'images/img'}
         }
       ]
     }
   ]
 }
};
