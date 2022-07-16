import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import mongoose, { Model } from 'mongoose';
import { UserInterface } from './interface/user.interface';
import { Response } from 'express';
import { UserLoginDto, UserSignupDto } from './dto/user.dto';
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

@Injectable()
export class UserService {
  constructor(
    @InjectModel('User') private readonly userModel: Model<UserInterface>,
  ) {}

  async createAccount(
    res: Response,
    { fullname, email, password, confirmpassword }: UserSignupDto,
  ): Promise<Response> {
    const userExists = await this.userModel.findOne({ email });

    if (userExists) return res.status(400).json('User already exits');

    if (password.length < 6)
      return res.status(400).json('Password must contain atleast 6 characters');

    if (password !== confirmpassword)
      return res.status(400).json('Password does not match.');

    const saltMethod = await bcrypt.genSalt(10);

    const hashedPassword: string = await bcrypt.hash(password, saltMethod);

    try {
      const user = await this.userModel.create({
        fullname,
        email,
        password: hashedPassword,
      });

      const token = jwt.sign({ id: user._id }, process.env.TOKEN, {
        expiresIn: '90min',
      });

      return res.status(201).json(token);
    } catch (err: any) {
      return res.status(401).json(err.message);
    }
  }

  async login(
    res: Response,
    { email, password }: UserLoginDto,
  ): Promise<Response> {
    const user = await this.userModel.findOne({ email }).select('+password');

    if (!user) return res.status(400).json('Invalid email');

    const matchPassword: boolean = await bcrypt.compare(
      password,
      user.password,
    );

    if (!matchPassword) return res.status(400).json('Incorrect Password');

    const token: string = jwt.sign({ id: user._id }, process.env.TOKEN, {
      expiresIn: '90min',
    });

    return res.status(201).json(token);
  }

  async authorise(res: Response, { authorization }) {
    let token: string;

    if (authorization.startsWith('Bearer')) token = authorization.split(' ')[1];

    if (!token) return res.status(400).json('Not authorized');

    try {
      const decoded: string = jwt.verify(token, process.env.TOKEN);

      const user = await this.userModel
        .findById(new mongoose.Types.ObjectId(decoded))
        .select('-password');

      if (!user) return res.status(404).json('Not found');

      return res.status(201).json(user);
    } catch (err: any) {
      return res
        .status(401)
        .json({ message: 'Not authorized', error: err.message });
    }
  }

  async getUsers(res: Response, { id }): Promise<Response> {
    try {
      const allUsers = await this.userModel
        .find({ _id: { $ne: new mongoose.Types.ObjectId(id) } })
        .select('-password')
        .sort({ createdAt: 1 });
      return res.status(201).json(allUsers);
    } catch (err) {
      return res.status(400).json(err.message);
    }
  }

  async setAvatar(res: Response, { id }, { imgUrl }): Promise<Response> {
    try {
      await this.userModel.findOneAndUpdate({ _id: id }, { imgUrl });
      return res.sendStatus(201);
    } catch (err) {
      return res.sendStatus(400);
    }
  }

  async deleteUser(res: Response, { id }): Promise<Response> {
    try {
      await this.userModel.findOneAndDelete({ _id: id });
      return res.sendStatus(201);
    } catch (err) {
      return res.status(400).json(err.message);
    }
  }
}
