import * as mongoose from 'mongoose';

export const MessageSchema = new mongoose.Schema(
  {
    users: Array,
    sender: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);
