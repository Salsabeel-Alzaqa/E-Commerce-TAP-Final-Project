import React from 'react'
import { Grid, Typography, Divider, Box, Stack, Button } from '@mui/material';
import { useDataActions } from '../../hooks/useDataActions';
import { useParams } from 'react-router-dom';
import { OrderSummary } from '../../components/OrderSummary/OrderSummary';
export const OrderDetailsPage = () => {
  let { orderID } = useParams();
  const { useCartOrderDetails } = useDataActions();
  const { data: products, isLoading, isError } = useCartOrderDetails(orderID);
  console.log(products)
  
  return (
      <div>
      details
      {isLoading ? <></>:<OrderSummary cartData={products.data} />}
    </div>
  )
}