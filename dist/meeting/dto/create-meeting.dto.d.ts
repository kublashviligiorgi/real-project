import { CreateUserDto } from "src/user/dto/create-user.dto";
export declare class CreateMeetingDto {
    title: string;
    date: string;
    mentor: CreateUserDto;
    students: CreateUserDto;
}
