import "reflect-metadata"
import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"


@Entity()
export class Count {

    @PrimaryGeneratedColumn({ type: "integer" })
    id: number

    @Column({ type: "text"})
    hashedIp: string

    @Column({ type: "integer" })
    count: number
}
