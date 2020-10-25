 const path = require('path')
 const TerserPlugin = require('terser-webpack-plugin')

module.exports={
     entry:"./src/scripts/index.js",
     output:{
         filename:'bundle.js',
         path: path.resolve( __dirname ,'./dist'),
         
     },
     mode:'none',
     watch: false,
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
        }
         ]
         
     },
     plugins:[
         new TerserPlugin()
     ]
}