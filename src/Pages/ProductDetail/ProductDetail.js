import React, { useEffect, useState } from 'react';
import { Box, HStack, Button, Image, Radio, RadioGroup, Stack, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, Text, useDisclosure, VStack, Grid } from '@chakra-ui/react'
import './ProductDetail.css'
import { useParams } from 'react-router-dom';
import { MoreProduct } from '../../Components/ProductDetailsCompo/MoreProduct';
import { PDdetails } from '../../Components/ProductDetailsCompo/PDdetails';
import { SendDataOnCart, SendDataOnWishList } from '../../Components/ProductDetailsCompo/SendData';
import PDImg1 from '../../Components/ProductDetailsCompo/PDImg1';
function ProductDetail() {
  let { id } = useParams();
  id = 5;
  const [ID, setID] = useState(id)
  let [Index, setIndex] = useState(id)
  const [value, setValue] = useState(null)
  console.log(ID)
  const [data, setdata] = useState({
    "id": "",
    "brand": "",
    "category": "",
    "name": "",
    "price": "",
    "reviews": "",
    "rating": "",
    "sizes": [

    ],
    "details": "",
    "features": [],
    "img": {
      "item1": "",
      "item2": "",
      "model1": "",
      "model2": ""
    },
    "inStock": "",
    "newest": "",
    "bestSelling": "",
    "featured": ""
  })
  useEffect(() => {
    fetch(`http://localhost:3001/products/${Index}`).then((res) => {
      res.json().then((res) => {
        setdata(res)
      })
    })
  }, [Index])
  
  if(Index!=ID){
    setID(Index);
  }
  let rating = "";
  if (data.rating > 4) {
    rating = "https://www.shutterstock.com/image-vector/five-stars-quality-rating-icon-260nw-1184466310.jpg"
  }
  else if (data.rating > 3) {
    rating = "https://t4.ftcdn.net/jpg/02/74/86/43/360_F_274864312_uNlm9yCpdViwKzHkCp0sOBrmJFN0pKAa.jpg"
  }
  else if (data.rating > 2) {
    rating = "https://www.shutterstock.com/image-vector/three-stars-icon-vector-260nw-1316819480.jpg"
  }
  else {
    rating = "https://www.shutterstock.com/image-vector/two-stars-icon-vector-260nw-1316819486.jpg"
  }

  const OverlayOne = () => (
    <ModalOverlay
      bg='blackAlpha.300'
      backdropFilter='blur(10px) hue-rotate(90deg)'
    />
  )
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [overlay, setOverlay] = React.useState(<OverlayOne />)
  function AddDATAinCart() {
    if (value) {
      {
        SendDataOnCart(data, value);
        setOverlay(<OverlayOne />)
        onOpen()
      }
    }
    else {
      alert('Please select a Size')
    }
  }
  function AddDATAinWishList() {
    if (value) {
      {
        SendDataOnWishList(data, value)
      }
    }
    else {
      alert('Please select a Size')
    }
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
                    <Button w={'100%'} onClick={onClose} >CONTINUE SHOPPING</Button>
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
      <Text>Home/  DRESSES  / {data.brand}</Text>
      <Grid templateColumns={['repeat(1, 1fr)', 'repeat(1, 1fr)', 'repeat(2, 1fr)']} gap={6}>

        <Box border={'1px solid red'}>
          <PDImg1 data={data} />
        </Box>
        <Box border={'1px solid green'}>
          <Text id='PD_title'>{data.name}</Text>
          <Text>{data.brand}</Text>
          <Text>{data.price}</Text>
          <Text>Or pay 4 interest-free payments with Paytem</Text>
          <Box>
            <Image w={'100px'} src={rating} />
          </Box>
          <Text>SIZE:</Text>
          <RadioGroup onChange={setValue} value={value}>
            <Stack direction='row'>
              {data.sizes.map((el) => {
                return <Radio value={el} key={el}>
                  {el}
                </Radio>
              })}
            </Stack>
          </RadioGroup>
          <Box>
            <Stack direction='column'>
              <Button colorScheme='teal' variant='solid' onClick={AddDATAinCart}>Add to Cart</Button>
              <Button colorScheme='blue' onClick={AddDATAinWishList}>ADD TO WISH LIST</Button>
            </Stack>
          </Box>
        </Box>
      </Grid>
      <div style={{ height: "50px" }}></div>
      <PDdetails {...data} />
      <MoreProduct data={data} setID={setIndex}/>
    </div>
  )
}


export default ProductDetail;