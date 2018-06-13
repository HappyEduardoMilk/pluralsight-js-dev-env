import express from 'express';
import path from 'path';
import open from 'open';
import webpack from 'webpack';

import config from '../webpack.config.dev';

/* eslint-disable no-console */

const port = 3333;
const app = express();
const compiler = webpack(config);

// Express uses `webpack-dev-middleware` with our `compiler`
app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath,
}));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../src/index.html'));
});

// User data
app.get('/users', (req, res) => {
  // Hard coding for simplicity. Pretend this hits a real database
  /* eslint-disable quotes, quote-props, comma-dangle, object-curly-newline */
  res.json([
    { "id": 1, "firstName": "Alice", "lastName": "Smith", "email": "bob@gmail.com" },
    { "id": 2, "firstName": "Bob", "lastName": "Norton", "email": "tnorton@yahoo.com" },
    { "id": 3, "firstName": "Carl", "lastName": "Lee", "email": "lee.carl@hotmail.com" }
  ]);
  /* eslint-enable quotes, quote-props, comma-dangle object-curly-newline */
});

app.listen(port, (err) => {
  if (err) {
    console.log(err);
  } else {
    open(`http://localhost:${port}`);
  }
});
