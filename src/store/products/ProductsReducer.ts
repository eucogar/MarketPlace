import {RegisterProduct} from '../../models/RegisterProduct';

type ProductsReducer =
  | {type: 'addProducts'; payload: {proudct: RegisterProduct}}
  | {type: 'editProducts'; payload: {proudct: RegisterProduct}}
  | {type: 'deletetProducts'; payload: number}
  | {type: 'Products'; payload: {proudcts: RegisterProduct[]}};

export interface ProductState {
  proudcts: RegisterProduct[];
}
