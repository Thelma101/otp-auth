import { Controller, Get } from '@nestjs/common';


@Controller('user') // localhost:3000/user
export class UserController {
    @Get()
    findAll() {
        return 'This action returns all users.';
    }
}