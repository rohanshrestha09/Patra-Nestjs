import * as mongoose from 'mongoose';
const moment = require('moment');

export const UserSchema = new mongoose.Schema(
  {
    fullname: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
    },
    password: {
      type: String,
      minlength: 6,
      required: true,
    },
    imgUrl: {
      type: String,
      default: '',
    },
    creation: {
      type: String,
      default: moment().format('MMMM Do YYYY, h:mm:ss a'),
    },
  },
  {
    timestamps: true,
  },
);
