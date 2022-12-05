import { Box } from '@chakra-ui/react'
import React from 'react'
import styles from "../../Pages/Products/styles.module.css"

const orderTypes=["FEATURED ITEMS","NEWEST ITEMS","BEST SELLING","PRICE: ASCENDING","PRICE: DESCENDING"]


const SortBox = () => {
  return (
    <Box p={'10px'} >
    <Box className={styles.filterHeadStyle} m={'10px'}>SORT BY</Box>
     <Box>
     {
      orderTypes.map((ele)=>{
        return(
          <Box m={'10px'}>
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