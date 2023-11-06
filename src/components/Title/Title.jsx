import { Typography } from '@mui/material';
import React from 'react';

export const Title = ({ text, color }) => {
    const capitalizedText = text
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
    return (
        <Typography variant="h3" component="div" color={color} py={3}>
            {capitalizedText}
        </Typography>
    )
}