
import { Input } from '@chakra-ui/react'
import {Flex,Spacer} from "@chakra-ui/layout"
import {BsInstagram} from "react-icons/bs"
import {FaFacebookF,FaPinterestSquare, FaTiktok} from "react-icons/fa"
import { Button } from '@chakra-ui/react'
import "./Footer.css"
import { Box,Grid,GridItem } from '@chakra-ui/layout'
import { Image } from '@chakra-ui/react'

import React from 'react'

export default function Footer() {
  return (
    <div>
        <Box backgroundColor={"black"} padding={["30px 0px 0px 10px","70px"]}>
            <Grid gridTemplateColumns={['repeat(1,1fr)','repeat(1,1fr)','repeat(4,1fr)']}>
                <GridItem>
                    <Image w={[200,300]}   maxW={"300px"} src={"https://cdn11.bigcommerce.com/s-9srn18to/stencil/f5485050-5114-013b-119b-123f55a4ca1d/e/8e215d00-3d2b-013b-c3ef-3ea28820c29e/img/logo-white.png"}/>
                    <Flex>
                    <BsInstagram className="icons"/>
                    <FaFacebookF className="icons"/>
                    <FaPinterestSquare className="icons"/>
                    <FaTiktok className="icons"/>
                    </Flex>
                </GridItem>
                <GridItem textAlign={["center","left"]} pt={["12px","12px","0px","0px"]} className="about">
                    <h5>INFO</h5>
                    <Box w={"100%"} pt={["15px,25px"]}>
                    <h5>ABOUT US</h5>
                    <h5>CONTACT US</h5>
                    <h5>WORK WITH US</h5>
                    <h5>TS & CS</h5>
                    <h5>PRIVACY POLICY</h5>
                    </Box>
                </GridItem>
                <GridItem textAlign={["center","left"]} pt={["12px","12px","0px","0px"]} className="about">
                    <h5 >CUSTOMER CARE</h5>
                    <br />
                    <h5>SHIPPING</h5>
                    <h5>RETURN</h5>
                    <h5>INCLUSIVE SIZING</h5>
                    <h5>PAYMENT METHOD</h5>
                    <h5>GIFT CARDS</h5>
                    <h5>OUTLET</h5>
                </GridItem>
                <GridItem className="about">
                    <h5>SUBSCRIBE TO RECEIVE UPDATES AND SPECIAL OFFERS!</h5>
                    <br />
                    <Flex><Input style={{color:"white", fontSize:"13px", fontWeight:"500"}} variant='flushed' placeholder='YOUR EMAIL ADDRESS' />
                    <Button style={{fontSize:"13px",backgroundColor:"transparent", borderRadius:"0px"}} className="footer">SUBSCRIBE</Button></Flex>
                    
                </GridItem>
            </Grid>
        </Box>
    </div>
  )
}
