import { Box, Button, Flex, Input, Spacer } from '@chakra-ui/react'
import React from 'react'
import Footer from '../Components/Footer'
import { Navbar } from '../Components/Navbar'
import "./Login.css"
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
  } from '@chakra-ui/react'
  import { UnorderedList,ListItem } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useEffect } from 'react'

const newData = {
    email:"",
    password:""

}
export default function Login() {
    const[form_data, setFormData] = useState(newData);
    const[usersData, setUsersData] = useState([]);
    const handleChange = (e) => {
        const { value,  name } = e.target;
        setFormData({...form_data,[name]:value})
    }
    
    const getData = () => {
        fetch(`https://bohemian-server.onrender.com/accounts`)
        .then((res) => res.json())
        .then((resData) => setUsersData(resData))
    }

    useEffect(()=>{
        getData()
    },[])
    const handleClick = () => {
        usersData.map((itmData) => {
            if(form_data.email === itmData.email && form_data.password === itmData.password){
                handleToggle(itmData.id)
            }
        })
        
    }

    const handleToggle = (id) => {
        const payload = {
          status : !usersData.find((el) => el.id === id)?.status
        }
        fetch(`http://localhost:3020/todos/${id}`,{
          method:"PATCH",
          body:JSON.stringify(payload),
          headers:{
            "Content-Type": "application/json"
          }
        })
        .then(() => getData())
      }

    console.log(usersData)
  return (
    <div>
        <Box>
            <Navbar />
            <Box w="90%" m="auto">
                <p className="heading">SIGN IN</p>
                <Flex m={"0 auto 25px"} justifyContent={"space-between"}>
                    <Box mt={"40px"}>
                    <FormControl>
                        <FormLabel letterSpacing={"1.25px"} color={"grey"} fontSize={"13px"} fontWeight="500">EMAIL ADDRESS:</FormLabel>
                        <Input onChange={handleChange} name="email" value={form_data.email} border={"1px solid grey"}
                        padding="8px" width={650} fontSize={"15px"} borderRadius="0px" variant={'unstyled'} type='email' />
                        <FormLabel mt={8} letterSpacing={"1.25px"} color={"grey"} fontSize={"13px"} fontWeight="500">PASSWORD:</FormLabel>
                        <Input onChange={handleChange} name="password" value={form_data.password} border={"1px solid grey"}
                        padding="8px" width={650} fontSize={"15px"} borderRadius="0px" variant={'unstyled'} type='password' />
                        <br />
                        <Button onClick={handleClick} id="btn2" fontSize={"13px"} letterSpacing={"1.25px"} fontWeight={"400"} borderRadius={0} color={"white"} backgroundColor={"black"} mt={7}>SIGN IN</Button>
                    </FormControl>
                    </Box >
                    <Spacer />
                    <Box mt={"54px"} backgroundColor={"RGBA(0, 0, 0, 0.04)"} padding="20px" width={"100%"} ml={"30px"}>
                    <p className="heading_2">NEW CUSTOMER?</p>
                   <p className="login_ul"> Create an account with us and you'll be able to:</p>
                    <UnorderedList className='login_ul' ml={"40px"}>
                        <ListItem>Check out faster</ListItem>
                        <ListItem>Save multiple shipping addresses</ListItem>
                        <ListItem>Access your order history</ListItem>
                        <ListItem>Track new orders</ListItem>
                        <ListItem>Save items to your wish list</ListItem>
                    </UnorderedList>
                   <Link to="/signUp"> <Button id="btn" fontSize={"13px"} letterSpacing={"1.25px"} fontWeight={"400"} borderRadius={0} color={"white"} backgroundColor={"black"} mt={7}>CREATE ACCOUNT</Button> </Link>
                    </Box>
                </Flex>
            </Box>
            <Footer />
        </Box>
    </div>
  )
}
