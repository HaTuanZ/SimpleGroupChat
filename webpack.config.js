const path = require('path');

const config = {
    entry : {
       index: './src/index.jsx', 
       roomchat: './src/roomchat.jsx'
    },
    output : {
        path: path.resolve(__dirname+'/public', 'dist'),
        filename: '[name].js'
    },
    module: {
        rules : [
            {
                use : 'babel-loader',
                test : /\.jsx$/,
                exclude: /node_modules/
            }
        ]   
    } 

};
module.exports = config;