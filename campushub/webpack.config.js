const path = require('path');


module.exports = {
    entry: './src/main.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: 'dist/'
    },
    module:{
        rules: [
            {
                test: /\.css$/,
                //css.loader只负责将css文件进行加载
                //style.loader负责将样式添加到DOM中
                //使用多个loader时，是从右向左
                use: [ 'style-loader', 'css-loader' ]
            },
            {
                test: /\.sass$/,
                loaders: ['style', 'css', 'sass']
            },
            {
                test: /\.less$/,
                loader: 'less-loader', // compiles Less to CSS
            },
        ]
    },
    resolve:{
        //alias ： 别名
        alias:{
            'vue$':'vue/dist/vue.esm.js'
        }
    }
}