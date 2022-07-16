import { Types } from 'mongoose';

export class AddMessageDto {
  readonly from: Types.ObjectId;
  readonly to: Types.ObjectId;
  readonly message: string;
}

export class GetMessageDto {
  readonly from: Types.ObjectId;
  readonly to: Types.ObjectId;
}
