//모듈
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');

const app = express();
dotenv.config();

//라우팅
const api = require('./src/api');

//앱셋팅
app.use(cors({origin:'http://127.0.0.1:3000',credentials:true}));
app.use(express.static(`${__dirname}/src/public`));
app.use(bodyParser.json());
//URL을 통해 전달되는 데이터레 한글, 공백 등과 같은 문자가 포함될 경우 제대로 인식되지 않는 문제해결
app.use(bodyParser.urlencoded({ extended: true }));

// use -> 미들웨어를 등록해주는 메서드
app.use('/', api);

module.exports = app;