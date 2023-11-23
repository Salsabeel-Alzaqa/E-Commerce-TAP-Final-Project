import React from 'react'
import searchImage from '../../assets/images/art.png';
import { Box,Typography} from '@mui/material';
export const NotFound = () => {
    return (
        <Box sx={{ display: "flex", justifyContent: "center", flexDirection: 'column', alignItems: 'center' }} my={5}>
            <img src={searchImage} alt="search fail" width="40%" />
            <Typography variant="h4">
                We coudn’t find what you’re looking for. Try something else.
            </Typography>
        </Box>
    )
}