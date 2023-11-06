import React from 'react'
import {Skeleton , Grid} from '@mui/material';
export const Loading = ({num}) => {
    return (
        <Grid container spacing={3}>
            {Array.from({ length: num }).map((_,index) => (
                <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                    <Skeleton variant="rectangular" width={'100%'} height={412} />
                </Grid>
            ))}
        </Grid>
    );
}