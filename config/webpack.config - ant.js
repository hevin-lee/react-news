/*
 * @Author: Hevin
 * webpack 2.x  使用 antd-mobile 的配置
 * @Date: 2017-07-20 15:51:09
 * @Last Modified by: Hevin
 */

const webpack = require('webpack');
const path = require('path');
const appConfig = require('./apps.config');
var projectRoot = path.resolve(__dirname, '../'); //跟目录

const svgSpriteDirs = [
	require.resolve('antd-mobile').replace(/warn\.js$/, ''), // antd-mobile 内置svg
	//path.resolve(__dirname, 'src/my-project-svg-foler'),  // 业务代码本地私有 svg 存放目录
];

const config = {
	entry: {
		app: './app/client.js'
	},
	output: {
		path: appConfig.build.assetsRoot, // 指定编译后的代码位置为 dist/bundle.js
		publicPath: process.env.NODE_ENV === 'prod' ? appConfig.build.assetsPublicPath : appConfig.dev.assetsPublicPath,
		filename: '[name].js',
		sourceMapFilename: "[name].bundle.map", //映射名
		chunkFilename: '[name].[chunkhash:8].js' // 设置require.ensure 文件名
	},
	devtool: 'source-map',
	module: {
		loaders: [{
				test: /\.css$/,
				include: /node_modules/,
				loaders: ['style-loader', 'css-loader'],
			}, {
				test: /\.(jsx|js)?$/,
				loaders: 'babel-loader',
				exclude: /node_modules/,
				query: {
					presets: ['react', 'es2015']
				}
			}, {
				test: /\.vue$/,
				loader: 'vue'
			}, {
				test: /\.js$/,
				loader: 'babel-loader',
				include: projectRoot,
				exclude: /node_modules/,
				query: {
					plugins: [
						["import", {
							libraryName: "antd-mobile",
							style: true,
						}]
					]
				}
			}, {
				test: /\.json$/,
				loader: 'json'
			}, {
				test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
				loader: 'url',
				query: {
					limit: 10000,
					name: appConfig.assetsPath('images/[name].[hash:8].[ext]')
				}
			}, {
				test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
				loader: 'url',
				query: {
					limit: 10000,
					name: appConfig.assetsPath('fonts/[name].[hash:8].[ext]')
				}
			}, {
				test: /\.svg$/,
				loader: 'svg-sprite-loader',
				include: svgSpriteDirs,
			}, {
				test: /\.less$/,
				use: [{
					loader: "style-loader"
				}, {
					loader: "css-loader"
				}, {
					loader: "less-loader"
				},{
					loader: "postcss-loader"
				}]
			}

		]
	},
	resolve: {
		mainFiles: ["index.web", "index"], // 这里哦
		modules: ['app', 'node_modules', path.join(__dirname, '../node_modules')],
		extensions: [
			'.web.tsx', '.web.ts', '.web.jsx', '.web.js', '.ts', '.tsx',
			'.js',
			'.jsx',
			'.react.js',
		],
		mainFields: [
			'browser',
			'jsnext:main',
			'main',
		],

		// 用来配置依赖文件的别名，值是一个对，该对象的键是别名，值是实际路径
		alias: {
			'components': path.resolve(__dirname, '../app/components')
		}

	}, 
	//node服务器，实时预览
	devServer: {
		contentBase: "/", //本地服务器所加载的页面所在的目录
		historyApiFallback: true, //不跳转
		inline: true, //当源文件改变时会自动刷新页面
		open: true,
		port: appConfig.dev.port //端口
	}

}

 
 
module.exports = function(env) {
	env = env || "dev";
	console.log(env)
	return require("./webpack." + env + ".config.js")(env, config);
};
// module.exports = config;