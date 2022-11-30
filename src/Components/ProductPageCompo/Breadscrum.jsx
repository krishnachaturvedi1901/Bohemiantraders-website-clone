import React from 'react'
import styles from "../../Pages/Products/styles.module.css"
import {
    Box,
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
  } from '@chakra-ui/react'

const Breadscrum = () => {
  return (
    <Box>
    <Breadcrumb className={styles.breadScrum}>
    <BreadcrumbItem mr={'.30vw'} >
      <BreadcrumbLink href='/'>HOME</BreadcrumbLink>
    </BreadcrumbItem>
  
    <BreadcrumbItem mr={'.30vw'}>
      <BreadcrumbLink href='/'>WOMEN</BreadcrumbLink>
    </BreadcrumbItem>
  
    <BreadcrumbItem isCurrentPage color={'#272727'} >
      <BreadcrumbLink href='/products'>VIEW-ALL</BreadcrumbLink>
    </BreadcrumbItem>
  </Breadcrumb>
    </Box>
  )
}

export default Breadscrum