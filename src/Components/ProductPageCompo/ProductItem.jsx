import { Box, Image,Text } from '@chakra-ui/react'
import React from 'react'
import styles from "../../Pages/Products/styles.module.css"

const ProductItem = ({brand,name,price,img}) => {
  return (
    <Box h={{base:'62vw',md:'36vw'}} w={{base:'100%', md:'100%'}}  >
      <Box h='75%' w='100%'  >
        <Image src={img.model1} h='100%' w='100%' />
      </Box>
      <Box textTransform='uppercase'>
       <Box className={styles.applyFontFamily} fontSize={{base:"2.3vw",sm:"2vw",md:".85vw"}} color='#272727'  >{name}</Box>
       <Text className={styles.applyFontFamily} fontSize={{base:"2.3vw",sm:"2vw",md:".85vw"}} color='#8D7F7F'>{brand}</Text>
       <Text className={styles.applyFontFamily} fontSize={{base:"2.3vw",sm:"2vw",md:".85vw"}} color='#272727'>${" "+price}</Text>

      </Box>
    </Box>
  )
}

export default ProductItem