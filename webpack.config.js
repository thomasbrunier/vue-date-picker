var webpack = require('webpack')

module.exports = {
  entry: './examples/app.js',
  output: {
    path: './examples/static',
    publicPath: '/examples/static/',
    filename: 'build.js'
  },
  module: {
    loaders: [
      {
        test: /\.vue$/,
        loader: 'vue'
      },
      {
        test: /\.js$/,
        // excluding some local linked packages.
        // for normal use cases only node_modules is needed.
        exclude: /node_modules|vue\/src|vue-router\/|vue-loader\/|vue-hot-reload-api\//,
        loader: 'babel'
      },
      {
        test   : /\.(png|jpg|gif)$/,
        loader : 'url-loader?limit=8192'
      },
      {
        test   : /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
        loader : 'file-loader?name=/[name]_[hash:6].[ext]'
      }
    ]
  },
  vue: {
    autoprefixer: {
      browsers: ['last 2 versions']
    },
    loaders: {
      scss: 'style!css!sass'
    }
  },
  babel: {
    presets: ['es2015'],
    plugins: ['transform-runtime']
  }
}
