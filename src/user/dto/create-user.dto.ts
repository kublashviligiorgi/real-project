import { IsEmail, IsIn, IsNumber, IsPhoneNumber, IsString, Max, MaxLength, Min, MinLength } from "class-validator";

export class CreateUserDto {
    @MaxLength(40)
    @MinLength(4)
    @IsString()
    firstName: string;

    @MaxLength(40)
    @MinLength(4)
    @IsString()
    lastName: string;

    @IsEmail()
    email: string;

    @IsPhoneNumber()
    phoneNumber: string;

    @Max(60)
    @Min(18)
    @IsNumber()
    age: number;

    @IsIn(["male", "female"])
    gender: string;
    
}
