"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const foodModel_1 = __importDefault(require("../models/foodModel"));
const express_async_handler_1 = __importDefault(require("express-async-handler"));
/*
  @method: GET
  @path: /api/newfoods
*/
const newFoodsController = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const foods = yield foodModel_1.default.find({});
    const { skip } = req.query;
    let skipNum = Number(skip) * 6;
    if (foods.length < 6) {
        foods.reverse();
        res.status(200).json(foods);
    }
    if (skipNum > foods.length - 6) {
        skipNum = foods.length - 6;
    }
    const sixfoods = yield foodModel_1.default.find({})
        .sort({ createdAt: -1 })
        .limit(6)
        .skip(skipNum);
    res.status(200).json(sixfoods);
}));
exports.default = newFoodsController;
