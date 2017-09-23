'use strict';

const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;

app.get('/*', (req, res) => res.redirect('/index.html'));

app.listen(PORT, function(){
  console.log('server up:', PORT);
});
