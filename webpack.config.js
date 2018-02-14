module.exports = {
    entry: './src/app.js',
    output: {
      path: __dirname,
      filename: 'bundle.js'
    },
    devServer: {
      inline: true,
      port: 8090 
   },
    module: {
      loaders: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
          query: { presets: [ 'es2015', 'react' ] }
        }
      ]
    }
  };