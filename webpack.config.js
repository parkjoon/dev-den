const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
	devtool: 'eval',
	entry: [
		'webpack-dev-server/client?http://localhost:3000',
		'./src/index.js'
	],
	output: {
		path: path.join(__dirname, 'build'),
		filename: 'bundle.js',
		publicPath: '/build/'
	},
	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				use: ['babel-loader'],
				include: path.join(__dirname, 'src')
			},
			{
				test: /\.(css)$/,
				use: ExtractTextPlugin.extract({
					use: 'css-loader'
				})
			},
			{ test: /\.svg$/, use: 'url-loader?limit=65000&mimetype=image/svg+xml' },
			{ test: /\.woff$/, use: 'url-loader?limit=65000&mimetype=application/font-woff' },
			{ test: /\.woff2$/, use: 'url-loader?limit=65000&mimetype=application/font-woff2' },
			{ test: /\.[ot]tf$/, use: 'url-loader?limit=65000&mimetype=application/octet-stream' },
			{ test: /\.eot$/, use: 'url-loader?limit=65000&mimetype=application/vnd.ms-fontobject' },
			{ test: /\.(png|jpg|gif|cur)$/, use: 'url-loader?limit=8192' }
		]
	},
	plugins: [
		new ExtractTextPlugin('styles.css')
	]
};
