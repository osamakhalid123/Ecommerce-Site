import { useDispatch, useSelector } from 'react-redux';

import React from 'react'
import { cart } from '../ReduxSlice/ProductsSlice';
import styled from "styled-components";
import { useParams } from 'react-router-dom';

function ProductDetails() {
    const {productId} = useParams()
 const  item  = useSelector((state) => state.products.items);
 const thisProduct = item.find(prod => {return prod.id == productId} )
 const dispatch = useDispatch();

  return (
    <Container>
        <div>
        <Image src={thisProduct.image} alt="#" /> 
        </div>
       <RightSection>
           <Category>
           {thisProduct.category}
           </Category>

           <Title>
           {thisProduct.title}
           </Title>
           <Description>
           {thisProduct.description}
           </Description>
           <Price>
           ${ thisProduct.price}

           </Price>
           <AddBtn  onClick={() => {
            dispatch(cart(thisProduct));
          }}>
               Add To Cart
           </AddBtn>


       </RightSection>

    </Container>
  )
}

export default ProductDetails


const Container=styled.div`
display: grid;
grid-template-columns: repeat(2, 1fr);
align-items: center;
justify-content: center;
margin: 7rem;
`
const RightSection=styled.div`
    text-align: left;
height: auto;
`
const Image=styled.img`
      width: 70%;
  height: 60%;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.6);
  padding: 15px;
  &:hover {

      transform: scale(1.1);
  }

`
const Category=styled.h1`
margin-bottom: 20px;
font-size: 40px;
text-transform: uppercase;
    
`
const Title=styled.p`
margin-bottom: 20px;
font-size: 25px;
color:rgb(86,89,89);

    
`
const Description=styled.p`
font-size: 15px;
margin-bottom: 20px;

    
`
const Price=styled.p`
font-size: 20px;
margin-bottom: 20px;
font-weight: bold;
   
`



const AddBtn=styled.button`
 margin: 0 auto;
  background-color: black;
  border: none;
  border-radius: 3px;
  padding: 5px;
  color: white;
  cursor: pointer;
  font-size: 20px;
   
`
