import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Horarios } from "./horarios.entitie";

@Entity("campos")
export class Campos {
    @PrimaryGeneratedColumn("increment")
    id: number

    @Column()
    nome: string

    @Column()
    lugar: string
    
    @Column()
    descricao: string

    @ManyToOne(() =>Horarios)
    horarios: Horarios

    @Column()
    imagem: string

}