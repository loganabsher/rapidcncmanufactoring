'use strict';

const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;

// TODO: rework routes
app.get('/*', (request, response) => response.sendFile(`${__dirname}/public/index.html`, {root: '.'}));

app.listen(PORT, function(){
  console.log('server up:', PORT);
});
