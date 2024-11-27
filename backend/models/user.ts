import mongoose, { Document } from "mongoose";
import bcrypt from 'bcryptjs';

interface IUser extends Document {
    username: string;
    email: string;
    password: string;
    comparePassword(candidatePassword: string): Promise<boolean>;
  }


const UserSchema:mongoose.Schema<IUser> = new mongoose.Schema({
    username: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true }
});

UserSchema.pre('save',async function name(next) {
   if(!this.isModified('password')) return next();

   const salt = await bcrypt.genSalt(10);
   this.password = await bcrypt.hash(this.password,salt);
   next();
});

UserSchema.methods.comparePassword = function (candidatePassword: string): Promise<boolean> {
    return bcrypt.compare(candidatePassword, this.password);
  };

export default mongoose.model('User', UserSchema);