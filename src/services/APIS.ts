import {UserRegister} from '../models/UserRegister';
import {UserLogin} from '../models/UserLogin';
import {RegisterProduct} from '../models/RegisterProduct';

const url = 'https://placemarket.herokuapp.com/api/';

export const LoginUser = async (user: UserLogin) => {
  const res = await fetch(`${url}users/login`, {
    method: 'POST',
    headers: {Accept: 'application/json', 'Content-Type': 'application/json'},
    body: JSON.stringify(user),
  });
  if (res.status === 401) {
    throw new Error('Credenciales incorrectas');
  } else {
    return await res.json();
  }
};

export const RegisterUser = async (user: UserRegister) => {
  const res = await fetch(`${url}users`, {
    method: 'POST',
    headers: {Accept: 'application/json', 'Content-Type': 'application/json'},
    body: JSON.stringify(user),
  });
  if (res.status === 403) {
    throw new Error('El correo se encuentra en uso');
  } else {
    return await res.json();
  }
};

export const ModificarUser = async (user: UserRegister) => {
  console.log(user);
  const res = await fetch(`${url}users/updata`, {
    method: 'PUT',
    headers: {Accept: 'application/json', 'Content-Type': 'application/json'},
    body: JSON.stringify(user),
  });
  if (res.status === 200) {
    return await res.json();
  } else {
    return await res.json();
  }
};
export const User = async (email: string) => {
  const res = await fetch(`${url}getuser`, {
    method: 'POST',
    headers: {Accept: 'application/json', 'Content-Type': 'application/json'},
    body: JSON.stringify({email: email}),
  });
  return await res.json();
};

//Products

export const ModificarProduct = async (producto: RegisterProduct) => {
  console.log(producto);
  const res = await fetch(`${url}products/updata`, {
    method: 'PUT',
    headers: {Accept: 'application/json', 'Content-Type': 'application/json'},
    body: JSON.stringify(producto),
  });
  return await res.json();
};
export const Eliminar = async (id: number) => {
  console.log(id);
  const res = await fetch(`${url}products/${id}`, {
    method: 'DELETE',
    headers: {Accept: 'application/json', 'Content-Type': 'application/json'},
  });
  if (res.status === 204) {
    return 'Producto Eliminado';
  } else {
    return await res.json();
  }
};

export const MyProducts = async (email: string) => {
  const res = await fetch(`${url}myproducts`, {
    method: 'POST',
    headers: {Accept: 'application/json', 'Content-Type': 'application/json'},
    body: JSON.stringify({user: email}),
  });
  return await res.json();
};

export const RegisterPoduct = async (product: RegisterProduct) => {
  const res = await fetch(`${url}products`, {
    method: 'POST',
    headers: {Accept: 'application/json', 'Content-Type': 'application/json'},
    body: JSON.stringify(product),
  });
  if (res.status === 200) {
    return 'Producto Publicado';
  } else {
    return await res.json();
  }
};

export const LaodProducts = async () => {
  const res = await fetch(`${url}products`);
  return await res.json();
};

export const AddFavorite = async (email: string, id: number) => {
  const res = await fetch(`${url}products/favorite`, {
    method: 'POST',
    headers: {Accept: 'application/json', 'Content-Type': 'application/json'},
    body: JSON.stringify({user: email, id: id}),
  });
  if (res.status === 200) {
    return 'Producto Agregado';
  } else {
    return await res.json();
  }
};
export const DeleteProduct = async (id: number) => {
  console.log(id);
  const res = await fetch(`${url}products/deletefavorite/${id}`, {
    method: 'DELETE',
    headers: {Accept: 'application/json', 'Content-Type': 'application/json'},
  });
  if (res.status === 204) {
    return 'Producto Eliminado De favoritos';
  } else {
    return await res.json();
  }
};

export const MyFavorite = async (email: string) => {
  const res = await fetch(`${url}product/favorite`, {
    method: 'POST',
    headers: {Accept: 'application/json', 'Content-Type': 'application/json'},
    body: JSON.stringify({user: email}),
  });
  return await res.json();
};

export const NewPass = async (email: string, password: string) => {
  const res = await fetch(`${url}users/newpass`, {
    method: 'PUT',
    headers: {Accept: 'application/json', 'Content-Type': 'application/json'},
    body: JSON.stringify({email: email, password: password}),
  });
  console.log(res);
  if (res.status === 200) {
    return 'Contraseña actualizada';
  } else {
    return await res.json();
  }
};
