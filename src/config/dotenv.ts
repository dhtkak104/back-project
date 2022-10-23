import paths from 'path';
import dotenv from 'dotenv';

dotenv.config({
    path: paths.resolve(__dirname, '../../', '.env')
});