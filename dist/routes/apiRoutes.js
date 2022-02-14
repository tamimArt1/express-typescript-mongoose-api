"use strict";
// ROUTER BASE PATH => '/api'
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const newFoodsController_1 = __importDefault(require("../controllers/newFoodsController"));
const singleFoodController_1 = __importDefault(require("../controllers/singleFoodController"));
const allFoodsController_1 = __importDefault(require("../controllers/allFoodsController"));
const addFoodController_1 = __importDefault(require("../controllers/addFoodController"));
const deleteFoodController_1 = __importDefault(require("../controllers/deleteFoodController"));
const updateFoodControllers_1 = __importDefault(require("../controllers/updateFoodControllers"));
// INIT ROUTER
const apiRouter = express_1.default.Router();
// @GET
apiRouter.get('/newfoods', newFoodsController_1.default);
apiRouter.get('/food/:id', singleFoodController_1.default);
apiRouter.get('/foods', allFoodsController_1.default);
// @POST
apiRouter.post('/newfood', addFoodController_1.default);
// @DELETE
apiRouter.delete('/food/:id', deleteFoodController_1.default);
// @PUT
apiRouter.put('/food/:id', updateFoodControllers_1.default);
exports.default = apiRouter;
