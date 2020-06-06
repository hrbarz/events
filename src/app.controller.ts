import {
  Controller,
  Get,
  Post,
  Put,
  Param,
  Delete,
  Body,
} from '@nestjs/common';
import { AppService } from './app.service';
import { CreateEventDto } from './dto/create-event.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get(':id')
  findOne(@Param('id') id: number): any {
    return this.appService.getEvent(id);
  }

  @Get()
  findAll(): any {
    return this.appService.getAllEvents();
  }

  @Post()
  create(@Body() createEventDto: CreateEventDto): Promise<any> {
    return this.appService.createEvent(createEventDto);
  }

  @Put(':id')
  update(@Param('id') id: any, @Body() createEventDto: CreateEventDto): Promise<any> {
    return this.appService.editEvent(id, createEventDto);
  }

  @Delete(':id')
  remove(@Param('id') id: any): Promise<any> {
    return this.appService.deleteEvent(id);
  }
}
