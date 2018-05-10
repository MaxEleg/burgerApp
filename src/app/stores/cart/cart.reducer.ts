import { Meal } from '../../interfaces/index';
import * as MealActions from './cart.actions';

export type Action = MealActions.All;

const newState = (state, newData) => {
  return Object.assign({}, state, newData);
};

export function CartReducer(state: Meal[] = [], action: Action) {
  console.log(state);
  switch (action.type ) {
    case MealActions.ADD_MEAL:
      return [ ...state, action.payload];
    case MealActions.REMOVE_MEAL:
      return state.filter(meal => meal._id !== action.payload._id);
    default:
      return state;
  }
}
