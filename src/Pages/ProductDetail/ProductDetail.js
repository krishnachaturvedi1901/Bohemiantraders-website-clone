import React, { useEffect, useState } from 'react';
import { Box, HStack, Button, Image, Radio, RadioGroup, Stack, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, Text, useDisclosure, VStack, Grid } from '@chakra-ui/react'
import './ProductDetail.css'
import { useParams } from 'react-router-dom';
import { MoreProduct } from '../../Components/ProductDetailsCompo/MoreProduct';
import { PDdetails } from '../../Components/ProductDetailsCompo/PDdetails';
import { SendDataOnCart, SendDataOnWishList } from '../../Components/ProductDetailsCompo/SendData';
import PDImg1 from '../../Components/ProductDetailsCompo/PDImg1';
import { productsUrl,accountsUrl } from '../../Deployed-server-url/deployed-server-url';
import {Link}  from "react-router-dom"
import { useNavigate } from "react-router-dom";
import { useToast } from '@chakra-ui/react'

function ProductDetail() {
  const navigate= useNavigate()
  let { id } = useParams();
  const [ID, setID] = useState(id)
  let [Index, setIndex] = useState(id)
  const [value, setValue] = useState(null)
  const [user,setUser]=useState([])
  console.log(ID)
  const toast = useToast()

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

    fetch(`${productsUrl}/${Index}`).then((res) => {
      res.json().then((res) => {
        setdata(res)
      })
    })
    fetch(`${accountsUrl}`).then((res) => { return res.json() }).then((res) => {
      let loginUser = res.filter((el) => {
          if (el.login == true) {
              return el
          }
      })
      setUser(loginUser) 
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
    if (value ) {
      if(user.length>0)
      {
        SendDataOnCart(data, value,user);
        setOverlay(<OverlayOne />)
        onOpen()

        toast({
          title: 'Product Added',
          description: "",
          status: 'success',
          duration: 4000,
          isClosable: true,
        })
            
      }
      else{ navigate('/login') }
    }
    else {
      alert('Please select a Size')
      
    }
  }
  function AddDATAinWishList() {
    if (value) {
      if( user.length>0)
      {
        SendDataOnWishList(data, value,user)
        toast({
          title: 'Product Added',
          description: "",
          status: 'success',
          duration: 2000,
          isClosable: true,
        })
        
      }
      else{
        navigate('/login')
      }
    }
    else {
      alert('Please select a Size')
    }
  }
  return (
    <div >
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
                    <Button w={'100%'} onClick={onClose} ><Link to='/cart' >VIEW OR EDIT YOUR CART</Link></Button>
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

        <Box>
          <PDImg1 data={data} />
        </Box>
        <Box p={'10px'} >
          <Text id='PD_title'>{data.name}</Text>
          <Text>{data.brand}</Text>
          <Text>{data.price}</Text>
          <Text>Or pay 4 interest-free payments with Paytem</Text>
          <Box>
            <Image w={'100px'} src={rating} />
          </Box>
          <Text>SIZE:</Text>
          <RadioGroup onChange={setValue} value={value}>
            <Stack m={'10px'} direction='row'>
              {data.sizes.map((el) => {
                return <Radio m={'15px'} value={el} key={el}>
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