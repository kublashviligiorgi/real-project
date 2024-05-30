import { CreateMeetingDto } from './dto/create-meeting.dto';
import { UpdateMeetingDto } from './dto/update-meeting.dto';
export declare class MeetingService {
    create(createMeetingDto: CreateMeetingDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateMeetingDto: UpdateMeetingDto): string;
    remove(id: number): string;
}
