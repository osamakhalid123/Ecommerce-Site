import { React, useEffect } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import CartPage from "./Components/CartPage";
import FilterButtons from "./Components/FilterButtons";
import MenuBar from "./Components/NavBar";
import ProductDetails from "./Components/ProductDetails";
import Products from "./Components/Products";
import { ProductsFetch } from "./ReduxSlice/ProductsSlice";
import styled from "styled-components";
import { useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(ProductsFetch());
  }, [dispatch]);

  return (
    <Router>
      <Container>
        <MenuBar />
        <FilterButtons/>
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/products/Cart" element={<CartPage />} />
          <Route path="/products/:productId" element={<ProductDetails />} />
        </Routes>
      </Container>
    </Router>
  );
}

const Container = styled.div`
  width: 90vw;
  align-items: center;
  text-align: center;
  justify-content: center;
  margin: 0 auto;
`;


export default App;
