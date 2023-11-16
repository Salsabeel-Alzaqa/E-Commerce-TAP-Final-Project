import React from 'react'
import { Container, Box, Grid, Typography, useMediaQuery, Tab, Tabs, Button, Avatar } from '@mui/material';
import { useDataActions } from '../../hooks/useDataActions';

export const PersonalInfoPage = () => {
    const { usePersonalInfo } = useDataActions();
    const { data: info, isLoading, isError } = usePersonalInfo();
    if (isError) return <p>Error ...</p>;
    if (info) console.log(info);
  return (
    <Box my={5}>
       <Avatar>N</Avatar>
    </Box>
  )
}