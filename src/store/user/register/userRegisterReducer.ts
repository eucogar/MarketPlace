import {UserRegister} from '../../../models/UserRegister';
import {ActionsRegister, concatData, validForm} from './actionsRegister';

interface State {
  user: UserRegister;
  step: number;
  valid: boolean;
}

export const InitialState: State = {
  user: {} as UserRegister,
  step: 0,
  valid: false,
};

export const RegisterReducer = (
  state: State = InitialState,
  actions: ActionsRegister,
): State => {
  switch (actions.type) {
    case concatData: {
      return {...state, step: actions.payload.step, user: actions.payload.user};
    }
    case validForm: {
      return {...state, valid: true};
    }
    default: {
      return state;
    }
  }
};
