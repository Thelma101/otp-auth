import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/createUserDto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from 'src/entities/user.entity';

@Injectable()
export class UserService {

    constructor(@InjectRepository [User] private readonly userRepo: Repository<User>,) { }
    findOne(id: string) {
        return {
            id: id,
        };
    }

    create(createUserDto: CreateUserDto) {
        return "the user has been created successfully";
        // return this.userService.create(createUserDto)

    }
}
