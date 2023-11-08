import React  from "react";
import { MockShopByBrand } from '../../assets/data/data';
import { Title } from "../Title/Title";
import { Grid , Paper , Container} from '@mui/material';
import { styled } from '@mui/system'; 
import { useQueryParam } from "../../hooks/useQueryParam";

const StyledPaper = styled(Paper)(({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '168px',
  width: '168px',
  radius: '16px', 
  backgroundColor: '#F1F1F1',
  transition: 'transform 0.2s',
  '&:hover': {
    transform: 'scale(1.1)',
  },
}));
export const ShopByBrand = () => {
  
  return (
    <Container maxWidth="xl">
    <Title text='Shop By Brand' color='black' />
    <Grid container spacing={2}>
      {
        MockShopByBrand.map((item, index) => {
          return( <Grid item key={index} xs={6} sm={4} md={3} lg={2}><BrandItem {...item} /></Grid>)
        })
      }
    </Grid>
  </Container>)
};
const BrandItem = ({ brandImage, brandName }) => {
  const { handleMoveToListingPage } = useQueryParam('brand');
  return (
    <StyledPaper onClick={() => handleMoveToListingPage(brandName)}>
      <img src={brandImage} alt='brand' style={{ maxWidth: '100%', maxHeight: '100%' }} />
    </StyledPaper>
  )
}