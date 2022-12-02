import { Box, Image } from '@chakra-ui/react';
import React from 'react';

export function MoreProduct(data) {
    return (   
        <Box>
        <h2 id='more_product'>MORE FROM THIS COLLECTION</h2>
        <Image boxSize='20%' src={data.img.item1} alt='Dan Abramov' />
        <h3>{data.name.toUpperCase()}</h3>
        <h3>{data.price}</h3>
      </Box> 
    );
}