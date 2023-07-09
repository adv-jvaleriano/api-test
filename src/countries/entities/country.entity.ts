import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('countries')
export class Country {

  @PrimaryGeneratedColumn('identity')
  id: number;

  @Column({
    type: 'text',
    unique: true
  })
  name: string;
}
