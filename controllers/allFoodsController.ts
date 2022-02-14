import { Request, Response } from 'express';
import Food from '../models/foodModel';
import asyncHandler from 'express-async-handler';

/*
  @method: GET
  @path: /api/foods
*/
const allFoodsController = asyncHandler(
  async (req: Request, res: Response): Promise<void> => {
    const allFoods = await Food.find({});
    res.status(200).json(allFoods);
  }
);

export default allFoodsController;
