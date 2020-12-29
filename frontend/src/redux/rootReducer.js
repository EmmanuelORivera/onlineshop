import { combineReducers } from 'redux';
import {
  productListReducer,
  productDetailsReducer,
} from './product/productReducers';
import { cartReducer } from './cart/cartReducers';
import { userLoginReducer, userRegisterReducer } from './user/userReducers';

const rootReducer = combineReducers({
  productList: productListReducer,
  productDetails: productDetailsReducer,
  cart: cartReducer,
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
});

export default rootReducer;
