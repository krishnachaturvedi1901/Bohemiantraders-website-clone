import { Box, Button, Checkbox, Flex, FormControl, FormLabel, Grid, GridItem, Input, Select, Spacer } from '@chakra-ui/react'
import React from 'react'
import Footer from '../Components/Footer'
import { Navbar } from '../Components/Navbar'
import "./SignUp.css"

export default function SignUp() {
  return (
    <div>
        <Navbar />
        <Box width={["100%","100%","95%","90%"]} m={["0px 0px 25px 0px","0px 0px 25px 0px","10px auto 50px"]}>
        <p className="heading">NEW ACCOUNT</p>
        <Box id="reducing_width" width={["95%","100%","90%","80%"]} margin="auto">
        <FormControl ml={["0px","-50px"]}  w={"100%"}  color="grey">
            <Grid rowGap={["5px","25px"]}  columnGap={["0px","20px"]} gridTemplateColumns={["repeat(1,1fr)","repeat(1,1fr)","repeat(2,1fr)","repeat(2,1fr)"]}>
                <GridItem>
                    <Flex><FormLabel  fontSize={"12px"} fontWeight={"500"} letterSpacing="1.25px">EMAIL ADDRESS</FormLabel>
                    <Spacer />
                <p className='form_control'>REQUIRED</p></Flex>
            <Input border={"1px solid grey"}
                        padding="8px" fontSize={"15px"} w={["100%"]} borderRadius="0px" variant={'unstyled'} type='email' /></GridItem>
            <GridItem>
                    <Flex><FormLabel  fontSize={"12px"} fontWeight={"500"} letterSpacing="1.25px">PASSWORD</FormLabel>
                    <Spacer />
                <p className='form_control'>REQUIRED</p></Flex>
            <Input border={"1px solid grey"}
                        padding="8px" fontSize={"15px"}  w={["100%"]} borderRadius="0px" variant={'unstyled'} type='password' /></GridItem>
            <GridItem>
                    <Flex><FormLabel  fontSize={"12px"} fontWeight={"500"} letterSpacing="1.25px">CONFIRM PASSWORD</FormLabel>
                    <Spacer />
                <p className='form_control'>REQUIRED</p></Flex>
            <Input border={"1px solid grey"}
                        padding="8px" fontSize={"15px"} borderRadius="0px" variant={'unstyled'} type='password' /></GridItem>
            <GridItem>
                    <Flex><FormLabel  fontSize={"12px"} fontWeight={"500"} letterSpacing="1.25px">FIRST NAME</FormLabel>
                    <Spacer />
                <p className='form_control'>REQUIRED</p></Flex>
            <Input border={"1px solid grey"}
                        padding="8px" fontSize={"15px"} borderRadius="0px" variant={'unstyled'} type='text' /></GridItem>
            <GridItem>
                    <Flex><FormLabel  fontSize={"12px"} fontWeight={"500"} letterSpacing="1.25px">LAST NAME</FormLabel>
                    <Spacer />
                <p className='form_control'>REQUIRED</p></Flex>
            <Input border={"1px solid grey"}
                        padding="8px" fontSize={"15px"} borderRadius="0px" variant={'unstyled'} type='text' /></GridItem>
            <GridItem>
                    <FormLabel  fontSize={"12px"} fontWeight={"500"} letterSpacing="1.25px">COMPANY NAME</FormLabel>
            <Input border={"1px solid grey"}
                        padding="8px" fontSize={"15px"} borderRadius="0px" variant={'unstyled'} type='text' /></GridItem>
            <GridItem>
                    <FormLabel  fontSize={"12px"} fontWeight={"500"} letterSpacing="1.25px">ADDRESS LINE 2nj</FormLabel>
            <Input border={"1px solid grey"}
                        padding="8px" fontSize={"15px"} borderRadius="0px" variant={'unstyled'} type='text' /></GridItem>
             <GridItem>
                    <Flex><FormLabel  fontSize={"12px"} fontWeight={"500"} letterSpacing="1.25px">SUBURB/CITY</FormLabel>
                    <Spacer />
                <p className='form_control'>REQUIRED</p></Flex>
            <Input border={"1px solid grey"}
                        padding="8px" fontSize={"15px"} borderRadius="0px" variant={'unstyled'} type='text' /></GridItem>
             <GridItem>
                    <Flex><FormLabel  fontSize={"12px"} fontWeight={"500"} letterSpacing="1.25px">COUNTRY</FormLabel>
                    <Spacer />
                <p className='form_control'>REQUIRED</p></Flex>
                <Select borderRadius={"0px"} _focus={{border:"1px solid green"}} border={"1px solid green"} placeholder='Select option'>
                <option>United Arab Emirates</option>
                <option>USA</option>
                <option>India</option>
                <option>China</option>
                <option>Nepal</option>
                <option>Australia</option>
                <option>Indonesia</option>
                <option>Thailand</option>
                <option>Japan</option>
                <option>South Korea</option>
                <option>Canada</option>
                <option>United Kingdom</option>
                </Select>
            </GridItem>
             <GridItem>
                    <Flex><FormLabel  fontSize={"12px"} fontWeight={"500"} letterSpacing="1.25px">STATE/PROVINCE</FormLabel>
                    <Spacer />
                <p className='form_control'>REQUIRED</p></Flex>
                <Select borderRadius={"0px"} _focus={{border:"1px solid green"}} border={"1px solid green"} placeholder='Select option'>
                <option>Andhra Pardesh</option>
                <option>Karnatka</option>
                <option>Gujarat</option>
                <option>Delhi</option>
                <option>Haryana</option>
                <option>Rajasthan</option>
                <option>Sikkim</option>
                <option>Punjab</option>
                <option>Uttar Pradesh</option>
                <option>Jammu & Kashmir</option>
                <option>Meghalya</option>
                <option>Bihar</option>
                </Select>
            </GridItem>
            <GridItem>
                    <Flex><FormLabel  fontSize={"12px"} fontWeight={"500"} letterSpacing="1.25px">ZIP/POSTCODE</FormLabel>
                    <Spacer />
                <p className='form_control'>REQUIRED</p></Flex>
            <Input border={"1px solid grey"}
                        padding="8px" fontSize={"15px"} borderRadius="0px" variant={'unstyled'} type='number' /></GridItem>
            <GridItem>
                <FormLabel>I DO NOT PROVIDE AUTHORITY TO LEAVE</FormLabel>
            <Checkbox fontSize={"13px"} letterSpacing="1.25px" color="black" size='md' colorScheme='green' defaultChecked>
                I DO NOT PROVIDE AUTHORITY TO LEAVE
            </Checkbox>
            </GridItem>
            </Grid>
            <Button width={["100%","auto"]} id="sign_btn" fontSize={"13px"} letterSpacing={"1.25px"} fontWeight={"400"} borderRadius={0} color={"white"} backgroundColor={"RGBA(0, 0, 0, 0.48)"} mt={7}>CREATE ACCOUNT</Button>
            </FormControl>
            </Box>
        </Box>
        
        <Footer />
    </div>
  )
}
