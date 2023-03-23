// import express from 'express';

const Webpack = require("webpack");
const WebpackDevServer = require("webpack-dev-server");
const webpackConfig = require("../../webpack.config.js");
const Express = require("express");

const compiler = Webpack(webpackConfig);
const devServerOptions = { ...webpackConfig.devServer, open: true };
const WeppackDevMiddleware = require("webpack-dev-middleware");
const WebpackHotMiddleware = require("webpack-hot-middleware");

const app = Express();

// Tell express to use the webpack-dev-middleware and use the webpack.config.js
// configuration file as a base.
app.use(
  WeppackDevMiddleware(compiler, {
    publicPath: webpackConfig.output.publicPath,
  })
);
app.use(
  WebpackHotMiddleware(compiler, {
    log: console.log,
    path: "/__webpack_hmr",
    heartbeat: 10 * 1000,
  })
);

app.get("/", function (req: any, res: any) {
  console.log("Hello endpoint");

  res.sendStatus(200);
});

// Serve the files on port 3000.
app.listen(3000, () => {
  console.log("Example app listening on port 3000!\n");
});
