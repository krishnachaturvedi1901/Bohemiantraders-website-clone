import { Box, Button } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import {useSearchParams} from "react-router-dom"
import {useDispatch,useSelector} from "react-redux"
import { getProducts } from '../../Redux/ProductPageRedux/prodActions'
import styles from "../../Pages/Products/styles.module.css"
const getCurrentPage=(value)=>{
 if(typeof value!==Number||value<1){return value=1}
 if(!value){return value=1}
 return value
}

const Pagination = () => {
  const dispatch =useDispatch()
  let [searchParams,setSearchParams]=useSearchParams()
  const extractPage=getCurrentPage(+searchParams.get('page'))
  const [page,setPage]=useState(extractPage)
  
  
  useEffect(()=>{
    setSearchParams({page})
    dispatch(getProducts(page))

  },[page])

  const handlePageChange=(updatedPage)=>{
    setPage(updatedPage)
  }


  return (
    <Box  display={'flex'} m='auto' justifyContent={'center'} className={styles.pageButton} >
     <Button  onClick={()=>handlePageChange(page-1)} disabled={page===1}>{'Previous'}</Button>
     {page>1?<button onClick={()=>handlePageChange(page-1)}>{page-1}</button>:null}
     <Button >{page}</Button>
     <button  onClick={()=>handlePageChange(page+1)}>{page+1}</button>
     <Button  onClick={()=>handlePageChange(page+1)}>{'Next'}</Button>
    </Box>
  )
}

export default Pagination