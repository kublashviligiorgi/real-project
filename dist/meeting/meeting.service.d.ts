import { CreateMeetingDto } from './dto/create-meeting.dto';
import { UpdateMeetingDto } from './dto/update-meeting.dto';
import { MeetingRepository } from './meeting.repository';
export declare class MeetingService {
    private readonly meetingRepository;
    constructor(meetingRepository: MeetingRepository);
    create(createMeetingDto: CreateMeetingDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateMeetingDto: UpdateMeetingDto): string;
    remove(id: number): string;
}
