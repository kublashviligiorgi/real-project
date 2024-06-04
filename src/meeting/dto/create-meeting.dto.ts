import { Type } from "class-transformer";
import { IsDate, IsObject, IsString, MaxLength, MinLength, ValidateNested } from "class-validator";
import { CreateUserDto } from "src/user/dto/create-user.dto";

export class CreateMeetingDto {
    @MaxLength(40)
    @MinLength(5)
    @IsString()
    title: string;

    @IsDate()
    date: string;

    @IsObject()
    @ValidateNested()
    @Type(() => CreateUserDto)
    mentor: CreateUserDto;

    @IsObject()
    @ValidateNested()
    @Type(() => CreateUserDto)
    students: CreateUserDto;
}
