import { MeetingService } from './meeting.service';
import { CreateMeetingDto } from './dto/create-meeting.dto';
import { UpdateMeetingDto } from './dto/update-meeting.dto';
export declare class MeetingController {
    private readonly meetingService;
    constructor(meetingService: MeetingService);
    create(createMeetingDto: CreateMeetingDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateMeetingDto: UpdateMeetingDto): string;
    remove(id: string): string;
}
