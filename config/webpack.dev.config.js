const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge')
const appConfig = require('./apps.config');



const webpackConfig = {
	devtool: 'eval-source-map',
	plugins: [
		new webpack.DefinePlugin({
			'process.env': {
				NODE_ENV: JSON.stringify('dev') //定义编译环境
			}
		}),
		//js压缩
		// new webpack.optimize.UglifyJsPlugin({ minimize: true }),
		//主页面模板生成
		new HtmlWebpackPlugin({
			template: 'index.html',
			filename: 'index.html',
			inject: true
		}),
		// new webpack.LoaderOptionsPlugin({
		// 	options: {
		// 		postcss: function() {
		// 			return [
		// 				require('postcss-pxtorem')({
		// 					rootValue: 100,
		// 					propWhiteList: [],
		// 				})
		// 			]
		// 		}
		// 	}
		// })
	]
}

module.exports = function(env, defaultConfig) {
	return merge(defaultConfig, webpackConfig);
};