import * as AuthActions from './auth.actions';
import { WebAuth } from '../../interfaces/';

export type Action = AuthActions.All;


const defaultState: WebAuth = {
  firstName: '',
  lastName: '',
  rank: 0,
  token: '',
  isAuth: false
};


export function AuthReducer(state: WebAuth = defaultState, action: Action) {
  switch (action.type ) {
    case AuthActions.LOGIN_IN:
      return {
        firstName: action.payload.firstName,
        lastName: action.payload.lastName,
        rank: action.payload.rank,
        token: action.payload.token,
        isAuth: true
      };
    case AuthActions.LOG_OUT:
      return defaultState;
    default:
      return state;
  }
}
