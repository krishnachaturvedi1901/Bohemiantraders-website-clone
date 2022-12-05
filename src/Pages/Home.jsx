import React from 'react'
import Styles from "./Home.module.css"
// import {Link} from "react-router-dom"
import {  Box, Grid, GridItem, Text } from '@chakra-ui/layout'
import { Image } from '@chakra-ui/image'
// import {} 

export default function Home() {
  return (
    <div width="100%">
        <Box className={Styles.top}>
            <h5>FREE SHIPPING FOR ALL DOMESTIC AUSTRALIAN ORDERS OVER $250</h5>
        </Box>
        
        <Box  m={"0 auto 50px"} width={"98%"}><Image src="https://cdn11.bigcommerce.com/s-9srn18to/images/stencil/original/image-manager/carousel-black-friday-2022.jpg?t=1668994561"/></Box>
        
        <Box mb={"50px"}>
        <Grid templateColumns={['repeat(1,1fr)','repeat(4, 1fr)']} >
            <GridItem w={[480,180,400]}  style={{backgroundImage:`url(https://cdn11.bigcommerce.com/s-9srn18to/images/stencil/original/image-manager/cta-1-black-friday-2022.jpg?t=1668994764)`}} className={Styles.grid_item} >
                <p  className={Styles.grid_child} style={{paddingTop:"520px", paddingLeft:"30px", fontSize:"12px", fontWeight:"550", color:"white",}}>SHOP WOMEN</p>
            </GridItem>
            <GridItem w={[480,180,400]} style={{backgroundImage:`url(https://cdn11.bigcommerce.com/s-9srn18to/images/stencil/original/image-manager/cta-2-black-friday-2022.jpg?t=1668994796)`}} className={Styles.grid_item} >
                <p  className={Styles.grid_child} style={{paddingTop:"520px",paddingBottom:"20px" ,paddingLeft:"30px", fontSize:"12px", fontWeight:"550", color:"white",}}>SHOP DRESSES</p>
            </GridItem>
            <GridItem w={[480,180,400]} style={{backgroundImage:`url(https://cdn11.bigcommerce.com/s-9srn18to/images/stencil/original/image-manager/cta-3-black-friday-2022.jpg?t=1668994879)`}} className={Styles.grid_item} >
                <p  className={Styles.grid_child} style={{paddingTop:"520px", paddingLeft:"30px", fontSize:"12px", fontWeight:"550", color:"white",}}>SHOP EVENT WEAR</p>
            </GridItem>
             <GridItem w={[480,180,400]} style={{backgroundImage:`url(https://cdn11.bigcommerce.com/s-9srn18to/images/stencil/original/image-manager/cta-4-black-friday-2022.jpg?t=1668994937)`}} className={Styles.grid_item} >
                <p  className={Styles.grid_child} style={{paddingTop:"520px", paddingLeft:"30px", fontSize:"12px", fontWeight:"550", color:"white",}}>SHOP COLOUR BLOCK</p>
            </GridItem>
        </Grid>
        </Box>
        <Box mb={"50px"} width="80%" margin="auto">
        <Grid templateColumns={['repeat(2,1fr)','repeat(4, 1fr)']} >
            <GridItem className={Styles.cart_home} style={{backgroundImage:`url(https://cdn11.bigcommerce.com/s-9srn18to/images/stencil/500x659/products/2663/27526/ETCH-SIZING-TEMPLATE4_05__62410.1661734412.jpg?c=2)`}}>
                <button className={Styles.cart_home_btn}>QUICK VIEW</button>
            </GridItem>
            <GridItem className={Styles.cart_home} style={{backgroundImage:`url(https://cdn11.bigcommerce.com/s-9srn18to/images/stencil/500x659/products/2664/27667/ETCH-SIZING-TEMPLATE2-EDIT_01__27470.1662408093.jpg?c=2)`}}>
                <button className={Styles.cart_home_btn}>QUICK VIEW</button>
            </GridItem>
            <GridItem className={Styles.cart_home} style={{backgroundImage:`url(https://cdn11.bigcommerce.com/s-9srn18to/images/stencil/500x659/products/2720/28098/ETCH-SIZING-TEMPLATE6_03__71555.1664255984.jpg?c=2)`}}>
                <button className={Styles.cart_home_btn}>QUICK VIEW</button>
            </GridItem>
            <GridItem className={Styles.cart_home} style={{backgroundImage:`url(https://cdn11.bigcommerce.com/s-9srn18to/images/stencil/500x659/products/2708/28172/EDIT-ETCH-SIZING-TEMPLATE5_04__45675__69453.1664762183.jpg?c=2)`}}>
                <button className={Styles.cart_home_btn}>QUICK VIEW</button>
            </GridItem>
        </Grid>
        </Box>
        <Box mb={"50px"}>
            <Image  src="https://cdn11.bigcommerce.com/s-9srn18to/images/stencil/original/image-manager/l-black-friday.jpg?t=1668994655"/>
        </Box>
        <Text mb={"50px"} fontSize='5xl' fontWeight="300" textAlign="center"> Explore</Text>

        <Box mb={"100px"}>
            <Grid gap={1.5}  templateColumns = {['repeat(2,1fr),repeat(4,1fr)']}>
            <GridItem colStart={1} colEnd={2} style={{backgroundImage:`url(https://cdn11.bigcommerce.com/s-9srn18to/images/stencil/original/image-manager/cta-5-black-friday-2022.jpg?t=1668994999)`}} className={Styles.grid_item} >
                <p  className={Styles.grid_child} style={{paddingTop:"520px",paddingBottom:"20px" ,paddingLeft:"30px", fontSize:"12px", fontWeight:"550", color:"white",}}>SHOP MINI</p>
            </GridItem>
            <GridItem colStart={2} colEnd={3} style={{backgroundImage:`url(https://cdn11.bigcommerce.com/s-9srn18to/images/stencil/original/image-manager/cta-6-black-friday-2022.jpg?t=1668995058)`}} className={Styles.grid_item} >
                <p  className={Styles.grid_child} style={{paddingTop:"520px",paddingBottom:"20px" ,paddingLeft:"30px", fontSize:"12px", fontWeight:"550", color:"white",}}>SHOP SEPERATES</p>
            </GridItem>
            <GridItem colStart={3} colEnd={5} style={{backgroundImage:`url(https://cdn11.bigcommerce.com/s-9srn18to/images/stencil/original/image-manager/cta-7-black-friday-2022.jpg?t=1668995111)`}} className={Styles.grid_item} >
                <p  className={Styles.grid_child} style={{paddingTop:"520px",paddingBottom:"20px" ,paddingLeft:"30px", fontSize:"12px", fontWeight:"550", color:"white",}}>SHOP TOPS</p>
            </GridItem>
            </Grid>
        </Box>
        <Box mb={"50px"} padding={[2,5,20]} className={Styles.home_about_us}>
            <Grid gridTemplateColumns={['repeat(1,1fr)','repeat(2, 1fr)']}>
                <GridItem > <Text  className={Styles.home_about_us_child1} textAlign={['center','left']}  fontSize={['xl','3xl','4xl']} padding={[0,15]} fontWeight="300"> MADE FOR THE MODERN BOHEMIAN </Text></GridItem>
                <GridItem textAlign={['center','left']}  className={Styles.home_about_us_child2}>We blend classic, fashion forward pieces including elevated basics with bohemian detailing. Since our inception, our aim has been to provide size inclusive fashion basics for the modern bohemian. We seek to be an environmentally and socially responsible company; as such we work closely with our suppliers to ensure ethical conditions for workers. We are continually working towards providing the best clothing and accessories, with the least environmental and social harm possible.
                    <br />
                    <button  className={Styles.home_about_us_btn}>ABOUT US</button>
                </GridItem>
            </Grid>
        </Box>
        <Box>
            <Grid gridTemplateColumns={'repeat(6, 1fr)'}>
                <GridItem>
                    <Image src="https://scontent.cdninstagram.com/v/t51.29350-15/316889217_1122350291976609_6973614870767317957_n.webp?stp=dst-jpg&_nc_cat=105&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=GMFtGL6B-pwAX-YTWmd&_nc_ht=scontent.cdninstagram.com&edm=AM6HXa8EAAAA&oh=00_AfCs7VACO1nzaVlbjlVIf7ayrZehTYwZR9Dwl5wpTW_-AQ&oe=6389693F"/>
                </GridItem>
                <GridItem>
                    <Image src="https://scontent.cdninstagram.com/v/t51.29350-15/317189804_5938660352866243_3791055026868171544_n.webp?stp=dst-jpg&_nc_cat=111&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=ULw2Cae_7t4AX-vYO0d&_nc_ht=scontent.cdninstagram.com&edm=AM6HXa8EAAAA&oh=00_AfC1F2OQqm8ggL6tlC10_1EvBdWWkTRK5rFTdTEmFseKaQ&oe=63897EC5"/>
                </GridItem>
                <GridItem>
                    <Image src="https://scontent.cdninstagram.com/v/t51.29350-15/317024633_410135287891453_2118824993974156094_n.webp?stp=dst-jpg&_nc_cat=104&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=6qLYfM_f0fQAX8Twiks&_nc_ht=scontent.cdninstagram.com&edm=AM6HXa8EAAAA&oh=00_AfD18AlObdDHGVrSVY3QQwAK_2qQpO0z8l8RGJwJ57v3BQ&oe=63892E0C"/>
                </GridItem>
                <GridItem>
                    <Image src="https://scontent.cdninstagram.com/v/t51.29350-15/317029554_662712628811726_6331755746170063126_n.webp?stp=dst-jpg&_nc_cat=108&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=LL2a6TVVYsIAX9dNZPY&_nc_ht=scontent.cdninstagram.com&edm=AM6HXa8EAAAA&oh=00_AfBmcWkzk1INdqCrjyza395Pazy4niBlOc4qjza9uKml1Q&oe=63899940"/>
                </GridItem>
                <GridItem>
                    <Image src="https://scontent.cdninstagram.com/v/t51.29350-15/316377894_1297740267669908_4016764930688340545_n.webp?stp=dst-jpg&_nc_cat=108&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=FUsT_XzuZwMAX8Y-tD_&_nc_ht=scontent.cdninstagram.com&edm=AM6HXa8EAAAA&oh=00_AfA8UTBpKWcTKCAoAstXns4VLUPOQaYrG4it40Fc_Ysu2g&oe=6388CF0F"/>
                </GridItem>
                <GridItem>
                    <Image src="https://scontent.cdninstagram.com/v/t51.29350-15/317032154_5602111373159084_389692270663555649_n.webp?stp=dst-jpg&_nc_cat=101&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=5W7lxmT5a2IAX_ODCRC&_nc_ht=scontent.cdninstagram.com&edm=AM6HXa8EAAAA&oh=00_AfD6cuhjc6V4LoNYHvv34rjcrFRNJmQIYpneGBj0llEM8g&oe=6389A8F7"/>
                </GridItem>
            </Grid>
        </Box>
        
    </div>
  )
}