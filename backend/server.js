const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackConfig = require('../webpack.config.js');
const compiler = webpack(webpackConfig);
const express = require('express');
const PORT = 8085;
const app = express();

app.set("view engine", "html");
app.use(express.json());

app.get("/dist", (req, res, next) => {
  res.send("dadfadf")
  next();
});

app.use(
  webpackDevMiddleware(compiler, {
    publicPath: webpackConfig.output.publicPath,
    stats: {colors: true},
  })
);

app.use("/", express.static(__dirname + "/frontend"));

app.listen(PORT, () => {
  console.log("=====================================")
  console.log("서버 구동 중 입니다.")
  console.log(`http://localhost:${PORT}`);
  console.log("=====================================")
})