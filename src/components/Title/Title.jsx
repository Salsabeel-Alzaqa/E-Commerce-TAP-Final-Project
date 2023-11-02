import { Typography } from '@mui/material';
import React from 'react';

const Title = ({ text, color }) => {
    return (<Typography variant="h1" sx={{ color: color }}>{text}</Typography>)
}

export default Title;