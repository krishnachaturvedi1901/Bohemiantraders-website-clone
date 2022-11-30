import { Grid } from '@chakra-ui/react'
import React from 'react'
import ProductItem from './ProductItem'

const ProductList = () => {
  return (
    <div>
       <Grid templateColumns={{base:'repeat(2,1fr)',md:'repeat(4,1fr)'}} gap='10px' border={'1px solid green'} >
         {
            <ProductItem/>

         }
       
       </Grid>

    
    </div>
  )
}

export default ProductList