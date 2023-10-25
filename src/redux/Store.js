import {combineReducers, configureStore} from '@reduxjs/toolkit';
import AuthReducer from './reducers/AuthReducer';
import ProductReducer from './reducers/ProductReducer';
import CartReducer from './reducers/CartReducer';

const reducers = combineReducers({
  Auth: AuthReducer,
  product: ProductReducer,
  Cart: CartReducer,
});

export const store = configureStore({
  reducer: reducers,
});
