import { Request, Response } from 'express';
import Food from '../models/foodModel';
import asyncHandler from 'express-async-handler';

/*
  @method: PUT
  @path: /api/food/:id
*/
const updateFoodControllers = asyncHandler(
  async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;
    const edited = req.body;
    const editedFood = await Food.findByIdAndUpdate(id, edited);
    res.status(200).json(editedFood);
  }
);

export default updateFoodControllers;
