import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import axios from 'axios'

export const ProductsFetch = createAsyncThunk(
    'products',
    async() => {
        
        const response = await axios.get('https://fakestoreapi.com/products')
        return response.data
    }
)


const initialState = {
    items: [],
    cart: localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : [],
    cartTotalQuantity: 0,
    cartTotalAmount: 0,
    filterd:[],
    status:null,
};

const ProductsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {

        ShowProducts:(state, action)=>{
           state.filterd=state.items
        },

        filters:(state, action) => {
                state.filterd=state.items.filter(item => 
                    item.category === action.payload)
        
        },

        // add_to_cart
        cart: (state, action) => {
            const itemIndex = state.cart.findIndex((item) =>
                item.id === action.payload.id

            )
            if (itemIndex >= 0) {
                state.cart[itemIndex].cartQuantuity += 1

            } else {
                const Product = {...action.payload,
                    cartQuantuity: 1
                }

                state.cart.push(Product)
            }

            localStorage.setItem('cartItems', JSON.stringify(state.cart))


        },

        decrease: (state, action) => {
            const itemIndex = state.cart.findIndex((item) =>

                item.id === action.payload.id

            )


            if (state.cart[itemIndex].cartQuantuity > 1) {

                state.cart[itemIndex].cartQuantuity -= 1
                localStorage.setItem('cartItems', JSON.stringify(state.cart))


            } else if (state.cart[itemIndex].cartQuantuity === 1) {
                state.cart = state.cart.filter((item) =>
                    item.id !== action.payload.id
                )
                localStorage.setItem('cartItems', JSON.stringify(state.cart))


            }
        },
        increase: (state, action) => {
            const itemIndex = state.cart.findIndex((item) =>
                item.id === action.payload.id)
            if (state.cart[itemIndex].cartQuantuity >= 1) {

                state.cart[itemIndex].cartQuantuity += 1
                localStorage.setItem('cartItems', JSON.stringify(state.cart))

            }


        },

        Removeitem: (state, action) => {
            state.cart = state.cart.filter((item) =>
                item.id !== action.payload
            )

            localStorage.setItem('cartItems', JSON.stringify(state.cart))



        },
        ClearCart:(state, action)=>{
            state.cart=[];
            localStorage.setItem('cartItems', JSON.stringify([]))
        },

        getTotals(state, action) {
            let { total, quantity } = state.cart.reduce(
                (cartTotal, cartItem) => {
                    const { price, cartQuantuity } = cartItem;
                    const itemTotal = price * cartQuantuity;

                    cartTotal.total += itemTotal;
                    cartTotal.quantity += cartQuantuity;

                    return cartTotal;
                }, {
                    total: 0,
                    quantity: 0,
                }
            );
            total = parseFloat(total.toFixed(2));
            state.cartTotalQuantity = quantity;
            state.cartTotalAmount = total;
        }

    },
    extraReducers: {

        [ProductsFetch.pending]: (state, action) => {
            state.status = true;
        },
        [ProductsFetch.fulfilled]: (state, action) => {
            state.status = false;
            state.items = action.payload;
            state.filterd= action.payload
        },

        [ProductsFetch.rejected]: (state, action) => {
            state.status = false;
        }



    }
});


export const { cart, Removeitem, decrease, increase, getTotals,filters,ShowProducts,ClearCart } = ProductsSlice.actions;

export default ProductsSlice;