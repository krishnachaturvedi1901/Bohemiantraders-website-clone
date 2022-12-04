import React from 'react'
import { Route,Routes } from "react-router-dom";
import Login from "../Pages/Login";
import Home from "../Pages/Home";
import SignUp from "../Pages/SignUp";
import Products from "../Pages/Products/Products"
import Home from "../Pages/Home"
import ProductDetailFake from '../Pages/ProductDetailFake';

const AllRoutes = () => {
  return (
    <Routes>
     <Route path="/" element={<Home/>} />
      <Route path="/products" element={<Products/>} />
      <Route path="/products/:id" element={<ProductDetailFake/>} />
      <Route path="/login" element={<Login />}></Route>
      <Route path="/signUp" element={<SignUp />}></Route>

    </Routes>
  )
}

export default AllRoutes








