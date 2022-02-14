import { Request, Response } from 'express';
import Food from '../models/foodModel';
import asyncHandler from 'express-async-handler';

/*
  @method: GET
  @path: /api/food/:id
*/
const singleFoodController = asyncHandler(
  async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;
    const food = await Food.findById(id);
    res.status(200).json(food);
  }
);

export default singleFoodController;
