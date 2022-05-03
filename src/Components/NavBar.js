import "../index.css";
import "../App.css";

import { useDispatch, useSelector } from "react-redux";

import { Link } from "react-router-dom";
import React from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { ShowProducts } from "../ReduxSlice/ProductsSlice";
import styled from "styled-components";

function MenuBar() {
  const cart = useSelector((state) => state.products.cart);
  const dispatch = useDispatch();

  return (
    <Container>
      
      <Link to='/'>  
      <Logo onClick={() =>dispatch(ShowProducts())}> BESTBUY </Logo>
      </Link>

        <Link to='/products/Cart'>
        <Cart>
          <CartIcon className="cartIcon" />
          <ItemsNumber> {cart.length} </ItemsNumber>

        </Cart>
        </Link>
    </Container>
  );
}

export default MenuBar;

const ItemsNumber = styled.span`
  position: relative;
  font-weight: bold;
  font-size: 18px;
  width: 5px;
  height: 6px;
  right: 57px;
  bottom: 22px;
  color: black;
  margin: 0 auto;
  border-radius: 50%;
  padding: 1px;
  justify-content: center;
  align-items: center;
  justify-content: center;
`;

const CartIcon = styled(ShoppingCartIcon)`
  color: #b4b8bb;
  margin-right: 2.3rem;
  &:hover {
    color: black;
    cursor: pointer;
  }
`;


const Cart = styled.div`

`;



const Container = styled.div`
  width:100%;
  height: 70px;
  display: flex;
  align-items: center;
  border-bottom: 2px solid black;
  justify-content: space-between;
  position:sticky;
  top:0;
  z-index: 2;
  background-color:white
`;

const Logo = styled.button`
  padding: 15px;
  width: 15rem;
  letter-spacing: 6px;
  color: black;
  background-color:transparent;
  border: none;
  font-size: 25px;
  font-weight:bold;
  cursor: pointer;
`;



  
