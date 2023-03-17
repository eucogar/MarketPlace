import {UserRegister} from '../models/UserRegister';
import {UserLogin} from '../models/UserLogin';
import {RegisterProduct} from '../models/RegisterProduct';

const APIS = 'http://192.168.1.170:4000/api/users/count';

export const LoadUser = async () => {
  const res = await fetch(APIS);
  const data = await res.json();
  console.log(data);
};

export const LoginUser = async (user: UserLogin) => {
  const res = await fetch('http://192.168.1.170:4000/api/users/login', {
    method: 'POST',
    headers: {Accept: 'application/json', 'Content-Type': 'application/json'},
    body: JSON.stringify(user),
  });
  return await res.json();
};

export const RegisterUser = async (user: UserRegister) => {
  console.log(user);
  const res = await fetch('http://192.168.1.170:4000/api/users', {
    method: 'POST',
    headers: {Accept: 'application/json', 'Content-Type': 'application/json'},
    body: JSON.stringify(user),
  });
  return await res.json();
};

//Products

export const RegisterPoduct = async (product: RegisterProduct) => {
  console.log(product);
  const res = await fetch('http://192.168.1.170:4000/api/products', {
    method: 'POST',
    headers: {Accept: 'application/json', 'Content-Type': 'application/json'},
    body: JSON.stringify(product),
  });
  return await res.json();
};

export const LaodProducts = async () => {
  const res = await fetch('http://192.168.1.170:4000/api/products');
  return await res.json();
};
