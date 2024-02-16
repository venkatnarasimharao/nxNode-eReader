import { Document } from 'mongoose';

export default interface IUser extends Document {
    userId: string;
    email: string;
    firstName: string;
    lastName: string;
}
