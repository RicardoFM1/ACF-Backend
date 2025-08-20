import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Campos } from "./campos.entitie";

@Entity("horarios")
export class Horarios{
    @PrimaryGeneratedColumn("increment")
    id: number

    @ManyToOne(() => Campos)
    campos: Campos

    @Column()
    dia_da_semana: string

    @Column()
    horario_inicial: string

    @Column()
    horario_final: string


    
}