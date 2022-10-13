const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('root');
});

app.get('/boards', (req, res) => {
  res.send('boards');
});

module.exports = app;