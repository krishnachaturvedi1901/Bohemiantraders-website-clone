import React from 'react';
import { CheckCircleIcon } from '@chakra-ui/icons';
import { Box, List, Tabs, TabList, Tab, TabPanel, TabPanels, Text, ListItem, ListIcon, Image } from '@chakra-ui/react';
export function PDdetails(data) {
  return (
    <Box>
      <Tabs w={['100%','100%', '50%']} size='sm' >
        <TabList>
          <Tab>PRODUCT DETAILS</Tab>
          <Tab>PRODUCT FEATURES</Tab>
          <Tab>PRODUCT SIZING</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <Text>{data.details.toUpperCase()}</Text>
          </TabPanel>
          <TabPanel>
            <List spacing={3}>
              {data.features.toString().split(',', 10).map(function (el, i) {
                return <ListItem key={i}>
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
  );
}