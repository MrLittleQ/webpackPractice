const htmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");
const path = require("path");
module.exports = {
	context: __dirname,
	entry: "./src/app.js",//入口文件
	output: {
		path: path.resolve(__dirname + '/dist'),//输出文件路径
		filename: 'js/[name].bundle.js'//输出文件名
	},
	module: {
		rules: [{
			test: /\.js$/,
			use: ["babel-loader"],
			exclude: path.resolve(__dirname + './node_modules/'),
			include: path.resolve(__dirname + './src/')
				// query:{
				// 	preset:["latest"]
				// }
		}, {
			test: /\.css$/,
			loader:"style-loader!css-loader?importLoaders=1!postcss-loader"
			// use: [{loader:"style-loader"},{loader:"css-loader",options:{importLoaders:1}},  {
   //                  loader:'postcss-loader',
   //                  options:{
   //                      plugins:function(){
   //                          return [
   //                              require('autoprefixer')({broswers:['last 5 versions']})
   //                          ];
   //                      }
   //                  }
   //              }]
		},
		{
			test:/\.less$/,
			loader:"style-loader!css-loader!postcss-loader!less-loader"
		},
		{
            test:/\.scss$/,
			loader:"style-loader!css-loader!postcss-loader!sass-loader"
		},
		{
			test:/\.html$/,
			loader:"html-loader"
		},
		{
			test:/\.tpl$/,
			loader:"ejs-loader"
		},
		{
			test:/\.(png|jpg|tif|svg)$/i,
			//loader:"file-loader",
			loaders: [
                    'url-loader?limit=40000&name=assets/[name]-[hash:5].[ext]',
                    'img-loader'
                ]
			// 	limit:400000,
			// 	name:"assets/[name]-[hash:5].[ext]"
			// },
		}
		]
	},
	plugins: [
		new htmlWebpackPlugin({
			filename: "index.html",
			template: "template.html",
			inject: "body"
		})
		 // new webpack.LoaderOptionsPlugin({
   //          options : {
   //              postcss : function(){
   //                  return [
   //                      require('autoprefixer')({
   //                          broswers : ['last 5 versions']
   //                      })
   //                  ];
   //              }
   //          }
   //      })
	]
}