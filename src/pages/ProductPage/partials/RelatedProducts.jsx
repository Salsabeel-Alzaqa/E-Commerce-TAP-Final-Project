import React from 'react';
import { useParams } from 'react-router-dom';
import { useDataActions } from '../../../hooks/useDataActions';
import { Loading } from "../../../components/Loading/Loading";
import { ProductCard } from "../../../components/ProductCard/ProductCard";
import { Grid, Typography, Divider, Box } from '@mui/material';
import { useMediaQuery } from '@mui/material';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
const responsive = {
  tablet: {
    breakpoint: { max: 900, min: 500 },
    items: 3,
    slidesToSlide: 1
  },
  mobile: {
    breakpoint: { max: 500, min: 0 },
    items: 1,
    slidesToSlide: 1
  }
};
export const RelatedProducts = () => {
  const { id } = useParams();
  const { useProductDetails } = useDataActions();
  const isSmallScreen = useMediaQuery('(max-width:900px)');
  const { data: products, isLoading, isError } = useProductDetails(id,'related');
  if (isError) return <p>Error ...</p>;
  return (
    <>
      <Box mb={2}>
        <Typography variant="h2">You may also like</Typography>
        <Divider light />
      </Box>
      {isLoading ? <Loading num={4} /> :
        isSmallScreen ? (<Carousel showDots={false} removeArrowOnDeviceType={["tablet", "mobile"]} responsive={responsive} infinite={true}>
          {products.map((product, index) => (
            <Box key={index} mr={1}><ProductCard {...product} chipLabel={'Trending'} lessInfo={true} /></Box>
        ))}
        </Carousel>) : (<Grid container spacing={2} mb={10}>{products.map((product, index) => (
          <Grid item md={4} lg={3} key={index}>
            <ProductCard {...product} chipLabel={'Trending'} lessInfo={true} />
          </Grid>
        ))}
        </Grid>)}
    </>
  );
}