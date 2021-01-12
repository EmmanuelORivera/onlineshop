export const getInitialState = () => {
  const cartItemsFromStorage = localStorage.getItem('cartItems')
    ? JSON.parse(localStorage.getItem('cartItems'))
    : [];

  const userInfoFromStorage = localStorage.getItem('userInfo')
    ? JSON.parse(localStorage.getItem('userInfo'))
    : null;

  const shippingAddresFromStorage = localStorage.getItem('shippingAddress')
    ? JSON.parse(localStorage.getItem('shippingAddress'))
    : {};

  const initialState = {
    cart: {
      cartItems: cartItemsFromStorage,
      shippingAddress: shippingAddresFromStorage,
    },
    userLogin: { userInfo: userInfoFromStorage },
  };

  return initialState;
};
