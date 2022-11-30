import { Box, Image, Stack, VStack } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import Breadscrum from '../../Components/ProductPageCompo/Breadscrum'
import ImageView from '../../Components/ProductPageCompo/ImageView'
import styles from "./styles.module.css"
import Pagination from '../../Components/ProductPageCompo/Pagination'
import ProductList from '../../Components/ProductPageCompo/ProductList'
import FilterBox from '../../Components/ProductPageCompo/FilterBox'
import BottomPoster from '../../Components/ProductPageCompo/BottomPoster'

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
     <Stack direction={{base:'column',md:'row'}} justifyContent={{base:'center',md:'space-between'}}  alignItems={"center"} >
      <Box className={styles.heading} fontSize={{base:'6vw',md:'2.7vw'}} >VIEW ALL</Box>
      {winWidth<768?<Box>REturn</Box>:null}
      <ImageView/>
     </Stack>
     <Box display={'flex'} >
        {
          winWidth>=768?
          <VStack border={'1px solid black'} mr='15px'  alignItems={'flex-start'} maxW='max-content' h={'auto'} >
             <FilterBox/>
          </VStack>
          :null
        }
         <Box margin={'auto'} >
           <ProductList/>
           <Pagination/>
         </Box>
     </Box>
     <Box>
     <BottomPoster/>
    </Box>

    </Box>
  )
}

export default Products