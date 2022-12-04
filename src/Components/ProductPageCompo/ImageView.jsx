import React, { useContext, useState } from 'react'
import { Box, Text } from '@chakra-ui/react'
import styles from "../../Pages/Products/styles.module.css"
import { ImageViewContext } from '../../Context/ImageViewContextProvider/ImageViewContextProvider'


const ImageView = () => {
    const {imgView,toggleImgView}=useContext(ImageViewContext)
  return (
    <Box className={styles.imgView} >
     <Text onClick={()=>{toggleImgView("model")}} className={imgView==="model"?styles.imgUnderline:null} cursor='pointer' >MODEL VIEW</Text>
     <Text onClick={()=>{toggleImgView("dress")}} className={imgView==="dress"?styles.imgUnderline:null}  cursor='pointer'>PRODUCT VIEW</Text>
    </Box>
  )
}

export default ImageView