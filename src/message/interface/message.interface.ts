import { Types } from 'mongoose';

export interface Message {
  users: [];
  sender: Types.ObjectId;
  message: string;
}
