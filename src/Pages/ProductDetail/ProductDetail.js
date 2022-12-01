import React,{useEffect,useState} from 'react';

import {CloseIcon, ArrowLeftIcon, ArrowRightIcon, CheckCircleIcon, CheckIcon, Icon } from '@chakra-ui/icons'
import './ProductDetail.css'
import { PreCart } from '../PreCart/PreCart';
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
function ProductDetail() {
  let [slideIndex, setslideIndex] = useState(1)
  const [value, setValue] = useState(null)
  const [data, setdata] = useState({
    "id":"" ,
    "brand": "",
    "category": "",
    "name": "",
    "price":"",
    "reviews":"",
    "rating":"",
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
    "bestSelling":"",
    "featured": ""})
  useEffect(() => {
    fetch(`https://bohemian-server.onrender.com/products/0`).then((res)=>{
      res.json().then((res)=>{
               setdata(res)
      })
    })
  }, [])
  
  React.useEffect(() => {

    showSlides(slideIndex);
  }, [plusSlides])
  console.log(slideIndex)
  function plusSlides(n) {
    let next = document.getElementsByClassName('next');
    let prev = document.getElementsByClassName("prev");
    if (slideIndex + n < 1) { setslideIndex(1) }
    else if (slideIndex + n >= 3) { setslideIndex(3) }
    else { setslideIndex(slideIndex = slideIndex + n) }
    showSlides(slideIndex);
  }
  function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length - 1; i++) {
      slides[i].style.display = "none";
      slides[i + 1].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "flex";
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
        setOverlay(<OverlayOne />)
        onOpen()
      }
    }
    console.log(value)
  }
  function AddDATAinWishList() {
    alert('data add in WishList')
  }
  let FEATURES = data.features.toString().split(',', 10)

  console.log(FEATURES)


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
      <p>Home/  DRESSES  / {data.brand}</p>
      <div id='PD_div1'>
        <Grid className='slideshow-container' templateColumns='repeat(1, 1fr)'>
          <GridItem className='mySlides fade'>
            <Image boxSize='50%' src={data.img.item1} h='100%' alt='Dan Abramov' />
            <Image boxSize='50%' src={data.img.item2} h='100%' alt='Dan Abramov' />
          </GridItem>
          <GridItem className='mySlides fade'>
            <Image boxSize='50%' src={data.img.item2} h='100%' alt='Dan Abramov' />
            <Image boxSize='50%' src={data.img.model1} h='100%' alt='Dan Abramov' />
          </GridItem>
          <GridItem className='mySlides fade'>
            <Image boxSize='50%' src={data.img.model1} h='100%' alt='Dan Abramov' />
            <Image boxSize='50%' src={data.img.model2} h='100%' alt='Dan Abramov' />
          </GridItem>
          <a className="prev" onClick={() => { plusSlides(-1) }}><ArrowLeftIcon /></a>
          <a className="next" onClick={() => { plusSlides(1) }}><ArrowRightIcon /></a>
        </Grid>
        <div id='PD_DATA'>
          <h1 id='PD_title'>{data.name}</h1>
          <h3>{data.brand}</h3>
          <h6>{data.price}</h6>
          <h6>
            Or pay 4 interest-free payments with Paytem
          </h6>
          <div>
            <img style={{ width: "100px", height: "50px" }} src={rating} />
          </div>
          <h3>SIZE:</h3>
          <div style={{ display: "flex", gap: "20px", backgroundColor: "transparent" }}>
            <RadioGroup onChange={setValue} value={value}>
              <Stack direction='row'>
                {data.sizes.map((el) => {
                  return <Radio value={el} key={el}>
                    {el}
                  </Radio>
                })}
              </Stack>
            </RadioGroup>
          </div>
          <Box>
            <Stack direction='column'>
              <Button colorScheme='teal' variant='solid' onClick={AddDATAinCart}>Button</Button>
              <Button colorScheme='blue' onClick={AddDATAinWishList}>ADD TO WISH LIST</Button>
            </Stack>
          </Box>
        </div>
      </div>
      <div style={{ height: "50px" }}></div>
      <Box size='md'>
        <Tabs w={'50%'} size='sm' >
          <TabList>
            <Tab>PRODUCT DETAILS</Tab>
            <Tab>PRODUCT FEATURES</Tab>
            <Tab>PRODUCT SIZING</Tab>
          </TabList>

          <TabPanels>
            <TabPanel>
              <p>{data.details.toUpperCase()}</p>
            </TabPanel>
            <TabPanel>
              <List spacing={3}>
                {data.features.toString().split(',', 10).map(function (el) {
                  return <ListItem>
                    <ListIcon as={CheckCircleIcon} color='green.500' />
                    {el}
                  </ListItem>
                })}
              </List>
            </TabPanel>
            <TabPanel>
              <List spacing={3}>
                <ListItem>
                  <ListIcon as={CheckCircleIcon} color='green.500' />
                  Lilly is a size AU8, 170cm tall and wears a size XS
                </ListItem>
                <ListItem>
                  <ListIcon as={CheckCircleIcon} color='green.500' />
                  Bruna is a size AU16 and wears a size XL
                </ListItem>
                <ListItem>
                  <Image boxSize='100%' src='https://cdn8.bigcommerce.com/s-9srn18to/product_images/uploaded_images/SS22-DRE71.png' alt='Dan Abramov' />
                </ListItem>
              </List>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
      <Box>
        <h2 id='more_product'>MORE FROM THIS COLLECTION</h2>
        <Image boxSize='20%' src={data.img.item1} alt='Dan Abramov' />
        <h3>{data.name.toUpperCase()}</h3>
        <h3>{data.price}</h3>
      </Box>

    </div>
  )
}


export default ProductDetail;