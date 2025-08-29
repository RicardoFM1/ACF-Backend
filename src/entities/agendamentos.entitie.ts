import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Campos } from "./campos.entitie";
import { Usuarios } from "./usuarios.entitie";

@Entity("agendamentos")
export class Agendamentos{
    @PrimaryGeneratedColumn("increment")
    id: number

    @ManyToOne(() => Campos)
    campos: Campos

    @Column()
    horario: string

    @ManyToOne(() => Usuarios)
    usuarios: Usuarios

    @Column({default: "inativo", type: "varchar"})
    status: string

    @Column()
    data: string


}