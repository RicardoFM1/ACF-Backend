import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Campos } from "./campos.entitie";
import { Usuarios } from "./usuarios.entitie";

@Entity("agendamentos")
export class Agendamentos{
    @PrimaryGeneratedColumn("increment")
    id: number

    @ManyToOne(() => Campos)
    campos: Campos

    @Column()
    horario: number

    @ManyToOne(() => Usuarios)
    usuarios: Usuarios

    @Column()
    dia_do_mes: number

    @Column()
    mes_do_ano: number

}