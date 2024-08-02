import { User } from "src/entities/user.entity";
import { PostgresConnectionOptions } from "typeorm/driver/postgres/PostgresConnectionOptions";
import * as dotenv from 'dotenv';
import { Comment } from "src/entities/comment.entity";
import { Topic } from "src/entities/topic.entity";
dotenv.config();


// const config: PostgresConnectionOptions = {
//     type: 'postgres',
//     host: process.env.DB_HOST,
//     port: parseInt(process.env.DB_PORT),
//     username: process.env.DB_USER,
//     password: process.env.DB_PASSWORD,
//     database: process.env.DB_NAME,
//     entities: [User, Comment, Topic],
//     synchronize: true
// }

const config: PostgresConnectionOptions = {
    type: 'postgres',
    host: 'db',
    port: 5432,
    username: 'postgres',
    password: 'postgres',
    database: 'testdb',
    entities: [User, Comment, Topic],
    synchronize: true
}

console.log(process.env);

export default config;
