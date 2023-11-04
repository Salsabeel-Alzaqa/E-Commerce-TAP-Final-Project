import { Typography } from '@mui/material';
import React from 'react';

export const Title = ({ text, color}) => {
    return (
        <Typography variant="h3" component="div" color={color} py={3}>
            {text}
        </Typography>
    )
}