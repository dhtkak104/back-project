import './dotenv';
import { Client } from 'pg';

export const db = new Client({
    host    : process.env.DB_HOST as string,
    user    : process.env.DB_USER as string,
    password: process.env.DB_PASSWORD as string,
    port    : Number(process.env.DB_PORT),
    database: process.env.DB_DATABASE  as string
});