import { Action } from '@ngrx/store';
import { Meal } from '../interfaces/meal';


const defaultMeal: Meal = {
  _id: '',
  name: '',
  price: 0,
  image: '',
  quantity: 0,
  stock: 0
};

export function MealStoreReducer(state: Meal = defaultMeal, action: Action) {

  switch (action.type ) {
    case 'ADD':

    case 'REMOVE':

    default:
      return state;
  }
}
