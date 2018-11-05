const path = require('path');

const SRC_DIR = path.join(__dirname, '/client');
const DIST_DIR = path.join(__dirname, '/public');

module.exports = {
  entry: `${SRC_DIR}/index.jsx`,
  output: {
    filename: 'bundle.js',
    path: DIST_DIR,
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    loaders: [
      {
        test: /\.jsx?/,
        include: SRC_DIR,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015'],
        },
      },
      {
        test: /\.css$/,
        include: SRC_DIR,
        use: [ 
         { loader: 'style-loader' },
         { loader: 'css-loader'},
        ] 
      }
    ],
  },
  externals: {
    'react/addons': true,
    'react/lib/ReactContext': true,
    'react/lib/ExecutionEnvironment': true,
  },
};
