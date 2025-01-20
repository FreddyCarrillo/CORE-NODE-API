import { body } from 'express-validator';

class UserValidator {
  static registerUser() {
    return [
      body('name')
        .notEmpty()
        .withMessage('El nombre es requerido')
        .isLength({ min: 3 })
        .withMessage('El nombre debe tener al menos 3 caracteres'),

      body('email')
        .isEmail()
        .withMessage('El correo electrónico es inválido')
        .normalizeEmail(),

      body('password')
        .notEmpty()
        .withMessage('La contraseña es requerida')
        .isLength({ min: 6 })
        .withMessage('La contraseña debe tener al menos 6 caracteres'),
    ];
  }
}

export default UserValidator;
