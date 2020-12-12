import axios from 'axios';
import { CART_ADD_ITEM, CART_REMOVE_ITEM } from './cartTypes';

const cartAddItem = (data, qty) => ({
  type: CART_ADD_ITEM,
  payload: {
    product: data._id,
    name: data.name,
    image: data.image,
    price: data.price,
    countInStock: data.countInStock,
    qty,
  },
});

const cartRemoveItem = (id) => ({ type: CART_REMOVE_ITEM, payload: id });

export const addToCart = (id, qty) => async (dispatch, getState) => {
  try {
    const { data } = await axios.get(`/api/products/${id}`);
    dispatch(cartAddItem(data, qty));

    localStorage.setItem(
      'cartItems',
      JSON.stringify(getState().cart.cartItems)
    );
  } catch (err) {
    console.error(err);
  }
};

export const removeFromCart = (id) => (dispatch, getState) => {
  dispatch(cartRemoveItem(id));
  localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
};
