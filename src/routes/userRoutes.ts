import express from 'express';
import UserController from '../controllers/UserController';
import validateResult from '../middlewares/validateResult';
import UserValidator from '../validators/UserValidator';

const userRoutes = express.Router();

userRoutes.post('/register', 
  UserValidator.registerUser(),
  validateResult,
  UserController.register
);

export default userRoutes;
