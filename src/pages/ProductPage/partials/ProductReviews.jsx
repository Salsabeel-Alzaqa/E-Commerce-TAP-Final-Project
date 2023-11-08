import React from 'react'
import { useParams } from 'react-router-dom';
import { useDataActions } from '../../../hooks/useDataActions';
import { Stack, Typography, Divider, Box, Skeleton , Chip } from '@mui/material';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import StarIcon from '@mui/icons-material/Star';
import { styled } from '@mui/system'; 
const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 27,
  width:'90%',
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: theme.palette.primary,
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 27,
    backgroundColor: theme.palette.secondary,
  },
}));
const ratingsItem = [
  { 'num': '5.0', 'value': 80, },
  { 'num': '4.0', 'value': 50, },
  { 'num': '3.0', 'value': 20, },
  { 'num': '2.0', 'value': 40, },
  { 'num': '1.0', 'value': 10, }];
export const ProductReviews = ({ productDescription, productName, productRating }) => {
  const { id } = useParams();
  const { useProductDetails } = useDataActions();
  const { data: products, isLoading, isError } = useProductDetails(id, 'reviews');
  const formatDate = (inputDate) => {
    const formattedDate = new Date(inputDate).toLocaleDateString("en-GB", {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    });
    return formattedDate;
  }
  if (isError) return <p>Error ...</p>;
  return (
    <>
      <Box mb={2}>
        <Typography variant="h2" mb={2}>{productName}</Typography>
        <Typography variant="h4" mb={2} color="text.secondary">{productDescription}</Typography>
        <Divider light />
      </Box>
      {isLoading ? <Skeleton height={'150px'} animation="wave" variant="rectangular" /> :
        (<>
          <Box flexDirection="row" display='flex' alignItems={'center'} justifyContent={'flex-start'} gap={2} mb={1}>
            <Stack direction="row">
              <Typography variant="h6" sx={{ fontWeight: 'bold' }}>{productRating}</Typography>
              <Box mt={0.5}><StarIcon sx={{ color: '#FF8C4B' }} /></Box>
            </Stack>
            <Typography variant="h6" sx={{ fontWeight: 'bold' }}>Average Rating</Typography>
          </Box>
          {ratingsItem.map((item, index) => (
            <Box flexDirection="row" display='flex' alignItems={'center'} justifyContent={'flex-start'} gap={2} key={index}>
              <Typography variant="h6" color="text.secondary" >{item.num}</Typography>
              <BorderLinearProgress variant="determinate" value={item.value} />
            </Box>)
          )}
          <Box mt={5} mb={10}>
            {products.reviews.map((product, index) => (
              <Box key={index} mb={5}>
                <Box flexDirection="row" display='flex' alignItems={'center'} justifyContent={'flex-start'} gap={2} mb={2}>
                  <Chip label={<span style={{ display: 'flex', alignItems: 'center', fontWeight: 'bold' }}>{product.rating} <StarIcon sx={{ fontSize: 18, color: '#FF8C4B' }} />
                  </span>} sx={{ padding: '4px', borderRadius: '4px', height: '38px', }} />
                  <Stack>
                    <Typography variant="body1" sx={{ fontWeight: 'bold' }}>{product.user.full_name}</Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ fontWeight: 'bold' }}>{formatDate(product.createdAt)}</Typography>
                  </Stack>
                </Box>
                <Typography variant="body1">{product.description}</Typography>
              </Box>
            ))}
          </Box>
        </>)}
    </>
  );
}