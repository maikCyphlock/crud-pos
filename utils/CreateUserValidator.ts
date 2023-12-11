// userValidator.js
import { body } from "express-validator";

export const validateCreateUser = () => [
  body("name").exists().isString(),
  body("email").exists().isEmail(),
  body("password").exists().isString(),

];
