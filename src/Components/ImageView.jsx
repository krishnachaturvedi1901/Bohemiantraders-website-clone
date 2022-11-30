import React, { useState } from 'react'
import { Box, Text } from '@chakra-ui/react'
import styles from "../Pages/Products/styles.module.css"


const ImageView = () => {
    const [viewType,setViewType]=useState("")
  return (
    <Box className={styles.imgView} >
     <Text onClick={()=>{setViewType("image")}} className={viewType==="image"?styles.imgUnderline:null} >MODEL VIEW</Text>
     <Text onClick={()=>{setViewType("product")}} className={viewType==="product"?styles.imgUnderline:null} >PRODUCT VIEW</Text>
    </Box>
  )
}

export default ImageView