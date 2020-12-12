import React from 'react';
import { Form } from 'react-bootstrap';
const ItemsDropDown = ({ onChangeHandler, qty, product }) => {
  return (
    <Form.Control
      as='select'
      value={product.qty}
      onChange={(e) => onChangeHandler(e)}
    >
      {[...Array(product.countInStock).keys()].map((numValue) => (
        <option key={numValue + 1} value={numValue + 1}>
          {numValue + 1}
        </option>
      ))}
    </Form.Control>
  );
};

export default ItemsDropDown;
