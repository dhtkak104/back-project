/* 
import pgPromise from 'pg-promise';
const pg = pgPromise({});

const host = process.env.DB_HOST;
const user = process.env.DB_USER;
const password = process.env.DB_PASSWORD;
const port = process.env.DB_PORT;
const database = process.env.DB_DATABASE;
const db = pg(`postgres://${user}:${password}@${host}:${port}/${database}`);

export default db;
*/
 
import { Client } from 'pg';

const db = new Client({
    host    : process.env.DB_HOST,
    user    : process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    port    : Number(process.env.DB_PORT),
    database: process.env.DB_DATABASE
});
export default db;