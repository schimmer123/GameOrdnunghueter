import {Column, Entity, PrimaryGeneratedColumn,} from "typeorm";


export interface sortElement {
    id: number;
    text: string;
}

@Entity()
export class Lists {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column({type: "json", nullable: true})
    list: sortElement[];
}
