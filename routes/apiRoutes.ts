// ROUTER BASE PATH => '/api'

import express from 'express';
import newFoodsController from '../controllers/newFoodsController';
import singleFoodController from '../controllers/singleFoodController';
import allFoodsController from '../controllers/allFoodsController';
import addFoodController from '../controllers/addFoodController';
import deleteFoodController from '../controllers/deleteFoodController';
import updateFoodControllers from '../controllers/updateFoodControllers';

// INIT ROUTER
const apiRouter = express.Router();

// @GET
apiRouter.get('/newfoods', newFoodsController);
apiRouter.get('/food/:id', singleFoodController);
apiRouter.get('/foods', allFoodsController);

// @POST
apiRouter.post('/newfood', addFoodController);

// @DELETE
apiRouter.delete('/food/:id', deleteFoodController);

// @PUT
apiRouter.put('/food/:id', updateFoodControllers);

export default apiRouter;
