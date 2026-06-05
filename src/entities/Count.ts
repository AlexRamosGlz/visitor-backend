import "reflect-metadata"
import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"


@Entity()
export class Count {

    @PrimaryGeneratedColumn({ type: "int"})
    id: number

    @Column({ type: "text"})
    ipAddress: string

    @Column({ type: "integer" })
    count: number
}
