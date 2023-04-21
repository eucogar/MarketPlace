import {UserRegister} from '../models/UserRegister';
import {UserLogin} from '../models/UserLogin';
import {RegisterProduct} from '../models/RegisterProduct';

const APIS = 'http://192.168.1.170:4000/api/';

export const LoginUser = async (user: UserLogin) => {
  const res = await fetch(`${APIS}users/login`, {
    method: 'POST',
    headers: {Accept: 'application/json', 'Content-Type': 'application/json'},
    body: JSON.stringify(user),
  });
  return await res.json();
};

export const RegisterUser = async (user: UserRegister) => {
  const res = await fetch(`${APIS}users`, {
    method: 'POST',
    headers: {Accept: 'application/json', 'Content-Type': 'application/json'},
    body: JSON.stringify(user),
  });
  return await res.json();
};

export const ModificarUser = async (user: UserRegister) => {
  console.log(user);
  const res = await fetch(`${APIS}users/updata`, {
    method: 'PUT',
    headers: {Accept: 'application/json', 'Content-Type': 'application/json'},
    body: JSON.stringify(user),
  });
  return await res.json();
};
export const User = async (email: string) => {
  const res = await fetch(`${APIS}getuser`, {
    method: 'POST',
    headers: {Accept: 'application/json', 'Content-Type': 'application/json'},
    body: JSON.stringify({email: email}),
  });
  return await res.json();
};

//Products

export const ModificarProduct = async (producto: RegisterProduct) => {
  console.log(producto);
  const res = await fetch(`${APIS}products/updata`, {
    method: 'PUT',
    headers: {Accept: 'application/json', 'Content-Type': 'application/json'},
    body: JSON.stringify(producto),
  });
  return await res.json();
};
export const Eliminar = async (id: number) => {
  console.log(id);
  const res = await fetch(`${APIS}products/${id}`, {
    method: 'DELETE',
    headers: {Accept: 'application/json', 'Content-Type': 'application/json'},
  });
  return await res.json();
};

export const MyProducts = async (email: string) => {
  const res = await fetch(`${APIS}myproducts`, {
    method: 'POST',
    headers: {Accept: 'application/json', 'Content-Type': 'application/json'},
    body: JSON.stringify({user: email}),
  });
  return await res.json();
};

export const RegisterPoduct = async (product: RegisterProduct) => {
  const res = await fetch(`${APIS}products`, {
    method: 'POST',
    headers: {Accept: 'application/json', 'Content-Type': 'application/json'},
    body: JSON.stringify(product),
  });
  return await res.json();
};

export const LaodProducts = async () => {
  const res = await fetch(`${APIS}products`);
  return await res.json();
};
