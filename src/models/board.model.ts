import { Column, Model, Table } from 'sequelize-typescript';

@Table
export class Board extends Model{
  @Column
  board_no: number;

  @Column
  title: string;

  @Column
  contetns: string;

  @Column
  image_link: string;

  @Column
  insert_ts: string;

  @Column
  update_ts: string;
  
};