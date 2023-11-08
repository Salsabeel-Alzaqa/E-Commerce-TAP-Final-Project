import React from 'react'
import { Box } from '@mui/material';

export const ProductDescription = ({ description }) => {
  return (
    <Box width={'80%'} mb={10}>
      {description}
    </Box>
  )
}