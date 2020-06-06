import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { Event } from './schemas/event.schema';
import { CreateEventDto } from './dto/create-event.dto';

@Injectable()
export class AppService {
  constructor(@InjectModel(Event.name) private eventModel: Model<Event>) {}

  async getEvent(id: number): Promise<Event> {
    try {
      return await this.eventModel.findOne({ _id: id });
    } catch (error) {
      console.error(error);
      return null;
    }
  }

  async getAllEvents(): Promise<Event[]> {
    try {
      return await this.eventModel.find();
    } catch (error) {
      console.error(error);
    }
  }

  async createEvent(createEventDto: CreateEventDto): Promise<Event> {
    try {
      const event = new this.eventModel(createEventDto);
      return await event.save();
    } catch (error) {
      console.error(error);
    }
  }

  async editEvent(id: any, createEventDto: CreateEventDto): Promise<Event> {
    try {
      return await this.eventModel.findOneAndUpdate({ _id: id }, createEventDto, { new: true });
    } catch (error) {
      console.error(error);
    }
  }

  async deleteEvent(id: any): Promise<Event> {
    try {
      return await this.eventModel.findByIdAndDelete(id);
    } catch (error) {
      console.error(error);
    }
  }
}
