import * as Yup from 'yup';
import { RegisterModel } from '../models/RegisterModel';

const { fields } = RegisterModel;

export const RegisterSchema = Yup.object().shape({
  email: Yup.string()
    .email(fields.email.invaliErrorMessage)
    .required(fields.email.requiredErrorMessage),
  name:Yup.string()
    .min(3,fields.email.invaliErrorMessage)
    .required(fields.email.requiredErrorMessage),
  password: Yup.string()
    .min(6, fields.password.password_invalid_length)
    .required(fields.password.requiredErrorMessage),
  confirm_password: Yup.string()
    .required(fields.confirm_password.requiredErrorMessage)
    .oneOf([Yup.ref('password')], fields.confirm_password.invaliErrorMessage),
  role: Yup.string().required(fields.role.requiredErrorMessage),
  address:Yup.string()
  .min(3,fields.address.invaliErrorMessage)
  .required(fields.address.requiredErrorMessage),
});
