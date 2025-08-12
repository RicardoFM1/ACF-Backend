import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("horarios")
export class Horarios{
    @PrimaryGeneratedColumn("increment")
    id: number

    @Column()
    dia_da_semana: string

    @Column()
    horario_inicial: string

    @Column()
    horario_final: string

}