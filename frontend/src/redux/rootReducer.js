import { combineReducers } from 'redux';
import {
  productListReducer,
  productDetailsReducer,
} from './product/productReducers';

const rootReducer = combineReducers({
  productList: productListReducer,
  productDetails: productDetailsReducer,
});

export default rootReducer;
