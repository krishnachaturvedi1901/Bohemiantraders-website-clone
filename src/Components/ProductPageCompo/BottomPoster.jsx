import { Box, Heading, Stack,Text } from '@chakra-ui/react'
import React from 'react'
import styles from "../../Pages/Products/styles.module.css"

const BottomPoster = () => {
  return (
    <Stack flexDirection={{base:'column',md:'row'}} bg='#f7f4f0' p={10} spacing={4} my={{base:'5px',md:'50px'}} >
     <Box className={styles.bottomPoster} w={{base:'100%',md:'70%'}}>
      <Heading className={styles.applyFontFamily}  fontSize={'32px'} textAlign={{base:'center',md:'left'}} >VIEW ALL</Heading>
     </Box>
     <Box className={styles.bottomPoster} w={{base:'100%' ,md:'70%'}} >
      <Text fontWeight={'bold'} mb='15px' >WOMEN</Text>
      <Text mb='15px' >
       At Bohemian Traders, we pride ourselves in our ability to dress women of all shapes and sizes due to our inclusive sizing and thoughtful designs. Find classic wardrobe staples in block colours and neutral tones in beautiful linens or, celebrate and liven up your wardrobe with vibrant and custom prints in our modern cuts.
      </Text>
      <Text mb='15px' >
      Explore our new season range and discover an array of beautiful pieces, each boasting eye-catching details and fresh unique prints. We also offer a classic range all year round that's full of timeless must-haves for every bohemian woman's wardrobe.
      </Text>
      <Text mb='15px' >
      When shopping online for a special occasion like a formal or evening dress, exotic getaway or vacation, or a date night fit that will make a great impression. Bohemian Traders online ships straight to your door with fast and free shipping on orders over $300 all over Australia including Sydney, Melbourne, Brisbane, Perth and Adelaide as well as international shipping options for those outside of Australia including New Zealand, North America and throughout Europe.    
       </Text>

     </Box>
    </Stack>
  )
}

export default BottomPoster