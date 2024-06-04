"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MeetingRepository = void 0;
const common_1 = require("@nestjs/common");
let MeetingRepository = class MeetingRepository {
    constructor() {
        this.meeting = [];
    }
    create(data) {
        const newMeeting = {
            id: (this.meeting[this.meeting.length - 1]?.id || 0) + 1,
            title: data.title,
            date: data.date,
            mentor: data.mentor,
            students: data.students
        };
        this.meeting.push(newMeeting);
        console.log(this.meeting);
        return newMeeting;
    }
    findAll() {
        return this.meeting;
    }
    findOne(id) {
        for (let i = 0; i < this.meeting.length; i++) {
            if (id == this.meeting[i].id)
                return {
                    ...this.meeting[i],
                    index: i
                };
        }
        return "არ არსებობს ეგეთი მონაცემი ";
    }
    update(id, data) {
        const meetingi = this.findOne(id);
        const updatedMeeting = {
            id: meetingi.id,
            title: data.title || meetingi.title,
            date: data.date || meetingi.date,
            mentor: data.mentor || meetingi.mentor,
            students: data.students || meetingi.students
        };
        this.meeting[meetingi.index] = updatedMeeting;
        return updatedMeeting;
    }
    delete(id) {
        const meetingi = this.findOne(id);
        return this.meeting.splice(meetingi.index, 1);
    }
};
exports.MeetingRepository = MeetingRepository;
exports.MeetingRepository = MeetingRepository = __decorate([
    (0, common_1.Injectable)()
], MeetingRepository);
//# sourceMappingURL=meeting.repository.js.map