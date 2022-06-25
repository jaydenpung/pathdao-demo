import { Column, Model, Table, DataType } from "sequelize-typescript";

@Table({ timestamps: true })
export class Footballer extends Model<Footballer> {
  @Column({
    type: DataType.STRING
  })
  public name!: string;

  @Column({
    type: DataType.INTEGER
  })
  public age!: number;
}