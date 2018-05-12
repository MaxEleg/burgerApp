import { Action } from '@ngrx/store';
import { Meal } from '../../interfaces/index';

export const ADD_MEAL = 'ADD_MEAL';
export const REMOVE_MEAL = 'REMOVE_MEAL';

export class AddMeal implements Action {
  readonly type = ADD_MEAL;
  constructor(public payload: Meal) {}
}

export class RemoveMeal implements Action {
  readonly type = REMOVE_MEAL;
  constructor(public payload: number) {}
}

export type All = AddMeal | RemoveMeal;
