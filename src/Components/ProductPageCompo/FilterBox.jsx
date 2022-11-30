import { background,Text, Box, Button, Grid,HStack,Input, NumberDecrementStepper, NumberIncrementStepper, NumberInput, NumberInputField, NumberInputStepper } from '@chakra-ui/react'
import React from 'react'
import {Accordion,AccordionItem,AccordionButton,AccordionPanel } from '@chakra-ui/react'
import {MinusIcon,AddIcon} from "@chakra-ui/icons"
import styles from "../../Pages/Products/styles.module.css"

const sizes= ["2XS","XS","S","M","L","XL","2XL"]
const orderTypes=["FEATURED ITEMS","NEWEST ITEMS","BEST SELLING","PRICE: ASCENDING","PRICE: DESCENDING"]

const FilterBox = () => {
  return (
    <Box>
    <Accordion allowMultiple>
    <AccordionItem w={'265px'} >
    {({ isExpanded }) => (
      <Box>
        <h2>
          <AccordionButton  >
            <Box flex='1' textAlign='left' className={styles.filterHeadStyle}>
              SIZE
            </Box>
            {isExpanded ? (
              <MinusIcon fontSize='12px' color={'#4d4d4d'} />
            ) : (
              <AddIcon fontSize='12px' color={'#4d4d4d'} />
            )}
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          <Grid templateColumns={'repeat(2,1fr)'} gap='6px' >
             {
              sizes.map((ele)=>{
                return (
                  <Box>
                   <input type="checkbox" id="sizeChoice" name="size" value={ele} style={{marginRight:"5px"}} />
                   <label for="sizeChoice">{ele}</label>
                  </Box>
                )
              })
             }
          </Grid>
        </AccordionPanel>
      </Box>
    )}
  </AccordionItem>

  
    <AccordionItem w={'265px'}>
      {({ isExpanded }) => (
        <Box>
          <h2>
            <AccordionButton  >
              <Box flex='1' textAlign='left' className={styles.filterHeadStyle}>
               PRICE
              </Box>
              {isExpanded ? (
                <MinusIcon fontSize='12px' color={'#4d4d4d'} />
              ) : (
                <AddIcon fontSize='12px' color={'#4d4d4d'} />
              )}
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4} className={styles.filterBodyStyle} >
            <HStack>
              <NumberInput size='md'  defaultValue={'Min'} min={0} variant='ghost' >
                <NumberInputField placeholder='Min.' fontSize={'14px'} />
                <NumberInputStepper>
                  <NumberIncrementStepper color={'gray'} border='none' fontSize='.8em' />
                  <NumberDecrementStepper color={'gray'} border='none' fontSize='.8em' />
                </NumberInputStepper>
              </NumberInput>

              <NumberInput size='md'  defaultValue={'nothing'} min={0} variant='ghost' >
                <NumberInputField placeholder='Max.' fontSize={'14px'} />
                <NumberInputStepper>
                  <NumberIncrementStepper color={'gray'} border='none' fontSize='.8em'/>
                  <NumberDecrementStepper color={'gray'} border='none' fontSize='.8em'/>
                </NumberInputStepper>
              </NumberInput>
            </HStack>
            <Box cursor={'pointer'} m={'5px'}>UPDATE</Box>
          </AccordionPanel>
        </Box>
      )}
    </AccordionItem>
     
    <AccordionItem w={'265px'}>
    {({ isExpanded }) => (
      <Box>
        <h2>
          <AccordionButton  >
            <Box flex='1' textAlign='left' className={styles.filterHeadStyle}>
             OTHER
            </Box>
            {isExpanded ? (
              <MinusIcon fontSize='12px' color={'#4d4d4d'} />
            ) : (
              <AddIcon fontSize='12px' color={'#4d4d4d'} />
            )}
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4} className={styles.filterBodyStyle} >
          <Box m={'5px'} >
          <input type="checkbox" id="otherChoice1" name="size" value={true} style={{marginRight:"5px"}} />
          <label for="otherChoice1">{'IS FEATURED'}</label>
         </Box>
          <Box m={'5px'}>
          <input type="checkbox" id="otherChoice2" name="size" value={true} style={{marginRight:"5px"}} />
          <label for="otherChoice2">{'IN STOCK'}</label>
         </Box>

        </AccordionPanel>
      </Box>
    )}
  </AccordionItem>
        
</Accordion>

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

</Box>
  )
}

export default FilterBox