import React from 'react';
import { Breadcrumbs, Link } from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { styled } from '@mui/system'; 

export const StyledLink = styled(Link)(({ theme }) => ({
  textDecoration: 'none',
  color: theme.palette.primary,
  fontWeight:'bold',
  '&:hover': {
    color: theme.palette.secondary,
  },
  '&:visited': {
    color: theme.palette.primary, 
  },
}));
function Breadcrumb({ items }) {
  return (
    <Breadcrumbs
      separator={<NavigateNextIcon fontSize="small" />}
      aria-label="breadcrumb"
    >
      <StyledLink href="/">
        Home
      </StyledLink>
      {items}
    </Breadcrumbs>
  );
}
export default Breadcrumb;