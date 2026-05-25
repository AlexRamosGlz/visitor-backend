import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class Count {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    count: number
}
