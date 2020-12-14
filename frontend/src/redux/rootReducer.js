import { combineReducers } from 'redux';
import {
  productListReducer,
  productDetailsReducer,
} from './product/productReducers';
import { cartReducer } from './cart/cartReducers';
import { userLoginReducer } from './user/userReducers';

const rootReducer = combineReducers({
  productList: productListReducer,
  productDetails: productDetailsReducer,
  cart: cartReducer,
  userLogin: userLoginReducer,
});

export default rootReducer;
