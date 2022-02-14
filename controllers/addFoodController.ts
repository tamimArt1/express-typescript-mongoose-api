import { Request, Response } from 'express';
import Food, { IFood } from '../models/foodModel';
import asyncHandler from 'express-async-handler';
import { HydratedDocument } from 'mongoose';

/*
  @method: POST
  @path: /api/newfood
*/
const addFoodController = asyncHandler(
  async (req: Request, res: Response): Promise<void> => {
    const newFood: HydratedDocument<IFood> = new Food(req.body);
    const dbResponse = await newFood.save();
    res.status(200).json(dbResponse);
  }
);

export default addFoodController;
