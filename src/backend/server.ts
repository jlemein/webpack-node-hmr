// import express from 'express';

const Webpack = require("webpack");
const WebpackDevServer = require("webpack-dev-server");
const webpackConfig = require("../../webpack.config.js");
const Express = require("express");

const compiler = Webpack(webpackConfig);
const devServerOptions = { ...webpackConfig.devServer, open: true };
// const server = new WebpackDevServer(devServerOptions, compiler);
const WeppackDevMiddleware = require("webpack-dev-middleware");
const WebpackHotMiddleware = require("webpack-hot-middleware");

const app = Express();

// Tell express to use the webpack-dev-middleware and use the webpack.config.js
// configuration file as a base.
app.use(
  WeppackDevMiddleware(compiler, {
    // serverSideRender: true,
    // noInfo: true,
    publicPath: webpackConfig.output.publicPath,
    // writeToDisk: true,
  })
);
app.use(
  WebpackHotMiddleware(compiler, {
    log: console.log,
    path: "/__webpack_hmr",
    heartbeat: 10 * 1000,
  })
);

app.get("/hond", function (req: any, res: any) {
  res.sendStatus(202);
  // res.statusCode = 201;
  // res.sendFile(path.join(__dirname + '/index.html'));
  console.log("Hello all 234ss");
  console.log("What is this 12333");

  console.log("Something new   12");
});

// Serve the files on port 3000.
app.listen(3000, () => {
  console.log("Example app listening on port 3000!\n");
});

// const runServer = async () => {
//   console.log("Starting dev server...");
//   await server.start();
// }

// const stopServer = async () => {
//   console.log('Stopping server...');
//   await server.stop();
// };

// server.startCallback(() => {
//   console.log("WOWOWOWOWOWWWWWWWWWWWWWWWWWWWWW")

//   // console.log('Successfully started server on http://localhost:8080');
// });

// runServer();

// const config = require('../../webpack.server.config.js');

// const router = express.Router();

// // app.set("view engine", "pug");
// // app.set("views", path.join(__dirname, "views"));

// // Tell express to use the webpack-dev-middleware and use the webpack.config.js
// // configuration file as a base.
// app.use(
//   webpackDevMiddleware(compiler, {
//     publicPath: config.output.publicPath,
//   })
// );

// app.get('/hond', function(req, res){
//   res.sendStatus(202);
//   // res.statusCode = 201;
//   // res.sendFile(path.join(__dirname + '/index.html'));
//   console.log("Hello all 234ss");
//   console.log("What is this");
// });

// // Serve the files on port 3000.
// app.listen(3000, () => {
//   console.log('Example app listening on port 3000!\n');
// });
