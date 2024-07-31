import { Body, Controller, Get, Param, Post } from '@nestjs/common';

@Controller('user')
export class UserController {

    @Get(':id')
    findAll(@Param("id") id:string ) {
        return ({
            user: {
                id: id,
                name: "John Doe",
                email: "john.doe@example.com"
            }
        })
    }
    @Post()
    create(@Body('name') name: string){
        return 'the user name is ' + name;
    }
}
