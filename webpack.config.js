 const path = require('path')
 const TerserPlugin = require('terser-webpack-plugin')
 const MiniCssExtractPlugin = require('mini-css-extract-plugin')
 const CleanWebpackPlugin = require('clean-webpack-plugin')
 const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports={
     entry:"./src/scripts/index.js",
     output:{
         filename:'bundle.[contenthash].js',
         path: path.resolve( __dirname ,'./dist'),
         publicPath: 'dist/'
         
     },
     mode:'none',
     watch: true,
     watchOptions: {
        ignored: ['node_modules/**']
      },
     module:{
         rules:[
         {
            test: /\.(jpg|JPG|jpeg|png|gif|mp3|svg)$/gi,
             use:[
                 'file-loader'
                ]
         },
         {
             test:/\.css$/,
             use:[MiniCssExtractPlugin.loader, 'css-loader' ]
         },
         {
            test:/\.scss$/,
            use:[MiniCssExtractPlugin.loader, 'css-loader','sass-loader' ]
        },
        {
            test:/\.js$/,
            exclude:/node_modules/,
            use:{
                loader:'babel-loader',
                options:{
                    presets:['@babel/env']
                }
            }
        },{
            test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
            use:[
                {
                    loader:'url-loader',
                    options:{
                        name: '[name].[ext]',
                        outputPath:'fonts/'
                    }
                }
            ]
        }
         ]
         
     },
     plugins:[
         new TerserPlugin(),
         new MiniCssExtractPlugin({
             filename:"styles.[contenthash].css"
         }),
         new CleanWebpackPlugin(),
         new HtmlWebpackPlugin ()
     ]
}