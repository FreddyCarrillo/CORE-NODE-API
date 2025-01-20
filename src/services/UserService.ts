import bcrypt from 'bcryptjs';
import UserModel, { IUser } from '../models/UserModel';

class UserService {

  static async registerUser(name: string, email: string, password: string): Promise<IUser> {

    const existingUser = await UserModel.findOne({ email });
    if (existingUser) {
      throw new Error('El correo ya está registrado');
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new UserModel({
      name,
      email,
      password: hashedPassword,
    });

    await newUser.save();
    return newUser;
  }
}

export default UserService;
