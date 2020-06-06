import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

import { Document } from 'mongoose';

@Schema()
export class Event extends Document {

  @Prop()
  title: string;

  @Prop()
  description: string;

  @Prop()
  status: string;

  @Prop()
  limit: number;

  @Prop()
  start_at: Date;

  @Prop()
  end_at: Date;

}

export const EventSchema = SchemaFactory.createForClass(Event);