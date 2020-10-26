 const path = require('path')
 const TerserPlugin = require('terser-webpack-plugin')
 const MiniCssExtractPlugin = require('mini-css-extract-plugin')
 const {CleanWebpackPlugin} = require('clean-webpack-plugin')
 const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports={
     entry:"./src/scripts/index.js",
     output:{
         filename:'bundle.js',
         path: path.resolve( __dirname ,'./dist'),
         publicPath: ''
         
     },
     mode:'none',
     watch: true,
     watchOptions: {
        aggregateTimeout: 200,
        poll: 1000,
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
        },
        {
            test:/\.hbs$/,
            use:[
                'handlebars-loader'
            ]
        }
         ]
         
     },
     plugins:[
         new TerserPlugin(),
         new MiniCssExtractPlugin({
             filename:"styles.css"
         }),
         new CleanWebpackPlugin(),
         new HtmlWebpackPlugin ({
             title:"آرتیژن",
             description:"طراحی سایت آرتیژن",
             template:"src/pages/index.hbs"
         })
     ]
}