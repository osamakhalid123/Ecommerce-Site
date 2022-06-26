import { ShowProducts, filters } from "../ReduxSlice/ProductsSlice";

import React from 'react'
import styled from "styled-components";
import { useDispatch } from 'react-redux';

function FilterButtons() {
  const dispatch = useDispatch();

  return (

    // ["electronics","jewelery","men's clothing","women's clothing"]
    <Wraper>
       <All onClick={() =>{
        dispatch(ShowProducts())
      }}>Show All</All>
      <Electronics onClick={() =>{
        dispatch(filters("electronics"))
      }}>Electronics</Electronics>
        <Jewelery onClick={() =>{
        dispatch(filters("jewelery"))
      }}>Jewelery</Jewelery>
        <Mens onClick={() =>{
        dispatch(filters("men's clothing"))
      }}>Men's clothing</Mens>
        <Womens onClick={() =>{
        dispatch(filters("women's clothing"))
      }}>Women's clothing</Womens>
    </Wraper>
  )
}

export default FilterButtons

const Wraper = styled.div`

  display:flex ;
  text-align:center ;
  justify-content:center ;
`
const All= styled.button` margin: 0 auto;
background-color: black;
border: none;
border-radius: 3px;
padding: 5px 10px;
color: white;
margin: 30px 10px 5px;
cursor: pointer;
`
const Electronics= styled(All)``;
const Jewelery= styled(All)``;
const Mens= styled(All)``;
const Womens= styled(All)``;