import React,{useState} from 'react';
import {ArrowLeftIcon, ArrowRightIcon} from '@chakra-ui/icons'
import {Image, Grid, GridItem} from '@chakra-ui/react'
function PDimg(props) {
    let data = props.data;
    let [slideIndex, setslideIndex] = useState(1)
    React.useEffect(() => {
        showSlides(slideIndex);
      }, [plusSlides])
      function plusSlides(n) {
        let next = document.getElementsByClassName('next');
        let prev = document.getElementsByClassName("prev");
        if (slideIndex + n < 1) { setslideIndex(1) }
        else if (slideIndex + n >= 3) { setslideIndex(3) }
        else { setslideIndex(slideIndex = slideIndex + n) }
        showSlides(slideIndex);
      }
      function showSlides(n) {
        let i;
        let slides = document.getElementsByClassName("mySlides");
        if (n > slides.length) { slideIndex = 1 }
        if (n < 1) { slideIndex = slides.length }
        for (i = 0; i < slides.length - 1; i++) {
          slides[i].style.display = "none";
          slides[i + 1].style.display = "none";
        }
        slides[slideIndex - 1].style.display = "flex";
      }
    return (
        <Grid height={{base:'100%',md:'100%'}}  className='slideshow-container' templateColumns={{base:'repeat(1, 1fr)'}}>
          <GridItem className='mySlides fade'>
            <Image height={{base:'100%',md:'50%'}} src={data.img.item2} h='100%' alt='Dan Abramov' />
            <Image height={{base:'100%',md:'50%'}}  src={data.img.item1} h='100%' alt='Dan Abramov' />
          </GridItem>
          <GridItem className='mySlides fade'>
            <Image height={{base:'100%',md:'100%'}} boxSize={{base:'100%',md:'50%'}} src={data.img.item2} h='100%' alt='Dan Abramov' />
            <Image height={{base:'100%',md:'100%'}} boxSize={{base:'100%',md:'50%'}} src={data.img.model1} h='100%' alt='Dan Abramov' />
          </GridItem>
          <GridItem className='mySlides fade'>
            <Image height={{base:'100%',md:'100%'}} boxSize={{base:'100%',md:'50%'}} src={data.img.model1} h='100%' alt='Dan Abramov' />
            <Image height={{base:'100%',md:'100%'}} boxSize={{base:'100%',md:'50%'}} src={data.img.model2} h='100%' alt='Dan Abramov' />
          </GridItem>
          <a className="prev" onClick={() => { plusSlides(-1) }}><ArrowLeftIcon /></a>
          <a className="next" onClick={() => { plusSlides(1) }}><ArrowRightIcon /></a>
        </Grid>
    );
}

export default PDimg;