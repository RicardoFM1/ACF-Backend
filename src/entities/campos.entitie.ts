import { Column, Decimal128, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Horarios } from "./horarios.entitie";
import { truncates } from "bcryptjs";

@Entity("campos")
export class Campos {
    @PrimaryGeneratedColumn("increment")
    id: number

    @Column()
    nome: string

    @Column()
    endereco: string
    
    @Column()
    descricao: string

    @ManyToOne(() => Horarios, {onDelete: "CASCADE"})
    horarios: Horarios

    @Column()
    imagem: string

    @Column()
    valor: number
}