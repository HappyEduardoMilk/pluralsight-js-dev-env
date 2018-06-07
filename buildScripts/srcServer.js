import express from 'express';
import path from 'path';
import open from 'open';
import webpack from 'webpack';

import config from '../webpack.config.dev';

const port = 3333,
      app = express(),
      compiler = webpack(config);

// Express uses `webpack-dev-middleware` with our `compiler`
app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath,
}));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../src/index.html'));
});

app.listen(port, (err) => {
  if (err) {
    console.log(err);
  } else {
    open('http://localhost:' + port);
  }
});
