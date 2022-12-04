import { createContext, useState } from "react";
import React from 'react'
import { Box } from "@chakra-ui/react";

export const ImageViewContext = createContext()


const ImageViewContextProvider = ({children}) => {
    const [imgView,setImgView]=useState("model")
    
    const toggleImgView=(viewType)=>{
        setImgView(viewType)
    }

  return (
    <ImageViewContext.Provider value={{imgView,toggleImgView}} >
    {children}
    </ImageViewContext.Provider>
  )
}

export default ImageViewContextProvider