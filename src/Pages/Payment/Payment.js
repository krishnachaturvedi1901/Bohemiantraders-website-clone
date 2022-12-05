import { Heading, Flex, Spacer, ButtonGroup, Grid, GridItem, Image, Stat, Text, Accordion, AccordionButton, AccordionIcon, AccordionPanel, Box, AccordionItem, Input, Button, Radio, Checkbox, useToast } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
function Payment(props) {
    const [State, setState] = useState([])
    const [totalCoupon, settotalCoupon] = useState(0)
    const [totalPrice, settotalPrice] = useState(0)
    const [CouponOpen, setCouponOpen] = useState(false)
    const [Coupon, setCoupon] = useState(false)
    const [Payment, setPayment] = useState(false)
    let total = 0;
    const toast = useToast();
    useEffect(() => {
        fetch(`http://localhost:3001/userAccounts?login=true`).then((el) => {
            el.json().then((data) => {
                console.log(data)
                setState(data)
            })
        })
    }, [])
    console.log(Coupon)
    function SubCoupon() {
        if (Coupon == 'masai' && totalCoupon == 0) {
            return toast({
                title: ' Hurry ! masai Coupon  added you got 10% off',
                status: 'success',
                isClosable: true,
              })
            settotalCoupon((total / 10) * 3)
            settotalPrice(total - totalCoupon)
        }
        else{
            return toast({
                title: 'please enter correct coupon',
                status: 'error',
                isClosable: true,
              })
        }
        console.log(total, "after coupon")
    }
    return (
        State.length > 0 ?
            <div><Grid templateColumns={['repeat(1, 1fr)', 'repeat(2, 1fr)']} w={['95%', '90%']} margin={'auto'} gap={1}>

                <GridItem>

                    <Grid templateColumns='repeat(1, 1fr)' border={'1px solid gray'} margin={'auto'} gap={1}>
                        <GridItem w={['100%']} margin={'auto'} h='50' border={'1px solid gray'} alignItems={'center'} textAlign={'center'} style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <Text>Order Summary</Text>
                            <Link>Edit Cart</Link>
                        </GridItem>
                        {State[0].cart.map((el) => {
                            total = total + el.price;
                            return <Grid templateColumns='repeat(1, 1fr)' w={'100%'} border={'1px solid gray'} margin={'auto'} gap={1}>
                                <GridItem w={['100%']} margin={'auto'} style={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <Image w={'100px'} h={'100px'} src={el.img.model1} />
                                    <GridItem w={['100%']} ml={'40px'}>
                                        <Text>{el.name}</Text>
                                        <Text>{el.sizes}</Text>
                                    </GridItem>
                                    <Text>{el.price}</Text>
                                </GridItem>
                            </Grid>
                        })}

                        <GridItem w={['100%']} margin={'auto'} h='50' border={'1px solid gray'} alignItems={'center'} textAlign={'center'} style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <Text>Subtotal</Text>
                            <Text>{total}</Text>
                        </GridItem>
                        <GridItem w={['100%']} margin={'auto'} h='50' border={'1px solid gray'} alignItems={'center'} textAlign={'center'} style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <Text>Shipping</Text>
                            <Text>{total < 500 ? 40 : 0}</Text>

                        </GridItem>
                        <GridItem w={['100%']} margin={'auto'} h='50' border={'1px solid gray'} alignItems={'center'} textAlign={'center'} style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <Text>Tax</Text>
                            <Text>{total / 11}</Text>
                        </GridItem>
                        <GridItem w={['100%']} margin={'auto'} border={'1px solid gray'} alignItems={'center'} textAlign={'center'} style={{ justifyContent: 'space-between' }}>
                            <Link onClick={() => {
                                CouponOpen ? setCouponOpen(false) : setCouponOpen(true);
                            }}>Coupon/Gift Certificate</Link>
                            {CouponOpen ? <Input onChange={(e) => {
                                setCoupon(e.target.value);
                            }} w={'80%'}></Input> : null}
                            {CouponOpen ? <Button onClick={SubCoupon}>Submit</Button> : null}
                            {totalCoupon ? <Text>total Coupon = {totalCoupon}</Text> : null}
                        </GridItem>
                        <GridItem w={['100%']} margin={'auto'} h='50' alignItems={'center'} textAlign={'center'} style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <Text fontSize={'3vh'} as={'b'}>Estimated Total (USD)	</Text>
                            <Text fontSize={'3vh'} as={'b'} >US$ {() => {
                                if (total < 500) {
                                    total = total + 40
                                }
                                total = total + total / 10
                                settotalPrice(total)
                            }}
                                {total - totalCoupon + total / 10}</Text>

                        </GridItem>
                    </Grid>
                </GridItem>
                <GridItem>
                    <Grid templateColumns='repeat(1, 1fr)'  margin={'auto'} gap={1}>
                        <GridItem>
                            <Text align={'center'} fontSize={'5vh'} onClick={() => {
                                Payment ? setPayment(false) : setPayment(true);
                            }}>Payment</Text>
                        </GridItem>
                        <GridItem>
                            {Payment ? <Box>
                                <Flex minWidth='max-content' alignItems='center' gap='2'>
                                    <Box p='2'>
                                        <Heading size='md'>Credit Card</Heading>
                                    </Box>
                                    <Spacer />
                                    <ButtonGroup gap='2'>
                                        <Image h={'50px'} w={"50px"} src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Mastercard-logo.svg/1158px-Mastercard-logo.svg.png?20210817144358' />
                                        <Image h={'50px'} w={"50px"} src='https://cdn-icons-png.flaticon.com/512/217/217425.png' />
                                    </ButtonGroup>
                                </Flex>
                                <Grid templateColumns='repeat(2, 1fr)' border={'1px solid gray'} margin={'auto'} gap={6}>

                                    <Input id='cardnumber' type={'tel'} placeholder='Credit Card Number' variant='filled' />
                                    <Input id='carddate' type={'month'} variant='filled' />
                                    <Input id='cardname' placeholder='Credit Card Name' variant='filled' />
                                    <Input id='cvv' placeholder='CVV' type={'password'} variant='filled' />
                                </Grid>
                                <Text>Terms and Conditions</Text>
                                <Checkbox defaultChecked>Yes, I agree with the <Link>'terms and conditions.'</Link></Checkbox>
                                <Button w={'100%'} colorScheme='blackAlpha' textColor={'white'} onClick={(e) => {
                                    e.preventDefault();
                                    let cart = State[0].cart;
                                    let orders=State[0].orders
                                    orders.push(...cart)
                                    cart = [];
                                    if (document.getElementById('cardnumber').value.length > 0 &&
                                        document.getElementById('carddate').value.length>0 &&
                                        document.getElementById('cardname').value.length>0 &&
                                        document.getElementById('cardcvv').value.length>0) {
                                        fetch(`http://localhost:3001/userAccounts/${State[0].id}`, {
                                            headers: {
                                                "Content-Type": "application/json"
                                            },
                                            method: "PATCH",
                                            body: JSON.stringify({ cart,orders })
                                        }).then((res) => { res.json().then((res) => {
                                            return toast({
                                                title: 'Order Placed Successfully',
                                                status: 'success',
                                                isClosable: true,
                                              })
                                        
                                        }) })
                                    }
                                    else{
                                        return toast({
                                            title: 'Opps! card details are not available',
                                            status: 'error',
                                            isClosable: true,
                                          }) 
                                    }
                                }}>

                                    <Link to={'/'}>PLACE ORDER</Link>
                                </Button>
                            </Box> : null}
                        </GridItem>
                    </Grid>
                </GridItem>
            </Grid></div> : <div>'Loading...'</div>
    );
}

export default Payment;