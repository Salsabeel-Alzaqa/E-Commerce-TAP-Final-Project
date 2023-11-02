import React from "react";
import { MockShopByBrand } from '../../assets/data/data';
import Title from "../Title/Title";
import { Grid } from '@mui/material';

export const ShopByBrand = () => {
  
  return (<>
    <Title text='Shop By Brand' color='black' />
    <Grid container spacing={2}>
      {
        MockShopByBrand.map((item, index) => {
          return( <Grid item xs={6} sm={4} key={index}><BrandItem {...item} /></Grid>)
        })
      }
    </Grid>
  </>)
};


const BrandItem = ({ brandImage, brandName }) => {
  return (
    <>
      
    </>
  )
}