import { ApiProperty } from '@nestjs/swagger';
import {
    IsBoolean, IsEmail, IsNotEmpty, IsString, Matches, MinLength
} from 'class-validator';

export class CreateUserDto {
    @IsString()
    @IsNotEmpty()
    @ApiProperty({
        example: "Joao Leite",
        description: "User name",
    })
    name: string;

    @IsEmail()
    @ApiProperty({
        example: "joaoleite@outlook.com",
        description: "User email",
    })
    email: string;

    @IsString()
    @MinLength(8)
    @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
        message: "Your password must be strong",
    })
    @ApiProperty({
        example: "Abc153@Jo@ao",
        description:
            "Your password has to be strong, example: Abc153@Jo@ao",
    })
    password: string;

    @IsBoolean()
    @ApiProperty({
        example: "false",
        description: "Here are your credentials",
    })
    isAdmin: boolean;
}
