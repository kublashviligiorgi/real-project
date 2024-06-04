import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { IsPhoneNumber } from 'class-validator';


@Injectable()
export class UserRepository {
    user = [];
    create(data: CreateUserDto) {
        const newUser = {
            id: (this.user[this.user.length - 1]?.id || 0) + 1,
            firstname: data.firstName,
            lastname: data.lastName,
            age: data.age,
            email: data.email,
            gender: data.gender,
            phoneNumber: data.phoneNumber
        }
        this.user.push(newUser);
        console.log(this.user)
        return newUser
    }

    findAll() {
        return this.user
    }

    findOne(id: number) {
        for (let i = 0; i < this.user.length; i++) {
            if (id == this.user[i].id) return {
                ...this.user[i],
                index: i

            }
        }
        return "არ არსებობს ეგეთი მონაცემი"
    }

    update(id: number, data: UpdateUserDto) {
        const useri = this.findOne(id);
        const updatedUser = {
            id: useri.id,
            firstname: data.firstName || useri.firstName,
            lastname: data.lastName || useri.lastName,
            age: data.age || useri.age,
            email: data.email || useri.email,
            gender: data.gender || useri.gender,
            phoneNumber: data.phoneNumber || useri.phoneNumber
        }
        this.user[useri.index] = updatedUser;
        return updatedUser
    }

    delete(id: number) {
        const useri = this.findOne(id);
        return this.user.splice(useri.index, 1)
    }
}