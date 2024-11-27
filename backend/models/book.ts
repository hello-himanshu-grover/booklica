import mongoose, { Schema, Document } from 'mongoose';

export interface IBook extends Document {
  name: string;
  user: Schema.Types.ObjectId;
  createdAt: Date;
}

const bookSchema: Schema = new Schema({
  name: {
    type: String,
    required: true,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model<IBook>('Book', bookSchema);
