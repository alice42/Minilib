const path = require('path')

module.exports = {
  mode: 'production', // "production" | "development" | "none"
  // Chosen mode tells webpack to use its built-in optimizations accordingly.
  entry: './src', // string | object | array
  // defaults to ./src
  // Here the application starts executing
  // and webpack starts bundling
  output: {
    // options related to how webpack emits results
    path: path.resolve(__dirname, 'dist'), // string
    // the target directory for all output files
    // must be an absolute path (use the Node.js path module)
    filename: 'index.js', // string
    // the url to the output directory resolved relative to the HTML page
    library: 'minisite-library', // string,
    // the name of the exported library
    libraryTarget: 'umd' // universal module definition
    // the type of the exported library
    /* Advanced output configuration (click to show) */
    /* Expert output configuration (on own risk) */
  },
  module: {
    // configuration regarding modules
    rules: [
      // rules for modules (configure loaders, parser options, etc.)
      {
        test: /\.jsx?$/,
        include: [path.resolve(__dirname, 'src')],
        exclude: [path.resolve(__dirname, 'stories/')],

        // conditions for the issuer (the origin of the import)
        enforce: 'pre',
        enforce: 'post',
        // flags to apply these rules, even if they are overridden (advanced option)
        loader: 'babel-loader'
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.svg$/,
        // include: path.resolve(__dirname, '../src/common/statics/'),
        use: [
          {
            loader: '@svgr/webpack',
            options: {
              icon: true
            }
          }
        ]
      },
      {
        test: /\.(eot|ttf|woff|woff2|otf)$/,
        loader: 'file-loader'
      }
    ]
    /* Advanced module configuration (click to show) */
  },
  resolve: {
    // options for resolving module requests
    // (does not apply to resolving to loaders)
    modules: ['node_modules', path.resolve(__dirname, 'src')],
    // directories where to look for modules
    extensions: ['.js', '.json', '.jsx', '.css']
    // extensions that are used
    /* Alternative alias syntax (click to show) */
    /* Advanced resolve configuration (click to show) */
  },
  performance: {
    hints: 'warning', // enum
    maxAssetSize: 200000, // int (in bytes),
    maxEntrypointSize: 400000, // int (in bytes)
    assetFilter: function(assetFilename) {
      // Function predicate that provides asset filenames
      return assetFilename.endsWith('.css') || assetFilename.endsWith('.js')
    }
  },
  devtool: 'source-map', // enum
  // enhance debugging by adding meta info for the browser devtools
  // source-map most detailed at the expense of build speed.
  context: __dirname, // string (absolute path!)
  // the home directory for webpack
  // the entry and module.rules.loader option
  //   is resolved relative to this directory
  target: 'web', // enum
  // the environment in which the bundle should run
  // changes chunk loading behavior and available modules

  serve: {
    //object
    port: 1337,
    content: './dist'
    // ...
  },
  // lets you provide options for webpack-serve
  stats: 'errors-only'
  // lets you precisely control what bundle information gets displayed
}
