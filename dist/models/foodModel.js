"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const foodSchema = new mongoose_1.default.Schema({
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
}, { timestamps: true });
const Food = mongoose_1.default.model('Food', foodSchema);
exports.default = Food;
