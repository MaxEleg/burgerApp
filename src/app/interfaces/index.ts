export interface Meal {
  _id: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
  stock: number;
}

export interface WebAuth {
  isAuth: boolean;
  firstName: string;
  lastName: string;
  token: string;
}

export interface AppState {
  cart: Meal[];
  auth: WebAuth;
}
