const path = require('path');

const clientSrcPath = path.resolve(__dirname, 'web');
const serverSrcPath = path.resolve(__dirname, 'src/main/resources/static');


module.exports = {

    entry: clientSrcPath + '/main.js',

    output: {
        path: serverSrcPath,
        filename: 'app.bundle.js'
    },

    module: {
        rules: [
            {
                test: path.join(__dirname, '.'),
                exclude: /(node_modules)/,
                use: [{
                    loader: 'babel-loader',
                    options: {
                        presets: ["@babel/preset-env", "@babel/preset-react"]
                    }
                }]
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            }
        ]
    }
};
