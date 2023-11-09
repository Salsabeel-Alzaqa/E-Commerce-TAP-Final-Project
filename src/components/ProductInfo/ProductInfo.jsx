import React, { useState } from 'react';
import { Grid, Typography, Divider, Box , Stack , Rating , InputBase ,InputAdornment , Button ,Chip } from '@mui/material';
import {ProductPrice} from "../ProductPrice/ProductPrice";
import { QuantityButton } from "../QuantityButton/QuantityButton";
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import { styled } from "@mui/system";

const StyledChip = styled(Chip)(({ theme }) => ({
  height: '66px',
  width: '109px',
  borderRadius: '4px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
}));
export const ProductInfo = ({ name, short_description, ratingCount, rate, discount, price }) => {
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (newQuantity) => {
    setQuantity(newQuantity);
  };
  return (
    <>
      <Box flexDirection="column" display='flex' alignItems={'flex-start'} justifyContent={'space-between'} gap={4}>
        <Box>
          <Typography variant="h3">{name}</Typography>
          <Typography variant="h6" color="text.secondary" >{short_description}</Typography>
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
            <Typography variant="body1" color="text.secondary" >Check estimated delivery date/pickup option.</Typography>
          </Grid>
          <Grid item sm={12} md={6} lg={6} mt={2}>
            <InputBase fullWidth size="medium" placeholder=" Apply Valid Pincode" disabled endAdornment={
              <InputAdornment position="end">
                <Button color="primary">check</Button></InputAdornment>} sx={{ height: '56px' }} />
          </Grid>
        </Grid>
        <Stack direction="row" spacing={3}>
          <Typography variant="h6">Quantity:</Typography>
          <QuantityButton value={quantity} onChange={handleQuantityChange} />
        </Stack>
        <Box display='flex' alignItems={'center'} justifyContent={'space-around'} sx={{ width: '100%' ,border:'1px solid #1B4B66' , borderRadius:"4px",height:'96px'}}>
          <Box>
            <Typography variant="body1">Get upto 30% Off on order </Typography>
            <Typography variant="body1">value above $100</Typography>
            <Typography variant="body1" color="primary" >Terms & Conditions</Typography>
          </Box>
          <Box>
            <StyledChip
              label={
                <div>
                  <div>Use code</div>
                  <div>ORDER100</div>
                </div>
              }
            />
          </Box>
        </Box>
        <Stack direction="row" spacing={3} sx={{ width: '100%' , mt:2 }}>
          <Button variant="contained" fullWidth startIcon={<WorkOutlineOutlinedIcon />}>
            Add to Cart
          </Button>
          <Button variant="outlined" fullWidth startIcon={<FavoriteBorderOutlinedIcon />} >
            Add to Favorites
          </Button>
        </Stack>
      </Box>
    </>
  )
}