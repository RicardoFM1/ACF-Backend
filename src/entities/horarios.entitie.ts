import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Campos } from "./campos.entitie";
import { Agendamentos } from "./agendamentos.entitie";

@Entity("horarios")
export class Horarios{
    @PrimaryGeneratedColumn("increment")
    id: number

    @ManyToOne(() => Campos)
    campos: Campos

    @Column()
    dia_da_semana: string

    @Column({default: "inativo", type: "enum"})
    status: string

    @Column()
    horario_inicial: string

    @Column()
    horario_final: string


    
}