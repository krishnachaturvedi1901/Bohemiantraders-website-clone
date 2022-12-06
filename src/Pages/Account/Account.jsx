import { Box, Flex, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'

export default function Account() {
    const[log_user_data,setLogUserData] = useState([])

    const getData = () => {
        fetch(`http://localhost:8001/accounts`)
        .then((res) => res.json())
        .then((resData) => setLogUserData(resData))
    }

    useEffect(() => {
        getData();
    },[])
    console.log(log_user_data)
  return (
    <Box w={"80%"} m={"auto"}>
        <Flex>
            <Box>
                <Text fontSize={"30px"}>Your Orders</Text>
                {
                    log_user_data.map((e) => {
                        
                    })
                }
            </Box>
        </Flex>
    </Box>
  )
}
