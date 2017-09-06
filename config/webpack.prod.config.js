const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const merge = require('webpack-merge')
const appConfig = require('./apps.config');



const webpackConfig = {
	devtool: 'cheap-module-source-map',
	output: {
		path: appConfig.build.assetsRoot,
		filename: appConfig.assetsPath('js/[name].[chunkhash:8].js'),
		chunkFilename: appConfig.assetsPath('js/[name].[chunkhash:8].js')
	},
	plugins: [
		new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('prod') //定义编译环境
            }
        }),
		//js压缩
		new webpack.optimize.UglifyJsPlugin({
			compress: {
				warnings: false
			}
		}),
		// new webpack.optimize.OccurenceOrderPlugin(),
		//分离css
		new ExtractTextPlugin(appConfig.assetsPath('css/[name].[contenthash:8].css')),
		//主页面模板生成
		new HtmlWebpackPlugin({
			filename: 'index.html',
			template: 'index.html',
			inject: true,
			minify: {
				removeComments: true,
		        collapseWhitespace: true,
		        removeRedundantAttributes: true,
		        useShortDoctype: true,
		        removeEmptyAttributes: true,
		        removeStyleLinkTypeAttributes: true,
		        keepClosingSlash: true,
		        minifyJS: true,
		        minifyCSS: true,
		        minifyURLs: true
				// more options:
				// https://github.com/kangax/html-minifier#options-quick-reference
			},
			// necessary to consistently work with multiple chunks via CommonsChunkPlugin
			chunksSortMode: 'dependency'
		}),
		// 把通过npm包引用的第三方类库从入口文件中提取出来
		new webpack.optimize.CommonsChunkPlugin({
			name: 'vendor',
			minChunks: function(module, count) {
				// any required modules inside node_modules are extracted to vendor
				return (
					module.resource &&
					/\.js$/.test(module.resource) &&
					module.resource.indexOf(
						path.join(__dirname, '../node_modules')
					) === 0
				)
			}
		}),
		// 把webpack的module管理相关基础代码从vendor中提取到manifest
		new webpack.optimize.CommonsChunkPlugin({
			name: 'manifest',
			chunks: ['vendor']
		})
	]
}

module.exports = function(env, defaultConfig) {
	return merge(defaultConfig, webpackConfig);
};