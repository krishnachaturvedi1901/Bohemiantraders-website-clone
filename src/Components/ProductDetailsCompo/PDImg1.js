import { Image } from '@chakra-ui/react';
import React from 'react';
import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";
const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 768 },
      items: 2,
      slidesToSlide: 1 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 768, min: 464 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };
function PDImg1(props) {
    let data = props.data
    return (
        <div style={{ 'width': '700PX',alignItems:'center' }}>
            <Carousel
                
                responsive={responsive}
               
            >
                <Image m={'auto'} src={data.img.item1} alt='Dan Abramov' />
                <Image m={'auto'} src={data.img.item2} alt='Dan Abramov' />
                <Image m={'auto'} src={data.img.model1} alt='Dan Abramov' />
                <Image m={'auto'} src={data.img.model2} alt='Dan Abramov' />
            </Carousel>;
        </div>
    );
}

export default PDImg1;