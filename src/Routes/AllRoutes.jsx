import React from 'react'
import { Route,Routes } from "react-router-dom";
import Login from "../Pages/Login";
import SignUp from "../Pages/SignUp";
import Products from "../Pages/Products/Products"
import Home1 from "../Pages/Home1"
import ProductDetail from "../Pages/ProductDetail/ProductDetail"
import Cart from "../Components/cart/Cart"
import Payment from "../Pages/Payment/Payment"
import Account from '../Pages/YourAccount/Account';
import WishList from '../Pages/WishList/WishList';
const AllRoutes = () => {
  return (
    <Routes>
     <Route path="/" element={<Home1/>} />
      <Route path="/products" element={<Products/>} />
      <Route path="/products/:id" element={<ProductDetail/>} />
      <Route path="/login" element={<Login />}></Route>
      <Route path="/signUp" element={<SignUp />}></Route>
      <Route path='/cart' element={<Cart/>} />
      <Route path='/checkout' element={<Payment/>} />
      <Route path='/account' element={<Account/>}>
        <Route path='wishlist' element={<WishList/>} />
        <Route path='*' element={'Not found'} />
      </Route>
    </Routes>
  )
}

export default AllRoutes








