const app = require('../app');
const morgan = require('morgan');
const PORT = process.env.PORT || 8081;

const accessLogStream = require('../src/config/log'); //morgan
const logger = require('../src/config/logger'); // winston

app.use(morgan('dev'));
app.use(morgan('common', { stream: accessLogStream }));

app.listen(PORT, () => {
  logger.info(PORT + '번 포트 서버가동');
});
