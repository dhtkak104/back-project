const express = require('express');
const app = express();

//앱셋팅
app.use(express.static(`${__dirname}/src/public`));

app.get('/', (req, res) => {
  res.send('root');
});

app.get('/boards', (req, res) => {
  res.send('boards');
});

module.exports = app;