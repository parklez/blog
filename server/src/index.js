/* eslint-disable no-undef */
const express = require('express');
const path = require('path');
const app = express();
require('./lib/mongo');

const {port} = require('./config/app');

// Middleware
app.use(express.json());
app.use((err, req, res, next) => {
  // https://github.com/expressjs/express/issues/4526
  if (err instanceof SyntaxError && err.status === 400 && 'body' in err) {
    console.error(err);
    return res.status(400).send(err.message);
  }
  next();
});

// Routes
const routes = require('./routes');
app.use('/api', routes);

// Server static files
app.use(express.static(`${__dirname}/../public`));

// https://www.devmedia.com.br/subindo-uma-aplicacao-angular-para-o-heroku/40260
app.get('/*', (req, res) => {
  res.sendFile(path.join(`${__dirname}/../public/index.html`));
});

app.listen(port, () => {
  console.log(`Server is listening on port: ${port}`);
});

module.exports = app;
