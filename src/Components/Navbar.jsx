import { Button } from "@chakra-ui/button";
import { Image } from "@chakra-ui/image";
import { Box, Container, Flex, Spacer, Stack } from "@chakra-ui/layout";
import { Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/menu";
import { Select } from "@chakra-ui/select";
import "./Navbar.css"

export const Navbar = () =>{
    return(
            <Box style={{position:"sticky"}}>
            <Flex className="header_box_top" w={"100%"}>
                <Box style={{textAlign:"center"}} w={"38%"} p='2'>
                    <Flex className="header_flex" 
                     wrap={'wrap'}>
                        <a  href="#">WHAT'S NEW</a>
                        <a  href="#"> WOMEN</a>
                        <a  href="#"> DRESSES</a>
                        <a  href="#">ATHLETIC</a>
                        <a  href="#">CURVE</a>
                        <a  href="#">CLASSICS</a>
                        <a  href="#">CAMPAIGN</a>
                        <a  href="#">SUSTAINABLE</a>
                    </Flex>
                </Box>
                <Spacer />
                <Box p='2' mt={"10px"} ml={"-25rem"}>
                    <Image w={"350px"} src="https://cdn11.bigcommerce.com/s-9srn18to/stencil/565de430-5109-013b-39dd-52beef6de530/e/8e215d00-3d2b-013b-c3ef-3ea28820c29e/img/logo.gif" />
                </Box>
                <Spacer />
                <Box p='2'>
                <Select style={{fontSize: "11px",
                letterSpacing: "1px",
                border:"none",
                fontWeight:"600"
                }}  className="header_currency_change">
                    <option value='option2'>EUR</option>
                    <option value='option1'>USD</option>
                    <option value='option3'>NZD</option>
                </Select>
                </Box>
            </Flex>
            </Box>
    )
}