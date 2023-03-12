type AuthAction =
  | {type: 'signUp'; payload: {user: any}}
  | {type: 'addError'; payload: string}
  | {type: 'removeError'}
  | {type: 'no-auth'}
  | {type: 'logout'}
  | {type: 'loaded'};

const SignUp = 'signUp';
const AddError = 'addError';
const RemoveError = 'removeError';
const NoAuth = 'no-auth';
const Logout = 'logout';
const Loaded = 'loaded';

export interface AuthState {
  errorMessage: string;
  user: any;
  status: 'checking' | 'auth' | 'no-auth';
}

export const authReducer = (
  state: AuthState,
  action: AuthAction,
): AuthState => {
  switch (action.type) {
    case AddError:
      return {
        ...state,
        user: null,
        status: 'no-auth',
        errorMessage: action.payload,
      };
    case RemoveError:
      return {
        ...state,
        errorMessage: '',
      };
    case SignUp:
      return {
        ...state,
        errorMessage: '',
        status: 'auth',
        user: action.payload.user,
      };
    case Loaded:
      return {
        ...state,
        status: 'checking',
      };
    case Logout:
    case NoAuth:
      return {
        ...state,
        status: 'no-auth',
        user: null,
      };
    default:
      return state;
  }
};
