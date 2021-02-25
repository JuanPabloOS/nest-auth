import { Column, Model, Table } from 'sequelize-typescript';
import { PrimaryGeneratedColumn } from 'typeorm';

@Table
export class User extends Model<User> {
  @PrimaryGeneratedColumn()
  id: number;

  @Column
  name: string;

  @Column
  role: string;
}
