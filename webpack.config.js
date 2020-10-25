 const path = require('path')
 const TerserPlugin = require('terser-webpack-plugin')

module.exports={
     entry:{
        'indexFile': "./src/scripts/index.js",
        'lottery': "./src/scripts/lottery.js"
        },
     output:{
         filename:'[name].[contenthash].js',
         path: path.resolve( __dirname ,'./dist'),
         
     },
     mode:'none',
     watch: true,
     watchOptions: {
        ignored: ['node_modules/**']
      },
     module:{
         rules:[
         {
            test: /\.(jpg|JPG|jpeg|png|gif|mp3|svg|ttf|woff2|woff|eot)$/gi,
             use:[
                 'file-loader'
                ]
         },
         {
             test:/\.css$/,
             use:['style-loader', 'css-loader' ]
         },
         {
            test:/\.scss$/,
            use:['style-loader', 'css-loader','sass-loader' ]
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
            test:/\.(ttf|woff|woff2)$/,
            use:[
                {
                    loader:'file-loader',
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
         new TerserPlugin()
     ]
}