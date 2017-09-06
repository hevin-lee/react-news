const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJsPlugin = webpack.optimize.UglifyJsPlugin;

module.exports =  [
	//js压缩
	new UglifyJsPlugin({ minimize: true }),
	//主页面模板生成
	new HtmlWebpackPlugin({
		// template: path.resolve(__dirname, 'index.html'),
		template: './index.html',
		inject: 'body'
	})
]