import {Routes,Route} from "react-router-dom"

import React from 'react'
import Products from "../Pages/Products/Products"
import Home from "../Pages/Home"

const AllRoutes = () => {
  return (
    <Routes>
     <Route path="/" element={<Home/>} />
      <Route path="/products" element={<Products/>} />
      <Route path="/products/:id" element={<Home/>} />
    </Routes>
  )
}

export default AllRoutes