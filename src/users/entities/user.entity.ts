import { Country } from "src/countries/entities/country.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('users')
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    type: 'text'
  })
  name: string;

  @Column({
    type: 'text'
  })
  last_name: string;

  @ManyToOne(() => Country)
  country: Country;
}
