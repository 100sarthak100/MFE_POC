const { merge } = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-react");
var path = require('path');
const HtmlPlugin = require("html-webpack-plugin");

module.exports = (webpackConfigEnv, argv) => {
    const defaultConfig = singleSpaDefaults({
        orgName: "cardinalhealth",
        projectName: "app5",
        webpackConfigEnv,
        argv,
    });

    return merge(defaultConfig, {
        // modify the webpack config however you'd like to by adding to this object
        module: {
            rules: [
                {
                    test: /\.(js|jsx)$/,
                    exclude: /node_modules/,
                    use: [
                        {
                            loader: "babel-loader"
                        }
                    ]
                },
                // {
                //     test: /\.html$/,
                //     use: [
                //         {
                //             loader: "html-loader"
                //         }
                //     ]
                // }
            ]
        },
        plugins: [
            // new HtmlPlugin({
            //     filename: "index.html",
            //     template: "./src/index.html"

            // })
        ],
        resolve: {
            alias: {
                // Needed when library is linked via `npm link` to app
                react: path.resolve("./node_modules/react")
            }
        }
    });
};
