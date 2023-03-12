import Api from './APIS';
import {UserLogin} from '../models/UserLogin';
import {UserRegister} from '../models/UserRegister';

export const Loginuser = async (user: UserLogin) => {
  const result = await Api.apiRestPost('/login', user);
  console.log(result);
  return result;
};

export const RegisterUser = async (user: UserRegister) => {
  try {
    const result = await Api.apiRestPost('users', user);
    console.log(user);
    console.log(result);
    return result;
  } catch (error) {
    console.log(error);
  }
};

export const users = async () => {
  try {
    const result = await Api.apiRestGet('count', {});
    console.log(result);
    return result;
  } catch (error) {
    console.log(error);
  }
};
