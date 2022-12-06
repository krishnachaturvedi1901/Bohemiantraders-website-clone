import { Box, Button } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import {useSearchParams} from "react-router-dom"
import {useDispatch,useSelector} from "react-redux"
import { getProducts } from '../../Redux/ProductPageRedux/prodActions'
import styles from "../../Pages/Products/styles.module.css"
import { ArrowLeftIcon, ArrowRightIcon } from '@chakra-ui/icons'
let lastPage=4
const getCurrentPage=(value)=>{
 if(typeof value!==Number||value<1){return value=1}
 if(!value){return value=1}
 if(value>lastPage){return value=1}
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
     <button  onClick={()=>handlePageChange(page-1)} disabled={page===1}>{<ArrowLeftIcon/>}</button>
     {page>1?<button onClick={()=>handlePageChange(page-1)}>{page-1}</button>:null}
     <Button >{page}</Button>
     {page<lastPage?<button  onClick={()=>handlePageChange(page+1)}>{page+1}</button>:null}
     <button disabled={page===lastPage} onClick={()=>handlePageChange(page+1)}>{<ArrowRightIcon/>}</button>
    </Box>
  )
}

export default Pagination