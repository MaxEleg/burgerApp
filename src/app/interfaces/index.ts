export interface Meal {
  _id: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
  description: string;
  stock: number;
}

export interface WebAuth {
  firstName: string;
  lastName: string;
  rank: number;
  token: string;
  isAuth: boolean;
}

export interface AppState {
  cart: Meal[];
  auth: WebAuth;
}

export interface User {
  firstName: string;
  lastName: string;
  username: string;
  mail: string;
  address: string;
  password: string;
  birthDate: any;
}
