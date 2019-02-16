// @flow
import React from 'react';
import { withTheme } from 'styled-components';
import {
  CartWrapper,
  Message,
} from '../../styles';

type Props = {
  theme: {
    colours: {
      red: string,
    },
  },
};

const Cart = ({ theme }: Props) => (
  <CartWrapper>
    <Message colour={theme.colours.red}>
      Shopping cart
    </Message>
  </CartWrapper>
);


// TODO fix warning when react-router 4.4 will be available
// Invalid prop `component` of type `object` supplied to `Route`, expected `function`.
export default withTheme(Cart);
