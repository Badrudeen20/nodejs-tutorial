import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Movie {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    name: string;
    @Column()
    rate: number;
    @Column()
    desc: string;

}
