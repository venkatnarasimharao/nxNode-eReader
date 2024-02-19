import { model, Schema, Model } from 'mongoose';

import IUser from '../interfaces/user';

const UserSchema: Schema = new Schema(
  {
    userId: {
      type: Number,
      required: true,
      unique: true
    },
    email: {
      type: String,
      required: true
    },
    firstName: {
      type: String,
      required: true
    },
    lastName: {
      type: String,
      required: true
    },
  },
  {
    timestamps: true // auto - creates (updated_at and created_at in mongoos)
  });

const user: Model<IUser> = model<IUser>('users', UserSchema);

export default user