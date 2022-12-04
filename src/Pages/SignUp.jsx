import { Box, Button, Checkbox, Flex, FormControl, FormLabel, Grid, GridItem, Input, Select, Spacer } from '@chakra-ui/react'
import React, { useState } from 'react'
import Footer from '../Components/Footer'
import { Navbar } from '../Components/Navbar'
import "./SignUp.css"
const newData = {
    email:"",
    password:"",
    confirmPassword:"",
    fName:"",
    lName:"",
    company:"",
    address:"",
    city:"",
    country:"",
    state:"",
    pinCode:"",
    policy:"",
    status:false
}

export default function SignUp() {
    const[form_data, setFormData] = useState(newData);
    const handleChange = (e) => {
        const { value, type, name, checked } = e.target;
    
        const temp = type === "checkbox" ? checked : value;
        setFormData({ ...form_data, [name]: temp });
      };

      const handleClick = () => {
        fetch(`https://bohemian-server.onrender.com/accounts`,{
            method:"POST",
            body:JSON.stringify(form_data),
            headers:{
                "Content-Type": "application/json"
            }
        })
      }
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
            <Input name="email" onChange={handleChange} value={form_data.email} border={"1px solid grey"}
                        padding="8px" fontSize={"15px"} w={["100%"]} borderRadius="0px" variant={'unstyled'} type='email' /></GridItem>
            <GridItem>
                    <Flex><FormLabel  fontSize={"12px"} fontWeight={"500"} letterSpacing="1.25px">PASSWORD</FormLabel>
                    <Spacer />
                <p className='form_control'>REQUIRED</p></Flex>
            <Input name="password" onChange={handleChange} value={form_data.password} border={"1px solid grey"}
                        padding="8px" fontSize={"15px"}  w={["100%"]} borderRadius="0px" variant={'unstyled'} type='password' /></GridItem>
            <GridItem>
                    <Flex><FormLabel  fontSize={"12px"} fontWeight={"500"} letterSpacing="1.25px">CONFIRM PASSWORD</FormLabel>
                    <Spacer />
                <p className='form_control'>REQUIRED</p></Flex>
            <Input name="confirmPassword" onChange={handleChange} value={form_data.confirmPassword} border={"1px solid grey"}
                        padding="8px" fontSize={"15px"} borderRadius="0px" variant={'unstyled'} type='password' /></GridItem>
            <GridItem>
                    <Flex><FormLabel  fontSize={"12px"} fontWeight={"500"} letterSpacing="1.25px">FIRST NAME</FormLabel>
                    <Spacer />
                <p className='form_control'>REQUIRED</p></Flex>
            <Input name="fName" onChange={handleChange} value={form_data.fName} border={"1px solid grey"}
                        padding="8px" fontSize={"15px"} borderRadius="0px" variant={'unstyled'} type='text' /></GridItem>
            <GridItem>
                    <Flex><FormLabel  fontSize={"12px"} fontWeight={"500"} letterSpacing="1.25px">LAST NAME</FormLabel>
                    <Spacer />
                <p className='form_control'>REQUIRED</p></Flex>
            <Input name="lName" onChange={handleChange} value={form_data.lName} border={"1px solid grey"}
                        padding="8px" fontSize={"15px"} borderRadius="0px" variant={'unstyled'} type='text' /></GridItem>
            <GridItem>
                    <FormLabel  fontSize={"12px"} fontWeight={"500"} letterSpacing="1.25px">COMPANY NAME</FormLabel>
            <Input name="company" onChange={handleChange} value={form_data.company} border={"1px solid grey"}
                        padding="8px" fontSize={"15px"} borderRadius="0px" variant={'unstyled'} type='text' /></GridItem>
            <GridItem>
                    <FormLabel  fontSize={"12px"} fontWeight={"500"} letterSpacing="1.25px">ADDRESS LINE 2nj</FormLabel>
            <Input name="address" onChange={handleChange} value={form_data.address} border={"1px solid grey"}
                        padding="8px" fontSize={"15px"} borderRadius="0px" variant={'unstyled'} type='text' /></GridItem>
             <GridItem>
                    <Flex><FormLabel  fontSize={"12px"} fontWeight={"500"} letterSpacing="1.25px">SUBURB/CITY</FormLabel>
                    <Spacer />
                <p className='form_control'>REQUIRED</p></Flex>
            <Input name="city" onChange={handleChange} value={form_data.city} border={"1px solid grey"}
                        padding="8px" fontSize={"15px"} borderRadius="0px" variant={'unstyled'} type='text' /></GridItem>
             <GridItem>
                    <Flex><FormLabel  fontSize={"12px"} fontWeight={"500"} letterSpacing="1.25px">COUNTRY</FormLabel>
                    <Spacer />
                <p className='form_control'>REQUIRED</p></Flex>
                <Select name="country" onChange={handleChange} value={form_data.country} borderRadius={"0px"} _focus={{border:"1px solid green"}} border={"1px solid green"} placeholder='Select option'>
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
                <Select name="state" onChange={handleChange} value={form_data.state} borderRadius={"0px"} _focus={{border:"1px solid green"}} border={"1px solid green"} placeholder='Select option'>
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
            <Input name="pinCode" onChange={handleChange} value={form_data.pinCode} border={"1px solid grey"}
                        padding="8px" fontSize={"15px"} borderRadius="0px" variant={'unstyled'} type='number' /></GridItem>
            <GridItem>
                <FormLabel>I DO NOT PROVIDE AUTHORITY TO LEAVE</FormLabel>
            <Checkbox type="checkbox" name="policy" onChange={handleChange} checked={form_data.policy} fontSize={"13px"} letterSpacing="1.25px" color="black" size='md' colorScheme='green' defaultChecked>
                I DO NOT PROVIDE AUTHORITY TO LEAVE
            </Checkbox>
            </GridItem>
            </Grid>
            <Button width={["100%","auto"]} id="sign_btn" fontSize={"13px"} letterSpacing={"1.25px"} fontWeight={"400"} borderRadius={0} color={"white"} backgroundColor={"RGBA(0, 0, 0, 0.48)"} mt={7} onClick={handleClick}>CREATE ACCOUNT</Button>
            </FormControl>
            </Box>
        </Box>
        
        <Footer />
    </div>
  )
}
