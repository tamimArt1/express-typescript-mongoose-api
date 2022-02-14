import { Request, Response } from 'express';
import Food from '../models/foodModel';
import asyncHandler from 'express-async-handler';

/*
  @method: DELETE
  @path: /api/food/:id
*/
const deleteFoodController = asyncHandler(
  async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;
    const dbResponse = await Food.findByIdAndDelete(id);
    res.status(200).json(dbResponse);
  }
);

export default deleteFoodController;
