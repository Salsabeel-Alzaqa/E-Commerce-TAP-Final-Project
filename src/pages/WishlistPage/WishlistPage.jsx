import React from 'react'
import { useDataActions } from '../../hooks/useDataActions';
import { ProductCard } from '../../components/ProductCard/ProductCard';
import { Box, Grid, Typography} from '@mui/material';
import wishlistImage from '../../assets/images/wishlist.png';
import { Loading } from '../../components/Loading/Loading';
export const WishlistPage = () => {
  const { useWishlistProducts } = useDataActions();
  const { data: products, isLoading, isError } = useWishlistProducts();
  if (isError) return <p>Error ...</p>;
  console.log(products);
  return (
    <Box mt={5}>
      {isLoading ? (
        <Box mb={5}><Loading num={12} /></Box>
      ) : products.message === 'No items in your wishlist yet.' ? (
        <Box sx={{ display: "flex", justifyContent: "center", flexDirection: 'column', alignItems: 'center' }} my={5}>
          <img src={wishlistImage} alt="search fail" width="50%" />
          <Typography variant="h4">
           It seems you have not added any products to for wishlist. 
          </Typography>
        </Box>
      ) : (
        <Grid container spacing={3}>
          {products.products?.map((product, index) => (
            <Grid item xs={12} sm={6} md={6} lg={4} key={index}>
              <ProductCard {...product} />
            </Grid>
          ))}
        </Grid>)}
    </Box>
  )
}