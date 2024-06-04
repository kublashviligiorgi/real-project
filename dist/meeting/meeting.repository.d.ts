import { CreateMeetingDto } from './dto/create-meeting.dto';
import { UpdateMeetingDto } from './dto/update-meeting.dto';
export declare class MeetingRepository {
    meeting: any[];
    create(data: CreateMeetingDto): {
        id: any;
        title: string;
        date: string;
        mentor: import("../user/dto/create-user.dto").CreateUserDto;
        students: import("../user/dto/create-user.dto").CreateUserDto;
    };
    findAll(): any[];
    findOne(id: number): any;
    update(id: number, data: UpdateMeetingDto): {
        id: any;
        title: any;
        date: any;
        mentor: any;
        students: any;
    };
    delete(id: number): any[];
}
