/* eslint-disable no-undef */
const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(`${__dirname}/../public`));

// https://www.devmedia.com.br/subindo-uma-aplicacao-angular-para-o-heroku/40260
app.get('/*', (req, res) => {
  res.sendFile(path.join(`${__dirname}/../public/index.html`));
});

app.listen(process.env.PORT || 8080);
