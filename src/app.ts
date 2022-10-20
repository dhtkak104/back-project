import './config/dotenv';
//모듈
import express, {Request, Response} from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import db from './config/db';
import routes from './routes';

const port = process.env.PORT || 8081 as number;
const app = express();

//앱셋팅
//app.use(cors({origin:'http://127.0.0.1:3000',credentials:true}));
app.use(cors());
app.use(express.static(`${__dirname}/src/public`));
app.use(bodyParser.json());
//URL을 통해 전달되는 데이터레 한글, 공백 등과 같은 문자가 포함될 경우 제대로 인식되지 않는 문제해결
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req: Request, res: Response) => {
    res.send();
}) 

app.listen(port, () => {
    console.log(`${port} 번 가동`);
    db.connect();
    routes(app);
});