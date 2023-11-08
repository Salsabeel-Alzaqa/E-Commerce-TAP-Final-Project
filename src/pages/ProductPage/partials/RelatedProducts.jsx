import React from 'react';
import { useParams } from 'react-router-dom';
import { useDataActions } from '../../../hooks/useDataActions';
import { Loading } from "../../../components/Loading/Loading";
import { ProductCard } from "../../../components/ProductCard/ProductCard";
import { Grid , Typography , Divider , Box } from '@mui/material';

export const RelatedProducts = () => {
  const { id } = useParams();
  const { useProductDetails } = useDataActions();
  const { data: products, isLoading, isError } = useProductDetails(id,'related');
  if (isError) return <p>Error ...</p>;
  return (
    <>
      <Box mb={2}>
        <Typography variant="h2">You may also like</Typography>
        <Divider light />
      </Box>
      {isLoading ? <Loading num={4} /> :
        (<Grid container spacing={2} mb={10}>{products.map((product, index) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
            <ProductCard {...product} chipLabel={'Trending'} lessInfo={true} />
          </Grid>
        ))}
        </Grid>)}
    </>
  );
}