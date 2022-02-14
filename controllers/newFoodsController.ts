import { Request, Response } from 'express';
import Food from '../models/foodModel';
import asyncHandler from 'express-async-handler';

/*
  @method: GET
  @path: /api/newfoods
*/
const newFoodsController = asyncHandler(
  async (req: Request, res: Response): Promise<void> => {
    const foods = await Food.find({});
    const { skip } = req.query;
    let skipNum = Number(skip) * 6;

    if (foods.length < 6) {
      foods.reverse();
      res.status(200).json(foods);
    }
    if (skipNum > foods.length - 6) {
      skipNum = foods.length - 6;
    }
    const sixfoods = await Food.find({})
      .sort({ createdAt: -1 })
      .limit(6)
      .skip(skipNum);
    res.status(200).json(sixfoods);
  }
);

export default newFoodsController;
