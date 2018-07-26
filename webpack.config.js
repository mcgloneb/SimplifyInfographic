/*
  Webpack file for managing our styles, javascript and vue files
*/

const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const autoprefixer = require('autoprefixer');
/*
  We only have a single entry point and everything is required from that js file
*/

// This is our JavaScript rule that specifies what to do with .js files
const javascript = {
  test: /\.(js)$/, 
  use: [{
    loader: 'babel-loader',
    options: { presets: ['es2015'] } // this is one way of passing options
  }],
};


/*
  This is our postCSS loader which gets fed into the next loader. I'm setting it up in it's own variable because its a didgeridog
*/

const postcss = {
  loader: 'postcss-loader',
  options: {
    plugins() { return [autoprefixer({ browsers: ['last 6 versions', 'ie 10' ] })]; }
  }
};

// this is our sass/css loader. It handles files that are require('something.scss')
const styles = {
  test: /\.(scss)$/,
  // here we pass the options as query params b/c it's short.
  // We don't just pass an array of loaders, we run them through the extract plugin so they can be outputted to their own .css file
  use: ExtractTextPlugin.extract(['css-loader?url=false', postcss, 'sass-loader?sourceMap'])
};

// We can also use plugins - this one will compress the crap out of our JS
const uglify = new webpack.optimize.UglifyJsPlugin({ // eslint-disable-line
  compress: { warnings: false }
});

// OK - now it's time to put it all together
const config = {
  entry: {
    // we only have 1 entry, but we can use multiple if required for code splitting
    App: './app/js/main.js'
  },
  // we're using sourcemaps and here is where we specify which kind of sourcemap to use
  devtool: 'source-map',
  // Once things are done, we kick it out to a file.
  output: {
    // path is a built in node module
    // __dirname is a variable from node that gives us the
    path: path.resolve(__dirname, 'httpdocs', 'dist', 'js'),
    // we can use "substitutions" in file names like [name] and [hash]
    // name will be `App` because that is what we used above in our entry
    filename: '[name].bundle.js'
  },
  resolve: {
    modules:[
      path.resolve(__dirname), path.resolve(__dirname, "node_modules")
    ],
    alias: {
      "TweenLite": path.resolve('node_modules', 'gsap/src/uncompressed/TweenLite.js'),
      "TweenMax": path.resolve('node_modules', 'gsap/src/uncompressed/TweenMax.js'),
      "TimelineLite": path.resolve('node_modules', 'gsap/src/uncompressed/TimelineLite.js'),
      "TimelineMax": path.resolve('node_modules', 'gsap/src/uncompressed/TimelineMax.js'),
      "ScrollMagic": path.resolve('node_modules', 'scrollmagic/scrollmagic/uncompressed/ScrollMagic.js'),
      "animation.gsap": path.resolve('node_modules', 'scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap.js'),
      "debug.addIndicators": path.resolve('node_modules', 'scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators.js'),
    },
  },
  // remember we said webpack sees everthing as modules and how different loaders are responsible for different file types? Here is is where we implement them. Pass it the rules for our JS and our styles
  module: {
    rules: [javascript, styles]
  },
  
  // finally we pass it an array of our plugins - uncomment if you want to uglify
  // plugins: [uglify]
  plugins: [
    // here is where we tell it to output our css to a separate file
    //uglify,
    new ExtractTextPlugin('../css/style.css'),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"development"'
      }
    })  
  ]
};
// webpack is cranky about some packages using a soon to be deprecated API. shhhhhhh
process.noDeprecation = true;

module.exports = config;
