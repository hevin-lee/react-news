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
let APP_PATH = path.resolve(projectRoot, 'app'); // 源码的目录
// const autoprefixer = require('autoprefixer');
const pxtorem = require('postcss-pxtorem');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const svgSpriteDirs = [
	require.resolve('antd-mobile').replace(/warn\.js$/, ''), // antd-mobile 内置svg
	path.resolve(APP_PATH, 'assets/svg') // 业务代码本地私有 svg 存放目录
];

const postcssOpts = {
  ident: 'postcss', // https://webpack.js.org/guides/migrating/#complex-options
  plugins: () => [
    require('postcss-cssnext'),
    //下面的开启会报错暂时还没解决
    // require('autoprefixer')({
    //   browsers: ['last 2 versions', 'Firefox ESR', '> 1%', 'ie >= 8', 'iOS >= 8', 'Android >= 4'],
    // }),
    // 100 * (1080 / 750)   1080 设计稿propList
    pxtorem({ rootValue: 100,   propList: [ '!font-size'], minPixelValue: 1 }),
  ],
};

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
		rules: [{
				test: /\.css$/,
				use: [
					"style-loader", 
					"css-loader",
					{ loader: 'postcss-loader', options: postcssOpts }, 
				  // 	{ 
				  // 		loader: 'postcss-loader',
				  // 		options:{
						// 	ident: 'postcss',
						// 	plugins: () => [
						// 		// require('postcss-cssnext'),
						// 		autoprefixer({
						// 			browsers: ['last 2 versions', 'Firefox ESR', '> 1%', 'ie >= 8', 'iOS >= 8', 'Android >= 4'],
						// 		})
						// 	],
						// }

				  // 	 },
				  
				  ]
			}, {
				test: /\.(jsx|js)?$/,
				loader: 'babel-loader',
				exclude: /node_modules/,
				query: {
					presets: ['react', 'es2015'],
					plugins: [
						["import", {
							libraryName: "antd-mobile",
							style: true,
						}]
					]
				}
			}, {
				test: /\.vue$/,
				loader: 'vue'
			},  {
				test: /\.json$/,
				loader: 'json'
			}, {
				// test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
				test: /\.(png|jpe?g|gif)(\?.*)?$/,
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
				 test: /\.(svg)$/i,
				// loader: 'svg-sprite-loader',
				use:[
				  	"svg-sprite-loader"
				],
				include: svgSpriteDirs
			}, 
			 {
				test: /\.less$/,
				use:[
				  	"style-loader", 
				  	"css-loader", 
				  	{ loader: 'postcss-loader', options: postcssOpts }, 
				  	"less-loader",
				  
				 ]
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
			'Components': path.resolve(APP_PATH, 'Components'),
			'Pages': path.resolve(APP_PATH, 'Pages')
		}

	}, 
	//node服务器，实时预览
	devServer: {
		contentBase: "/", //本地服务器所加载的页面所在的目录
		historyApiFallback: true, //不跳转
		inline: true, //当源文件改变时会自动刷新页面
		open: true,
		host:'192.168.80.110',
		port: appConfig.dev.port, //端口
		 proxy: {
		    // "**": "http://m.toutiao.com"
		  },
	}

}

 
 
module.exports = function(env) {
	env = env || "dev";
	console.log(env)
	return require("./webpack." + env + ".config.js")(env, config);
};
// module.exports = config;