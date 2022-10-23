import './dotenv';
import { Sequelize } from 'sequelize-typescript';
import { Board } from '../models/board.model';

const dbInfo = {
  host : process.env.DB_HOST as string,
  user : process.env.DB_USER as string,
  password : process.env.DB_PASSWORD as string,
  database : process.env.DB_DATABASE as string,
  dialect : process.env.DB_DIALECT as any,
};

export const connect = () => {
  const sequelize = new Sequelize(dbInfo.database, dbInfo.user, dbInfo.password, {
    host: dbInfo.host,
    dialect: dbInfo.dialect,
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
}

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
*/