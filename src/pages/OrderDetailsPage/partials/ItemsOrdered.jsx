import React from 'react'
import { Grid, Typography, Divider, Box, Stack, Button, Skeleton , Chip , useMediaQuery } from '@mui/material';
import { useDataActions } from '../../../hooks/useDataActions';
import { OrderSummary } from '../../../components/OrderSummary/OrderSummary';
import { ProductsCart } from '../../../components/ProductsCart/ProductsCart';
export const ItemsOrdered = ({ orderID }) => {
    const { useCartOrderDetails } = useDataActions();
    const { data: products, isLoading, isError } = useCartOrderDetails(orderID);
    const isSmallScreen = useMediaQuery('(max-width:700px)');
    if (isError) return <p>Error ...</p>;
    return (
        <>
            {isLoading ? <Skeleton variant="rectangular" height={500} />
                : <>
                    <Box sx={{
                        overflowY: 'auto',
                        maxHeight:420,
                        scrollbarWidth: 'thin',
                        direction: 'rtl',
                        '&::-webkit-scrollbar': {
                            width: '8px',
                        },
                        '&::-webkit-scrollbar-track': {
                            backgroundColor: '#ffffff',
                        },
                        '&:hover': {
                            '&::-webkit-scrollbar-thumb': {
                                backgroundColor: '#1B4B66',
                            },
                        },
                    }}>
                        <Box sx={{ direction: 'ltr' }}>
                            <ProductsCart cartItems={products.data} orderpage={true} />
                        </Box>
                    </Box>
                    <Box my={5}>
                        <Typography variant="h5" gutterBottom>Order Information</Typography>
                        <Divider />
                        <Box my={1}></Box>
                        <Grid container spacing={6}>
                            <Grid item xs={12} md={6} lg={4}>
                                <Typography variant="body1" color="text.secondary">Order Details</Typography>
                                <OrderSummary cartData={products} orderpage={true} />
                            </Grid>
                            <Grid item xs={12} md={6} lg={4}>
                                <Typography variant="body1" color="text.secondary" align={isSmallScreen ? 'left' : "center"} >Payment Details</Typography>
                                <Typography variant="body1" align={isSmallScreen ? 'left' : "center"}>Cash on Delivery</Typography>
                            </Grid>
                            <Grid item xs={12} md={12} lg={3}>
                                <Typography variant="body1" color="text.secondary">Address Details</Typography>
                                <Stack direction='row' spacing={5}>
                                    <Typography variant="body1">{products.city}</Typography>
                                    <Chip label="Home" sx={{ borderRadius: '4px' }} />
                                </Stack>
                                <Typography variant="body1" mt={1}>{products.street}</Typography>
                                <Typography variant="body1" mt={1}>{products.state}</Typography>
                                <Typography variant="body1" mt={1}>{products.phone_number}</Typography>
                            </Grid>
                        </Grid>
                        <Box display='flex' justifyContent={'flex-end'} gap={2} my={3}>
                            <Button variant="contained">Reorder</Button>
                            <Button variant="outlined">Add rating</Button>
                        </Box>
                    </Box>
                </>}
        </>
    )
}