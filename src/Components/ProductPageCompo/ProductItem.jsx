import { Box, Image,Text } from '@chakra-ui/react'
import React, { useContext, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ImageViewContext } from '../../Context/ImageViewContextProvider/ImageViewContextProvider'
import styles from "../../Pages/Products/styles.module.css"

const ProductItem = ({id,brand,name,price,img}) => {
  const [reload,setReload]=useState(true)
  const navigate=useNavigate()
  const {imgView} =useContext(ImageViewContext)
  const ImgRef= useRef(null)

  const mouseOver=(e)=>{
    if(imgView==="model"){
      ImgRef.current.src=img.model2
    }
    else{
      ImgRef.current.src=img.item2
    }
    setReload(!reload)
  }
  const mouseOut=()=>{
    if(imgView==="model"){
      ImgRef.current.src=img.model1
    }
    else{
      ImgRef.current.src=img.item1
    }
    setReload(!reload)
  }

  return (
    <Box h={{base:'62vw',md:'36vw'}} w={{base:'100%', md:'100%'}} onClick={()=>{navigate(`/products/${id}`)}}>
      <Box h='75%' w='100%' onMouseOver={(e)=>mouseOver(e)} onMouseOut={(e)=>mouseOut(e)} >
        <Image ref={ImgRef} src={imgView==="model"&& img?img.model1:img.item1} h='100%' w='100%' />
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