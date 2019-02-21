const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const fs = require('fs');

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true }));

const PORT = 3000;
const dirname = __dirname;

app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.get('/health', function (req, res) {
  res.status(200).send( {} );
});

app.get( '*', (req, res) => {
  res.sendFile( 'index.html', { root: dirname } );
});

app.listen(PORT, function () {
  console.log(`App listening on port ${PORT}!\nServing files from: ${dirname}`);
});
