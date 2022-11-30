import { Box, Image, Stack, VStack } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import Breadscrum from '../../Components/Breadscrum'
import ImageView from '../../Components/ImageView'
import styles from "./styles.module.css"
import Pagination from '../../Components/Pagination'
import ProductList from '../../Components/ProductList'
import FilterBox from '../../Components/FilterBox'

const Products = () => {
  const [winWidth,setWinWidth]=useState(window.innerWidth)
  
  const detectSize=()=>{setWinWidth(window.innerWidth)}

  useEffect(() => {
     window.addEventListener('resize', detectSize) 

     return(()=>{
      window.removeEventListener('resize',detectSize)
    })
  }, [winWidth])
  
  return (
    <Box className={styles.prodContainer} padding="4vw" >
     <Breadscrum/>
     <Image id={styles.poster} src="https://cdn11.bigcommerce.com/s-9srn18to/images/stencil/1100x1000/z/v2-black-friday-category-banner__24581.original.jpg" />
     <Stack direction={{base:'column',md:'row'}} justifyContent={{base:'center',md:'space-between'}} border='1px solid red' alignItems={"center"} >
      <Box className={styles.heading} >VIEW ALL</Box>
      {winWidth<768?<Box>REturn</Box>:null}
      <ImageView/>
     </Stack>
     <Box display={'flex'} >
        {
          winWidth>=768?
          <VStack border={'1px solid black'}   alignItems={'flex-start'} maxW='max-content' h={'auto'} >
             <FilterBox/>
          </VStack>
          :null
        }
         <Box>
           <ProductList/>
           <Pagination/>
         </Box>
     </Box>
    </Box>
  )
}

export default Products