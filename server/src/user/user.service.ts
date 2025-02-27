import { HttpException, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from './entities/user.entity';
import { Model } from 'mongoose';

@Injectable()
export class UserService {
  

  constructor(
    @InjectModel(User.name) private readonly userModel: Model<User>,
  ) {}
  async create(createUserDto: CreateUserDto): Promise<User> {
    try{
      const createdUser = new this.userModel(createUserDto);
      return await createdUser.save();
    }
    catch(err){
      throw new HttpException(err.message, err.status)
    }
  }

  async findAll() {
    try{
      const users = await this.userModel.find().exec();
      return users;
    }
    catch(err){
      throw new HttpException(err.message, err.status)
    }
  }

  async findByEmail(email: string) {
    try{
      const user = await this.userModel.findOne({email: email}).exec();
      return user;
    }
    catch(err){
      throw new HttpException(err.message, err.status)
    }
  }

  async findOne(id: string) {
    try{
      const user = await this.userModel.findOne({uid: id}).exec();
      return user;
    }
    catch(err){
      throw new HttpException(err.message, err.status)
    }
  }

 async update(id: string, updateUserDto: UpdateUserDto): Promise<User> {
    try{
      const updatedUser = await this.userModel.findOneAndUpdate(
        {uid: id},
        { ...updateUserDto}, 
        {new: true}
        );
        return updatedUser;
    }
    catch(err){
      throw new HttpException(err.message, err.status)
    }
  }

 async remove(id: string) {
    try{
      const deletedUser = await this.userModel.findOneAndDelete({uid: id});
      return deletedUser;
    }
    catch(err){
      throw new HttpException(err.message, err.status)
    }
  }
}
