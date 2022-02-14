import mongoose from 'mongoose';

export interface IFood {
  price: Number;
  name: String;
  description: String;
}

const foodSchema = new mongoose.Schema<IFood>(
  {
    price: {
      type: Number,
      required: [true, 'Please provide the price'],
    },
    name: {
      type: String,
      required: [true, 'Please provide the name'],
    },
    description: {
      type: String,
      required: [true, 'Please provide the description'],
    },
  },
  { timestamps: true }
);

const Food = mongoose.model<IFood>('Food', foodSchema);

export default Food;
