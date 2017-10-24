var webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: [
    'script-loader!./node_modules/jquery/dist/jquery.min.js',
    './app/js/app.js'
  ],
  externals: {
    jquery: 'jQuery'
  },
  plugins: [
    new webpack.ProvidePlugin({
      '$': 'jquery',
      'jQuery': 'jquery'
    })
  ],
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.exec\.js$/,
        use: [ 'script-loader' ]
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: [{
          loader: 'babel-loader',
          options: {
            presets: [
              ['es2015', { modules: false }]
            ]
          }
        }]
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.(png|jpg)$/,
        use: [{
          loader: 'url-loader',
          options: { limit: 10000 } // Convert images < 10k to base64 strings
        }]
      },
      {
		    test: /\.svg/,
		    use: {
	        loader: 'svg-url-loader',
	        options: {}
		    }
			}
    ]
  }
};
