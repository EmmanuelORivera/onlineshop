import React from 'react';
import { Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const NavigationItem = ({ step, route, text }) => {
  return (
    <Nav.Item>
      {step ? (
        <LinkContainer to={route}>
          <Nav.Link>{text}</Nav.Link>
        </LinkContainer>
      ) : (
        <Nav.Link disabled>{text}</Nav.Link>
      )}
    </Nav.Item>
  );
};
const CheckoutSteps = ({ step1, step2, step3, step4 }) => {
  return (
    <Nav className='justify-content-center mb-4'>
      <NavigationItem step={step1} route='/login' text='Sign In' />
      <NavigationItem step={step2} route='/shipping' text='Shipping' />
      <NavigationItem step={step3} route='/payment' text='Payment' />
      <NavigationItem step={step4} route='/placeorder' text='Place Order' />
    </Nav>
  );
};

export default CheckoutSteps;
