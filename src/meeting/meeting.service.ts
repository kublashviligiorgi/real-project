import { Injectable } from '@nestjs/common';
import { CreateMeetingDto } from './dto/create-meeting.dto';
import { UpdateMeetingDto } from './dto/update-meeting.dto';
import { MeetingRepository } from './meeting.repository';

@Injectable()
export class MeetingService {
  constructor(private readonly meetingRepository: MeetingRepository) {}
  create(createMeetingDto: CreateMeetingDto) {
    return this.meetingRepository.create(createMeetingDto);
  }

  findAll() {
    return this.meetingRepository.findAll();
  }

  findOne(id: number) {
    return this.meetingRepository.findOne(id);
  }

  update(id: number, updateMeetingDto: UpdateMeetingDto) {
    return this.meetingRepository.update(id, updateMeetingDto)
  }

  remove(id: number) {
    return this.meetingRepository.delete(id);
  }
}
