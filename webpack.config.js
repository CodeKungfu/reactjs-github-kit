const path = require("path");
const {ProgressPlugin} = require("webpack");
const HtmlWebpackPlugin= require("html-webpack-plugin");
const MiniCssExtractPlugin= require("mini-css-extract-plugin");

module.exports = {
  mode: 'development', // 默认为 production 模式
  entry: './src/index.tsx', // 入口 js 文件，可以配置多个 entry
  output: {
    path: path.resolve(__dirname, 'dist'), // 输出路径
    chunkFilename: 'js/[name].[chunkhash:6].chunk.js',
    filename: '[name].[chunkhash:6].js', // 输出文件名，具有一定动态性，如可配置成 [name].[chunkhash].js，其会被替换为名称和一个文件哈希值（以保证浏览器会重新加载，但这需要相关 plugin 去支持，后面再详述）
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
  resolve: {
    // webpack 将识别这些后缀文件为 module
    // 这个配置是覆盖原配置的，因此应当给定所有后缀，否则使用第三方库时必然会出问题
    extensions: [".ts", ".tsx", ".js", ".css"],
    alias: {
      '@': path.resolve(__dirname, "src") // 配置@为 src 目录，使不需要每次都使用相对路径去 import
    }
  },
  module: { // 关于 module 的配置
    // 在这里配置 loader
    rules: [
      {
        test: /\.tsx?$/, // ts 或 tsx
        use: 'ts-loader',
        exclude: /node_modules/ // 排除 node_module 下的 ts 文件
      },
      { // 添加 rule
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader']
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './public/index.html') // 指定 html “模板”文件
    }),
    new ProgressPlugin(), // 展示进度
    new MiniCssExtractPlugin()
  ],
  devServer: {
    static: 'dist/',
    port: 3000,
    open: true,
    historyApiFallback: true,
  },
};