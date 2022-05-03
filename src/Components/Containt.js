import { Link } from "react-router-dom";
import React from "react";
import { cart } from "../ReduxSlice/ProductsSlice";
import styled from "styled-components";

function Containt({ title, img, price,id, dispatch, item }) {
  return (
    <Container>
    <Link to={`/products/ ${id}`} >
      <Image src={img} alt="#" />
   </Link>
      <Titel> {title} </Titel> 
        <Price> $ {price} </Price>
        <Button
          onClick={() => {
            dispatch(cart(item));
          }}
        >
          Add To Cart
        </Button>
    </Container>
  
  );
}

export default Containt;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  position: relative;
  /* box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.6); */
  padding: 20px;
  border: 1px solid gray;
  align-items:center;
  margin: 0 auto;
  text-align:center;
  justify-content: center;

  /* &:hover {
    &::after {
      content: "";
      display: block;
      position: absolute;
      background-color: #f9f9f9;
      width: 350px;
      height: 150px;
      bottom: 10px;
      bottom: -40px;
      left: 80px;
      z-index: 2;
    }
  } */
`;

const Image = styled.img`
  width: 150px;
  height: 130px;
  margin-bottom: 10px;
`;
const Titel = styled.h1`
  font-size: 18px;
  margin-bottom: 10px;
  width: 200px;
  height: 100px;
`;


const Price = styled.p`
  margin-right: 10px;
  font-size: 20px;
  font-weight: bolder;
  margin-bottom:10px;


`;

const Button = styled.button`
  background-color: black;
border: none;
border-radius: 3px;
padding: 5px 10px;
color: white;
margin: 5px;
cursor: pointer;
margin-top:auto;
`;
