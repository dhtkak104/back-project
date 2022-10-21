import { Sequelize } from 'sequelize-typescript';
import { Board } from '../models/board.model';

interface Params { 
    host: string,
     user: string
     password: string
     database: string
     dialect: any
    }
export const connect = ({ host, user, password, database, dialect }: Params) => {
  
  const operatorsAliases: any = false;
  const sequelize = new Sequelize(database, user, password, {
        host,
        dialect,
        operatorsAliases,
        repositoryMode: true,
        pool: {
            max: 10,
            min: 0,
            acquire: 20000,
            idle: 5000
        }
  });

  sequelize.addModels([Board]);

  const db: any = {};
  db.Sequelize = Sequelize;
  db.sequelize = sequelize;
    
  return db;
};



/* 
import { Client } from 'pg';

const db = new Client({
    host    : process.env.DB_HOST,
    user    : process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    port    : Number(process.env.DB_PORT),
    database: process.env.DB_DATABASE
});
export default db;

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
