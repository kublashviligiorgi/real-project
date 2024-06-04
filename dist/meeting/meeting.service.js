"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MeetingService = void 0;
const common_1 = require("@nestjs/common");
const meeting_repository_1 = require("./meeting.repository");
let MeetingService = class MeetingService {
    constructor(meetingRepository) {
        this.meetingRepository = meetingRepository;
    }
    create(createMeetingDto) {
        return 'This action adds a new meeting';
    }
    findAll() {
        return `This action returns all meeting`;
    }
    findOne(id) {
        return `This action returns a #${id} meeting`;
    }
    update(id, updateMeetingDto) {
        return `This action updates a #${id} meeting`;
    }
    remove(id) {
        return `This action removes a #${id} meeting`;
    }
};
exports.MeetingService = MeetingService;
exports.MeetingService = MeetingService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [meeting_repository_1.MeetingRepository])
], MeetingService);
//# sourceMappingURL=meeting.service.js.map