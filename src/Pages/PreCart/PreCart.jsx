import React from 'react';
import { CloseIcon, ArrowLeftIcon, ArrowRightIcon, CheckCircleIcon, CheckIcon, Icon } from '@chakra-ui/icons'
import {
  Box, Button, Image, Grid, GridItem, OrderedList, UnorderedList, List, ListItem, ListIcon, Radio, RadioGroup, Stack, Tab, Tabs, Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Text, useDisclosure, TabList, TabPanels, TabPanel, VStack
} from '@chakra-ui/react'
export function PreCart(props) {
    let data=props.data
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [overlay, setOverlay] = React.useState(<OverlayOne />)
    const OverlayOne = () => (
        <ModalOverlay
          bg='blackAlpha.300'
          backdropFilter='blur(10px) hue-rotate(90deg)'
        />
      )
      
      let start =()=>{
        setOverlay(<OverlayOne />)
        onOpen()
      }
      if(props.open){
        start();
      }
    return (
        <div>
            <>
        <Modal size={'6xl'} isCentered isOpen={isOpen} onClose={onClose}>
          {overlay}
          <ModalContent>
            <ModalHeader>
              OK, ITEMS WERE ADDED TO YOUR CART. WHAT'S NEXT?
            </ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Stack direction={['column', 'row']} >
                <Box >
                  <Image w={'50%'} ml={'10%'} src={data.img.model1} />
                </Box>
                <Box>
                  <Text>{data.name.toUpperCase()}</Text>
                  <Text>{data.brand.toUpperCase()}</Text>
                  <Text>${data.price}</Text>
                </Box>
                <Box w={'33%'}>
                  <VStack>
                    <Button w={'100%'}>PRODCEED TO CHECKOUT</Button>
                    <Text>--or use--</Text>
                    <Button w={'100%'}>PayPal</Button>
                    <Button w={'100%'}>G Pay</Button>
                    <Text>Order subtotal</Text>
                    <Text>$US {data.price}</Text>
                    <Text>Your cart containe { } items</Text>
                    <Button w={'100%'}>CONTINUE SHOPPING</Button>
                    <Button w={'100%'} onClick={onClose} >VIEW OR EDIT YOUR CART</Button>
                  </VStack>
                </Box>
              </Stack>
            </ModalBody>
            <ModalFooter>

            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
        </div>
    );
}

