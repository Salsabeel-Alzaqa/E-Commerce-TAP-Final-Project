import React, { useState, useEffect } from 'react';
import { Grid, Typography, Divider, Box, Stack, Rating, InputBase, InputAdornment, Button, Chip, Snackbar, Alert , CircularProgress } from '@mui/material';
import { ProductPrice } from "../ProductPrice/ProductPrice";
import { QuantityButton } from "../QuantityButton/QuantityButton";
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { ConfirmationModal } from '../ConfirmationModal/ConfirmationModal';
import { useDataActions } from '../../hooks/useDataActions';
import { useWishlist } from '../../hooks/useWishlist';
import { styled } from "@mui/system";
import { NotFound } from '../../pages/NotFound/NotFound';
const StyledChip = styled(Chip)({
  height: '66px',
  width: '109px',
  borderRadius: '4px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
});
export const ProductInfo = ({ name, short_description, ratingCount, rate, discount, price, id }) => {
  const [quantity, setQuantity] = useState(1);
  const [isSnackbarOpen, setSnackbarOpen] = useState(false);
  const [isInCart, setIsInCart] = useState(false);
  const [message, setMessage] = useState('');
  const [isConfirmationModalOpen, setConfirmationModalOpen] = useState(false);
  const { useAddToCart, useCartItems, useRemoveCartItem } = useDataActions();
  const {isInWishlist , AddToWishlist , isAddWishlistProductLoading , isWishlistLoading } = useWishlist(id);
  const { mutateAsync: addToCartMutation, isLoading: isAddProductLoading } = useAddToCart(id);
  const { mutateAsync: removeProductMutation, isLoading: isRemoveProductLoading } = useRemoveCartItem();
  const { data: products, isLoading, isError, refetch } = useCartItems();

  useEffect(() => {
    if (products && products.data !== null) {
      setIsInCart(products.data.some(product => product.productID === id));
    }
  }, [products, id]);

  if (isError) return <NotFound />;
  const handleQuantityChange = (newQuantity) => {
    setQuantity(newQuantity);
  };
  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };
  const openConfirmationModal = () => {
    setConfirmationModalOpen(true);
  };

  const closeConfirmationModal = () => {
    setConfirmationModalOpen(false);
  };
  const handleAddToCart = async () => {
    try {
      await addToCartMutation(Number(quantity));
      refetch();
      setIsInCart(true);
      setMessage('Product added to cart successfully!');
      setSnackbarOpen(true);
    } catch (error) {
      console.error('Error adding to cart:', error);
    }
  };
  const handleRemoveFromCart = async () => {
    try {
      closeConfirmationModal();
      let item = products.data.find(product => product.productID === id);
      await removeProductMutation(item.id);
      refetch();
      setIsInCart(false);
      setMessage('Product removed from cart successfully!');
      setSnackbarOpen(true);
    } catch (error) {
      console.error('Error removing from cart:', error);
    }
  };
  return (
    <>
      <Box flexDirection="column" display='flex' alignItems={'flex-start'} justifyContent={'space-between'} gap={4}>
        <Box>
          <Typography variant="h3">{name}</Typography>
          <Typography variant="h6" color="text.secondary">{short_description}</Typography>
        </Box>
        <Stack direction="row" spacing={2}>
          <Rating name="text-feedback" value={Number(rate)} readOnly precision={0.5} />
          <Typography variant="caption" color="text.secondary" pt={0.5}>({ratingCount}) Ratings</Typography>
        </Stack>
        <ProductPrice price={price} size={"h3"} discount={discount} />
      </Box>
      <Divider />
      <Box flexDirection="column" display='flex' alignItems={'flex-start'} justifyContent={'space-between'} gap={4}>
        <Grid container spacing={2} >
          <Grid item sm={12} md={6} lg={6}>
            <Typography variant="h6">Delivery Details</Typography>
            <Typography variant="body1" color="text.secondary">Check estimated delivery date/pickup option.</Typography>
          </Grid>
          <Grid item sm={12} md={6} lg={6} mt={2}>
            <InputBase fullWidth size="medium" placeholder=" Apply Valid Pincode" disabled endAdornment={
              <InputAdornment position="end">
                <Button color="primary">check</Button></InputAdornment>} sx={{ height: '56px' }} />
          </Grid>
        </Grid>
       {isInCart ? <Box mt={3}></Box> : <Stack direction="row" spacing={3}>
          <Typography variant="h6">Quantity:</Typography>
            <QuantityButton value={quantity} onChange={handleQuantityChange} />
        </Stack>}
        <Box display='flex' alignItems={'center'} justifyContent={'space-around'} sx={{ width: '100%', border: '1px solid #1B4B66', borderRadius: "4px", height: '96px' }}>
          <Box>
            <Typography variant="body1">Get upto 30% Off on order </Typography>
            <Typography variant="body1">value above $100</Typography>
            <Typography variant="body1" color="primary" >Terms & Conditions</Typography>
          </Box>
          <Box>
            <StyledChip label={<div><div>Use code</div><div>ORDER100</div></div>} />
          </Box>
        </Box>
        <Stack direction="row" spacing={3} sx={{ width: '100%', mt: 2 }}>
          {isLoading ? (<Button variant="contained" fullWidth disabled><CircularProgress size={24} /></Button>)
            : (isInCart ? (<Button variant="contained" fullWidth color="error" startIcon={!isRemoveProductLoading && <WorkOutlineOutlinedIcon />} disabled={isRemoveProductLoading}
              onClick={openConfirmationModal}> {isRemoveProductLoading ? (
                <CircularProgress size={24} color="inherit" />) : ("Remove from Cart")}</Button>)
              : (<Button variant="contained" fullWidth startIcon={!isAddProductLoading && <WorkOutlineOutlinedIcon />} onClick={handleAddToCart} disabled={isAddProductLoading}>
                {isAddProductLoading ? (<CircularProgress size={24} color="inherit" />) : ("Add to Cart")}
              </Button>)
            )}
          {isWishlistLoading ? (<Button variant="outlined" fullWidth disabled><CircularProgress size={24} /></Button>)
            : (isInWishlist ? (<Button variant="outlined" fullWidth color="error" startIcon={<FavoriteIcon />}>Remove from Wishlist</Button>)
              : (<Button variant="outlined" fullWidth startIcon={!isAddWishlistProductLoading && <FavoriteBorderOutlinedIcon />} onClick={AddToWishlist} disabled={isAddWishlistProductLoading}>
                {isAddWishlistProductLoading ? (<CircularProgress size={24} color="inherit" />) : ("Add to Wishlist")}
              </Button>)
            )}
        </Stack>
      </Box>
      <Snackbar
        anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
        open={isSnackbarOpen}
        autoHideDuration={3000}
        onClose={handleSnackbarClose}
      >
        <Alert onClose={handleSnackbarClose} severity="success" sx={{ width: '100%' }}>{message}</Alert>
      </Snackbar>
      <ConfirmationModal
        isOpen={isConfirmationModalOpen}
        onClose={closeConfirmationModal}
        onConfirm={handleRemoveFromCart}
        message={`Are you sure that you want to remove '${name}' from your cart?`}
      />
    </>
  );
};