import {join} from 'path'
import {HotModuleReplacementPlugin} from 'webpack'

const SRC_PATH = join(__dirname, '/src')
const APP_PATH = join(__dirname, '/examples')

export default {
  context: APP_PATH,
  entry: './',
  output: {
    path: join(__dirname, 'dist'),
    filename: '[name].js',
    publicPath: 'http://localhost:3000/dist'
  },
  resolve: {
    alias: {
      'devsy-replaceme': SRC_PATH
    },
    extensions: ['', '.js', '.scss']
  },
  module: {
    loaders: [{
      test: /\.scss$/,
      loaders: ['style', 'css', 'sass'],
      include: [APP_PATH, SRC_PATH]
    }, {
      test: /\.js$/,
      loaders: ['babel'],
      include: [APP_PATH, SRC_PATH]
    }]
  },
  devServer: {
    port: 3000,
    stats: { colors: true },
    inline: true,
    publicPath: '/dist/'
  },
  plugins: [
    new HotModuleReplacementPlugin()
  ]
}
