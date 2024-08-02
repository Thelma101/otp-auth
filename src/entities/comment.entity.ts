import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./user.entity";
import { Topic } from "./topic.entity";

@Entity()
export class Comment {

    @PrimaryGeneratedColumn()
    id:string;

    @Column()
    text:string;

    // @ManyToOne(() => User, user => user.comments)
    @ManyToOne((type) => User, (user) => user.comments)
    user:User;

    @Column()
    topic:Topic;

}