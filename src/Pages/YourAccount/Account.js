import React,{useState,useEffect} from 'react';
import { Box, Grid, Text, Tabs, Image, Tab, TabList, TabPanel, TabPanels } from '@chakra-ui/react'
import { Link, Outlet, useNavigate } from 'react-router-dom';

function Account(props) {
    const [State, setState] = useState('ACCOUNT')
    const navigate=useNavigate()
    useEffect(() => {
        navigate('orders')
    }, [])
    
    return (
        <Box border={'1px solid red'}>
            <Box>
               
                <Text textAlign={'left'}>HOME  /  YOUR ACCOUNT  /  {State}</Text>
                <Text mt={'30px'} textAlign={'left'} fontSize={'48px'} color={'black 300'} fontWeight={'20'}>{State}</Text>
            </Box>
            <Grid>
                <Tabs align='center'>
                    <TabList onClick={(e)=>{setState(e.target.innerText)}}>
                        <Tab> <Link to={'orders'}>Orders</Link></Tab>
                        <Tab> <Link to={'returns'}>Returns</Link></Tab>
                        <Tab> <Link to={'messages'}>Messages</Link></Tab>
                        <Tab> <Link to={'addresses'}>Addresses</Link></Tab>
                        <Tab> <Link to={'wishlist'}>Wish List</Link></Tab>
                        <Tab> <Link to={'recentlyviewed'}>Recently Viewed</Link></Tab>
                        <Tab> <Link to={'accountsettings'}>Account Settings</Link></Tab>
                        <Tab> <Link to={'singout'}>Sign Out</Link></Tab>
                    </TabList>
                    <TabPanels>

                    <TabPanel>
                        </TabPanel>
                    </TabPanels>
                </Tabs>
                        <Outlet/>
            </Grid>
        </Box>
    );
}

export default Account;