import { Request, Response } from 'express';
import UserService from '../services/UserService';

class UserController {
  static async register(req: Request, res: Response): Promise<void> {
    try {
      const { name, email, password } = req.body;

      const newUser = await UserService.registerUser(name, email, password);

      res.status(201).json({
        message: 'Usuario registrado con éxito',
        user: {
          id: newUser._id,
          name: newUser.name,
          email: newUser.email,
        },
      });
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  }
}

export default UserController;
