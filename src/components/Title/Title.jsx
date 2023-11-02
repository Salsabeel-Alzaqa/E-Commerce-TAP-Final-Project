import { Typography } from '@mui/material';
import React from 'react';

const Title = ({ text }) => {
    return (
        <Typography variant="h3" component="div">
            {text}
        </Typography>
    )
}

export default Title;