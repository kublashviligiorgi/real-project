import { Injectable } from '@nestjs/common';
import { CreateMeetingDto } from './dto/create-meeting.dto';
import { UpdateMeetingDto } from './dto/update-meeting.dto';



@Injectable()
export class MeetingRepository {
    meeting = [];
    create(data: CreateMeetingDto) {
        const newMeeting = {
            id: (this.meeting[this.meeting.length - 1]?.id || 0) + 1,
            title: data.title,
            date: data.date,
            mentor: data.mentor,
            students: data.students
        }
        this.meeting.push(newMeeting);
        console.log(this.meeting);
        return newMeeting
    }


    findAll() {
        return this.meeting
    }


    findOne(id: number) {
        for (let i = 0; i < this.meeting.length; i++) {
            if (id == this.meeting[i].id) return {
                ...this.meeting[i],
                index: i
            }
        }
        return "არ არსებობს ეგეთი მონაცემი "
    }
    update(id: number, data: UpdateMeetingDto) {
        const meetingi = this.findOne(id);
        const updatedMeeting = {
            id: meetingi.id,
            title: data.title || meetingi.title,
            date: data.date || meetingi.date,
            mentor: data.mentor || meetingi.mentor,
            students: data.students || meetingi.students
        }
        this.meeting[meetingi.index] = updatedMeeting;
        return updatedMeeting
    }


    delete(id: number) {
        const meetingi = this.findOne(id);
        return this.meeting.splice(meetingi.index, 1)
    }
}