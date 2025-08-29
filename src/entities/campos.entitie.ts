import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

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

    @Column()
    imagem: string
    
    @Column()
    status: string

    @Column()
    valor: number
}