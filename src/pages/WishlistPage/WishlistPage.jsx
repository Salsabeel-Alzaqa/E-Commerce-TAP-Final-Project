import React from 'react'
import { useDataActions } from '../../hooks/useDataActions';
import { ProductCard } from '../../components/ProductCard/ProductCard';
import { Box, Grid, Typography, Container, Divider } from '@mui/material';
import wishlistImage from '../../assets/images/wishlist.png';
import { Loading } from '../../components/Loading/Loading';
import { SideNav } from '../../components/SideNav/SideNav';
import { Title } from '../../components/Title/Title';
import  Breadcrumb  from '../../components/Breadcrumbs/Breadcrumbs';
const breadcrumbItems = [
  <Typography key="2">
    User Profile
  </Typography>,
  <Typography underline="hover" key="3">My Wishlist</Typography>
];
export const WishlistPage = () => {
  const { useWishlistProducts } = useDataActions();
  const { data: products, isLoading, isError } = useWishlistProducts();
  if (isError) return <p>Error ...</p>;
  return (
    <Container maxWidth="xl">
      <Box mt={3}>
        <Breadcrumb items={breadcrumbItems} />
          <Title text={'My Wishlist'} color={'primary'} />
      </Box>
      <SideNav selectedItem={2}>
        <Typography variant="h5" gutterBottom>My Wishlist</Typography>
        <Divider />
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
      </SideNav>
    </Container>
  )
}