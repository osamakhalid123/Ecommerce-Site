import {
  ClearCart,
  Removeitem,
  ShowProducts,
  decrease,
  getTotals,
  increase,
} from "../ReduxSlice/ProductsSlice";
import { React, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import AddIcon from "@mui/icons-material/Add";
import { Link } from "react-router-dom";
import RemoveIcon from "@mui/icons-material/Remove";
import styled from "styled-components";

function CartPage() {
  const { cart, cartTotalAmount, cartTotalQuantity } = useSelector(
    (state) => state.products
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTotals());
  }, [cart, dispatch]);

  return (
    <div>
       <Link to='/'> 
       <HomeButton onClick={() =>dispatch(ShowProducts())}> {"<--"} Back To Home</HomeButton>
       </Link>

       <ClearButton onClick={() =>dispatch(ClearCart())}> Clear Cart</ClearButton>

      <Totals>
        <p>Total Amount: ${cartTotalAmount}</p>
        <p>total Quantity={cartTotalQuantity}</p>
      </Totals>
      <TopLabels>
        <p>Product</p>
        <p>Name</p>
        <p>Quantuity</p>
        <p>price</p>
      </TopLabels>
      <CartItemsWraper>
        {cart.map((cart) => (
          <Wrap key={cart.id}>
            <Image src={cart.image} alt="#" />
            <Titel>{cart.title}</Titel>

            <div>
              <DecreaseBtn
                onClick={() => {
                  dispatch(decrease(cart));
                }}
              >
                <RemoveIcon />
              </DecreaseBtn>

              <Quantuity>{cart.cartQuantuity}</Quantuity>
              <IncreaseBtn
                onClick={() => {
                  dispatch(increase(cart));
                }}
              >
                <AddIcon />
              </IncreaseBtn>
            </div>
            <Price>${cart.price}</Price>
            <RemoveBtn
              onClick={() => {
                dispatch(Removeitem(cart.id));
              }}
            >
              Remove
            </RemoveBtn>
          </Wrap>
        ))}
      </CartItemsWraper>
    </div>
  );
}



export default CartPage;


const HomeButton=styled.button`
    background-color: transparent;
    border: none;
    position: relative;
right:40%;
font-size: 20px;
font-weight:bold;
cursor: pointer;
    
`

const DecreaseBtn = styled.button`
  margin: 0 auto;
  background-color: black;
  border: none;
  border-radius: 3px;
  padding: 5px;
  color: white;
  margin: 5px;
  cursor: pointer;
`;

const IncreaseBtn = styled(DecreaseBtn)``;

const RemoveBtn = styled(DecreaseBtn)`
  border-radius: 10px;
  padding: 10px 25px;
  margin: 0 auto;
`;


const ClearButton = styled(DecreaseBtn)`
    position: relative;
left:40%;
`;

const Quantuity = styled.span`
  margin: 5px;
  font-size: 20px;
`;
const Totals = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin: 2rem;
  p {
    text-transform: capitalize;
    font-size: 1.5rem;
    font-weight: bold;
    background-color: black;
    color: white;
    border-radius: 5px;
    padding: 10px;
  }
`;

const CartItemsWraper = styled.div``;
const TopLabels = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  margin-bottom: 1.5rem;
  p {
    text-transform: UpperCase;
    font-size: 1.4rem;
    font-weight: bold;
  }
`;
const Wrap = styled.div`
  align-items: center;
  text-align: center;
  justify-content: center;
  margin-bottom: 20px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  height: 100px;

`;
const Price = styled.p`
  margin: 0 auto;
  font-size: 22px;
`;
const Titel = styled.h1`
  font-size: 15px;
  font-weight: bold;
  margin: 0 auto;
`;

const Image = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  justify-content: flex-start;
  align-items: flex-start;
  margin: 0 auto;
`;
