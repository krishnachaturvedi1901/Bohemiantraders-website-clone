import { Box } from '@chakra-ui/react'
import React from 'react'
import styles from "../../Pages/Products/styles.module.css"
import { useDispatch } from 'react-redux'
import { useSearchParams } from 'react-router-dom'

const orderTypes=["FEATURED ITEMS","NEWEST ITEMS","BEST SELLING","PRICE: ASCENDING","PRICE: DESCENDING"]


const SortBox = () => {
  const {searchParams,setSearchParams}=useSearchParams()
  const dispatch=useDispatch()

  const handleSortChange=(e)=>{
     const {name,value}=e.target
     setSearchParams({name})
  }

  return (
    <Box p={'10px'} >
    <Box className={styles.filterHeadStyle} m={'10px'}>SORT BY</Box>
     <Box  >
     {
      orderTypes.map((ele)=>{
        return(
          <Box m={'10px'} onClick={(e)=>{handleSortChange(e)}} alignText={'left'} >
          <input type="checkbox" id="otherChoice1" name={ele}  style={{marginRight:"5px"}} />
          <label for="otherChoice1">{ele}</label>
          </Box>
        )
      })
     }
     </Box>
 </Box>

  )
}

export default SortBox