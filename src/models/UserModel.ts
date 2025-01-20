import mongoose, { Schema, Document } from 'mongoose';

// Definimos la interfaz para el modelo
export interface IUser extends Document {
  name: string;
  email: string;
  password: string;
}

// Creamos el esquema para el usuario
const UserSchema: Schema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
  },
  { timestamps: true }
);

// Creamos y exportamos el modelo de usuario
const UserModel = mongoose.model<IUser>('User', UserSchema);

export default UserModel;
